import { Resend } from "resend";
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "Zuza <noreply@zuzatech.com>";
const SITE_URL = process.env.SITE_URL ?? "https://zuzatech.com";
const LOGO_SRC = `${SITE_URL}/zuza-logo.png`;

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    // 1. Check if email already exists
    const { data: existing } = await supabase
      .from("waitlist")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (existing) {
      // Already signed up — return success silently, no email sent
      return NextResponse.json({ success: true });
    }

    // 2. Insert new record
    const { error: dbError } = await supabase
      .from("waitlist")
      .insert({ email });

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json({ error: "Failed to save signup" }, { status: 500 });
    }

    // 3. Send confirmation only for new signups
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: "You're on the Zuza waiting list 🎉",
      html: confirmationEmail(email),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

function confirmationEmail(email: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>You're on the Zuza waiting list</title>
</head>
<body style="margin:0;padding:0;background:#0d0d0d;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d0d0d;padding:48px 16px;">
    <tr>
      <td align="center">
        <table width="100%" style="max-width:560px;background:#111111;border-radius:16px;border:1px solid #2a2a2a;overflow:hidden;">

          <!-- Header with logo -->
          <tr>
            <td style="padding:32px 40px 28px;border-bottom:1px solid #2a2a2a;">
              <img
                src="${LOGO_SRC}"
                alt="Zuza"
                width="64"
                height="64"
                style="display:block;border:0;outline:none;"
              />
            </td>
          </tr>

          <!-- Yellow accent line -->
          <tr>
            <td style="height:3px;background:#facc15;"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#facc15;text-transform:uppercase;letter-spacing:2px;">
                Early Access
              </p>
              <h1 style="margin:0 0 20px;font-size:28px;font-weight:800;color:#ffffff;line-height:1.2;">
                You're on the list.
              </h1>
              <p style="margin:0 0 16px;font-size:15px;color:#888888;line-height:1.7;">
                Thanks for joining the Zuza waiting list. We're building a platform
                that gives independent vendors across Africa the tools they need to
                grow — and you'll be among the first to experience it.
              </p>
              <p style="margin:0 0 32px;font-size:15px;color:#888888;line-height:1.7;">
                We'll reach out personally when your early access is ready. In the
                meantime, keep doing what you do best.
              </p>

              <a href="https://zuzatech.com" style="display:inline-block;background:#facc15;color:#000000;font-size:14px;font-weight:700;padding:14px 28px;border-radius:10px;text-decoration:none;">
                Learn More About Zuza →
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #1a1a1a;">
              <p style="margin:0;font-size:12px;color:#444444;line-height:1.6;">
                You received this email because <strong style="color:#555555;">${email}</strong> signed up
                for early access at zuzatech.com. If this wasn't you, you can safely ignore this email.
              </p>
              <p style="margin:8px 0 0;font-size:12px;color:#333333;">
                © ${new Date().getFullYear()} Zuza Technologies — Built in South Africa 🇿🇦
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
