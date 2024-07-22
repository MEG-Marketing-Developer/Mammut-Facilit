// app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, option } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New submission from ${name}`,
      text: `Option selected: ${option}`
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ status: 'Email sent' });
  } catch (error) {
    return NextResponse.json({ status: 'Error sending email', error: (error as Error).message });
  }
}
