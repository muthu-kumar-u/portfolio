import emailjs from "@emailjs/browser";

export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const isEmailJsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

/**
 * Sends the contact form via EmailJS. Requires VITE_EMAILJS_SERVICE_ID,
 * VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to be set (see
 * .env.example). Your EmailJS template should expect `from_name`,
 * `reply_to` and `message` variables.
 */
export async function sendContactMessage(payload: ContactFormPayload): Promise<void> {
  if (!isEmailJsConfigured) {
    throw new Error(
      "EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to your .env file.",
    );
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: payload.name,
      reply_to: payload.email,
      message: payload.message,
    },
    { publicKey: PUBLIC_KEY },
  );
}
