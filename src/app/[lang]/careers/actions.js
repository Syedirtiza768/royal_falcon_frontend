"use server";

import { createTransport } from "nodemailer";

export async function submitApplication(formData) {
  try {
    // Extract form data
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const cvFile = formData.get("cv");

    // Convert File to Buffer for email attachment
    const arrayBuffer = await cvFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Configure email transporter using the provided environment variables
    const transporter = createTransport({
      host: process.env.MAIL_HOST,
      port: Number.parseInt(process.env.MAIL_PORT || "465"),
      secure: true, // For port 465
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Prepare email content
    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO || "careers@upwardsae.com",
      subject: `New Job Application: ${fullName}`,
      html: `
    <h2>New Job Application</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
  `,
      attachments: [
        {
          filename: cvFile.name,
          content: buffer,
        },
      ],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error("Error submitting application:", error);
    throw new Error("Failed to submit application");
  }
}
