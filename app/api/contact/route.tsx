import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: "Jolart US Website <hello@jolartus.com>",
      to: ["nilidonpepushaj@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #faf6f1;">
          <div style="background-color: white; padding: 30px; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h1 style="color: #1f1f1f; font-size: 24px; margin-bottom: 20px; border-bottom: 2px solid #c9a06a; padding-bottom: 10px;">
              New Contact Form Submission
            </h1>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #6b6b6b; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">
                Name
              </h3>
              <p style="color: #1f1f1f; font-size: 16px; margin: 0;">
                ${name}
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #6b6b6b; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">
                Email
              </h3>
              <p style="color: #1f1f1f; font-size: 16px; margin: 0;">
                <a href="mailto:${email}" style="color: #c9a06a; text-decoration: none;">
                  ${email}
                </a>
              </p>
            </div>

            ${
              phone
                ? `
            <div style="margin-bottom: 20px;">
              <h3 style="color: #6b6b6b; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">
                Phone
              </h3>
              <p style="color: #1f1f1f; font-size: 16px; margin: 0;">
                <a href="tel:${phone}" style="color: #c9a06a; text-decoration: none;">
                  ${phone}
                </a>
              </p>
            </div>
            `
                : ""
            }

            <div style="margin-bottom: 20px;">
              <h3 style="color: #6b6b6b; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">
                Message
              </h3>
              <div style="background-color: #efe6dc; padding: 15px; border-radius: 8px; border-left: 4px solid #c9a06a;">
                <p style="color: #1f1f1f; font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap;">
                  ${message}
                </p>
              </div>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #efe6dc;">
              <p style="color: #6b6b6b; font-size: 14px; margin: 0;">
                This message was sent from the Jolart US website contact form.
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}

Message:
${message}

---
This message was sent from the Jolart US website contact form.
      `,
    })

    // Send auto-reply to customer
    await resend.emails.send({
      from: "Jolart US <hello@jolartus.com>",
      to: [email],
      subject: "Thank you for contacting Jolart US",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #faf6f1;">
          <div style="background-color: white; padding: 30px; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #1f1f1f; font-size: 32px; margin-bottom: 5px; font-family: serif;">
                Jolart US
              </h1>
              <p style="color: #6b6b6b; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin: 0;">
                NEW YORK
              </p>
            </div>

            <h2 style="color: #1f1f1f; font-size: 24px; margin-bottom: 20px;">
              Thank you for your inquiry, ${name}!
            </h2>
            
            <p style="color: #1f1f1f; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              We've received your message and appreciate your interest in our services. Our team will review your project details and get back to you within 24 hours.
            </p>

            <div style="background-color: #efe6dc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #c9a06a;">
              <h3 style="color: #1f1f1f; font-size: 18px; margin-bottom: 15px;">
                What happens next?
              </h3>
              <ul style="color: #1f1f1f; font-size: 16px; line-height: 1.6; margin: 0; padding-left: 20px;">
                <li>We'll review your project requirements</li>
                <li>Schedule a consultation at your convenience</li>
                <li>Provide a detailed quote and timeline</li>
                <li>Begin transforming your walls into art</li>
              </ul>
            </div>

            <div style="margin: 30px 0; text-align: center;">
              <p style="color: #6b6b6b; font-size: 14px; margin-bottom: 10px;">
                Need immediate assistance?
              </p>
              <p style="color: #1f1f1f; font-size: 16px; margin: 0;">
                Call us at <a href="tel:+13476572890" style="color: #c9a06a; text-decoration: none; font-weight: bold;">(347) 657-2890</a>
              </p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #efe6dc; text-align: center;">
              <p style="color: #6b6b6b; font-size: 14px; margin: 0;">
                Jolart US - Studio<br>
                Serving NYC & Tri-State Area | 6 Years of Excellence
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
Thank you for your inquiry, ${name}!

We've received your message and appreciate your interest in our services. Our team will review your project details and get back to you within 24 hours.

What happens next?
- We'll review your project requirements
- Schedule a consultation at your convenience  
- Provide a detailed quote and timeline
- Begin transforming your walls into art

Need immediate assistance?
Call us at (347) 657-2890

---
Jolart US - Studio
Serving NYC & Tri-State Area | 6 Years of Excellence
      `,
    })

    return NextResponse.json({ message: "Email sent successfully", id: emailData.data?.id }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
  }
}
