import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, inquiryType, message } = body;

    // 1. Setup Transporter (Using Gmail as an example)
    // You need an "App Password" if using Gmail (Not your normal login password)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    // 2. Configure Email Options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mpumelelompanza98@gmail.com',
      replyTo: email,
      subject: `MedEuphoria Inquiry: ${inquiryType} from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Type: ${inquiryType}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #00BCD4;">New Partnership Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Type:</strong> ${inquiryType}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
            ${message}
          </div>
        </div>
      `,
    };

    // 3. Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}