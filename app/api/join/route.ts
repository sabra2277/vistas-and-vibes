import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { name, email, date } = await req.json()

    if (!name || !email || !date) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Notify Alex
    await resend.emails.send({
      from: 'Vistas & Vibes <hello@vistasandvibes.co>',
      to: 'alextreyger19@gmail.com',
      subject: `New invitation list signup — ${date}`,
      html: `
        <p>Hi Alex,</p>
        <p>Someone just joined the invitation list!</p>
        <table style="border-collapse:collapse;margin-top:12px;">
          <tr><td style="padding:4px 12px 4px 0;color:#6a6260;font-size:14px;">Name</td><td style="font-size:14px;font-weight:600;">${name}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#6a6260;font-size:14px;">Email</td><td style="font-size:14px;font-weight:600;">${email}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#6a6260;font-size:14px;">Trip date</td><td style="font-size:14px;font-weight:600;">${date}</td></tr>
        </table>
        <p style="margin-top:16px;color:#6a6260;font-size:13px;">Sent from vistasandvibes.co</p>
      `,
    })

    // Auto-reply to the person who signed up
    await resend.emails.send({
      from: 'Alex at Vistas & Vibes <hello@vistasandvibes.co>',
      to: email,
      subject: `You're on the list — Vistas & Vibes`,
      html: `
        <div style="font-family:Georgia,serif;max-width:520px;margin:0 auto;color:#2a2420;">
          <p style="font-size:22px;font-weight:400;margin-bottom:8px;">Hi ${name},</p>
          <p style="font-size:15px;line-height:1.7;color:#6a6260;">
            Thank you for joining the invitation list for <strong style="color:#2a2420;">${date}</strong>.
            I've received your info and will be in touch personally with all the details as your spot opens up.
          </p>
          <p style="font-size:15px;line-height:1.7;color:#6a6260;">
            Can't wait to have you there.
          </p>
          <p style="font-size:15px;margin-top:24px;">
            Warmly,<br/>
            <strong>Alex</strong><br/>
            <span style="color:#c4a96a;font-size:13px;">Vistas &amp; Vibes &middot; Oaxaca Coast, Mexico</span>
          </p>
          <hr style="border:none;border-top:1px solid #e8e0d4;margin:28px 0;" />
          <p style="font-size:12px;color:#aaa;">
            Questions? Reply to this email or reach us at @VistasandVibesco
          </p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[Join API error]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
