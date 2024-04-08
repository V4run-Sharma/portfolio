"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const subject = formData.get("subject");
  const message = formData.get("message");
  if (
    !senderEmail ||
    typeof senderEmail !== "string" ||
    senderEmail.length > 50
  ) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!subject || typeof subject !== "string" || subject.length > 100) {
    return {
      error: "Invalid subject",
    };
  }

  if (!message || typeof message !== "string" || message.length > 500) {
    return {
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "sharmavarun.1912@gmail.com",
      subject: subject,
      reply_to: senderEmail,
      text: message,
    });
    return {};
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    } else if (error && typeof error === "object" && "message" in error) {
      return {
        error: error.message,
      };
    }
  }
};

export default sendEmail;
