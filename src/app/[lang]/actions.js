"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData) {
  try {
    const { firstName, lastName, email, phone, locale } = formData;

    // Localization messages
    const messages = {
      en: {
        subject: "New Contact Form Submission",
        success: "Email sent successfully",
        failure: "Failed to send email",
      },
      ur: {
        subject: "نیا رابطہ فارم جمع کرایا گیا",
        success: "ای میل کامیابی کے ساتھ بھیج دیا گیا",
        failure: "ای میل بھیجنے میں ناکام",
      },
    };

    const selectedMessages = messages[locale] || messages["en"];

    // Create transporter (using environment variables)
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST, // Mailtrap or Gmail SMTP
      port: process.env.MAIL_PORT, // 587 for Mailtrap, 465 for Gmail
      secure: process.env.MAIL_PORT === "465", // True for 465, false for 587
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Define email content
    const mailOptions = {
      from: process.env.MAIL_FROM, // Your email
      to: process.env.MAIL_TO, // Admin email
      subject: selectedMessages.subject,
      html: `
        <h3>${selectedMessages.subject}</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true, message: selectedMessages.success };
  } catch (error) {
    return { success: false, message: "Failed to send email" };
  }
}
