import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const body = await request.json();
    const { name, email, phone, interest, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Novum Apartments <noreply@vicintas.com>",
      to: ["group@vicintas.com"],
      replyTo: email,
      subject: `New Novum Inquiry from ${name} — ${interest || "General"}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #0a0a0a;">
          
          <h1 style="font-size: 28px; font-weight: 300; letter-spacing: -0.5px; margin-bottom: 8px;">
            New Inquiry
          </h1>

          <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 3px; color: #6b6b6b; margin-bottom: 40px;">
            Novum Apartments
          </p>

          <hr style="border: none; border-top: 1px solid #e5e5e5; margin-bottom: 32px;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; width: 140px;">
                <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #6b6b6b;">Name</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                <span style="font-size: 16px; font-weight: 400;">${name}</span>
              </td>
            </tr>

            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #6b6b6b;">Email</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                <a href="mailto:${email}" style="color: #b8956a; text-decoration: none;">${email}</a>
              </td>
            </tr>

            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #6b6b6b;">Phone</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                <span style="font-size: 16px;">${phone || "Not provided"}</span>
              </td>
            </tr>

            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #6b6b6b;">Interested In</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                <span style="font-size: 16px; color: #b8956a;">${interest || "Not specified"}</span>
              </td>
            </tr>
          </table>

          ${
            message
              ? `
          <div style="margin-top: 32px;">
            <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #6b6b6b; margin-bottom: 12px;">Message</p>
            <p style="font-size: 16px; line-height: 1.7; color: #1a1a1a; background: #faf9f6; padding: 20px; border-left: 2px solid #b8956a;">
              ${message}
            </p>
          </div>
          `
              : ""
          }

          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 40px 0 24px;" />
          
          <p style="font-size: 12px; color: #6b6b6b;">
            Reply directly to this email to respond to ${name}.
          </p>

          <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #b8956a; margin-top: 8px;">
            Novum Apartments · 1112 E Berks St., Philadelphia
          </p>
        </div>
      `,
    });

    try {
      await resend.emails.send({
        from: "Novum Apartments <noreply@vicintas.com>",
        to: [email],
        subject: "We received your inquiry - Novum Apartments",
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #0a0a0a;">
            
            <h1 style="font-size: 28px; font-weight: 300; letter-spacing: -0.5px; margin-bottom: 8px;">
              Thank you, ${name}.
            </h1>

            <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 3px; color: #6b6b6b; margin-bottom: 40px;">
              Novum Apartments
            </p>

            <hr style="border: none; border-top: 1px solid #e5e5e5; margin-bottom: 32px;" />

            <p style="font-size: 16px; line-height: 1.8; color: #1a1a1a;">
              Your inquiry has been received. Our leasing team will be in touch within one business day.
            </p>

            <p style="font-size: 16px; line-height: 1.8; color: #1a1a1a; margin-top: 16px;">
              In the meantime, feel free to explore our residences online or call us directly at
              <a href="tel:+12676168870" style="color: #b8956a; text-decoration: none;">267-616-8870</a>.
            </p>

            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 40px 0 24px;" />

            <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #b8956a;">
              Novum Apartments
            </p>

            <p style="font-size: 12px; color: #6b6b6b;">
              1112 E Berks St., Philadelphia, PA 19125
            </p>
          </div>
        `,
      });
    } catch (confirmationError) {
      console.error("Confirmation email error:", confirmationError);
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);

    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}