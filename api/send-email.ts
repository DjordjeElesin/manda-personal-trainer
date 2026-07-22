import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";

const emailSchema = z.email();

export const checkIsEmailValid = (email: string): boolean => {
  return emailSchema.safeParse(email).success;
};

const RESEND_API_URL = "https://api.resend.com/emails";
const FROM_ADDRESS = "Manda Fit <info@manda.fit>";
const REPLY_TO_ADDRESS = "ajemmanda@gmail.com";

const TRAINING_PLAN_URL =
  "https://drive.google.com/uc?export=download&id=1SRFHmFtnaPrtvlXNvqVmKkoKGYXGynB5";
const RECIPE_BOOK_URL =
  "https://drive.google.com/uc?export=download&id=1KvkrQI3jO5GPE5qOks2xNmryzDfzehOg";

const appendEmailToSheet = async (email: string): Promise<void> => {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) return;

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, secret: process.env.SHEET_SECRET ?? "" }),
  });
};

const buildEmailHtml = (): string => `
  <div style="font-family: Arial, sans-serif; max-width: 520px; margin: 0 auto; color: #111;">
    <h1 style="font-size: 22px;">Ovo je tvoj prvi korak ka promeni</h1>
    <p>Evo tvojih besplatnih vodiča od Mande. Klikni da preuzmeš:</p>
    <p style="margin: 24px 0;">
      <a href="${TRAINING_PLAN_URL}"
         style="display:inline-block; background:#000; color:#fff; padding:14px 22px; border-radius:9999px; text-decoration:none; margin:6px 0;">
        Preuzmi plan treninga
      </a>
    </p>
    <p style="margin: 24px 0;">
      <a href="${RECIPE_BOOK_URL}"
         style="display:inline-block; background:#000; color:#fff; padding:14px 22px; border-radius:9999px; text-decoration:none; margin:6px 0;">
        Preuzmi knjigu recepata
      </a>
    </p>
    <p style="color:#666; font-size:13px;">Ako imaš bilo kakvih pitanja, samo odgovori na ovaj mejl, stojim ti na raspolaganju!</p>
  </div>
`;

const sendEmailController = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey)
    return res.status(500).json({ error: "Server misconfiguration" });

  const { email: rawEmail } = req.body as { email?: unknown };
  const email = typeof rawEmail === "string" ? rawEmail.trim() : "";

  if (!checkIsEmailValid(email))
    return res.status(400).json({ error: "Neispravna email adresa" });

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: [email],
      reply_to: REPLY_TO_ADDRESS,
      subject: "Tvoji besplatni vodiči od Mande!",
      html: buildEmailHtml(),
    }),
  });

  if (!response.ok)
    return res.status(500).json({ error: "Slanje nije uspelo" });

  // Best-effort: log the lead to Google Sheets. Never fail the request if this errors.
  try {
    await appendEmailToSheet(email);
  } catch (err) {
    console.error("Failed to append email to sheet:", err);
  }

  return res.status(200).json({ success: true });
};

export default sendEmailController;
