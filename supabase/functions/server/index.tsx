import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { load } from "https://deno.land/std/dotenv/mod.ts";
await load({ export: true });
import { Hono } from "npm:hono";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-1fed1eb5/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-1fed1eb5/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Create unique ID for this message
    const messageId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Store in database
    const messageData = {
      id: messageId,
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      status: "new"
    };

    await kv.set(messageId, messageData);

    console.log(`Contact form submission stored: ${messageId} from ${email}`);

    // Send email notification using Resend API
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (resendApiKey) {
      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Artasam's Portfolio Contact <onboarding@resend.dev>", // Resend's test email
            to: ["artasambinrashid@gmail.com"],
            subject: `New Portfolio Contact from ${name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>From:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
              <hr>
              <h3>Message:</h3>
              <p>${message.replace(/\n/g, '<br>')}</p>
            `,
          }),
        });

        if (!emailResponse.ok) {
          const errorData = await emailResponse.text();
          console.error("Failed to send email notification:", errorData);
        } else {
          console.log("Email notification sent successfully");
        }
      } catch (emailError) {
        console.error("Error sending email notification:", emailError);
      }
    } else {
      console.warn("RESEND_API_KEY not set. Email notification not sent. Message stored in database.");
    }

    return c.json({ 
      success: true, 
      message: "Message received successfully!",
      id: messageId 
    });

  } catch (error) {
    console.error("Error processing contact form:", error);
    return c.json({ error: "Failed to process message" }, 500);
  }
});

// Get all contact messages (for admin view)
app.get("/make-server-1fed1eb5/contact/messages", async (c) => {
  try {
    const messages = await kv.getByPrefix("contact_");
    
    // Sort by timestamp (newest first)
    messages.sort((a, b) => {
      const timeA = new Date(a.timestamp || 0).getTime();
      const timeB = new Date(b.timestamp || 0).getTime();
      return timeB - timeA;
    });

    return c.json({ messages });
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return c.json({ error: "Failed to fetch messages" }, 500);
  }
});

Deno.serve(app.fetch);