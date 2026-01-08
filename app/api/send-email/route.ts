import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { from, to, subject, message } = await request.json();

    // Validate input
    if (!from || !to || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content with professional formatting
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="border-bottom: 3px solid #667eea; padding-bottom: 10px; margin-bottom: 20px;">
            <h2 style="color: #667eea; margin: 0;">New Message from Portfolio</h2>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
            <p><strong>From:</strong> ${from}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
          
          <footer style="color: #999; font-size: 12px;">
            <p>This email was sent from your Portfolio website CHECK ITTT!!</p>
            <p>Reply to: ${from}</p>
          </footer>
        </div>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      replyTo: from,
      subject: `Portfolio Contact: ${subject}`,
      html: htmlContent,
      text: `From: ${from}\nSubject: ${subject}\n\n${message}`,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
