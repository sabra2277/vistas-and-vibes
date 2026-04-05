import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, date } = await req.json()

    if (!name || !email || !date) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Log for now — wire up Resend or a DB later
    console.log('[Join List]', { name, email, date, ts: new Date().toISOString() })

    // TODO: Send notification email via Resend
    // await resend.emails.send({
    //   from: process.env.EMAIL_FROM!,
    //   to: process.env.ALEX_EMAIL!,
    //   subject: `New list signup — ${date}`,
    //   text: `${name} (${email}) joined the list for ${date}.`,
    // })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
