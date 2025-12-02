import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { buildWelcomeEmail } from '@/utils/emailTemplates';

export async function POST(request: NextRequest) {

    console.log("Received request to send email");

    // Check if we're in a static export environment
    if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true') {
        return NextResponse.json(
            { success: false, message: 'API routes not available in static export' },
            { status: 503 }
        );
    }

    try {
        const { email, subject, message } = await request.json();

        // Create transporter using Gmail (you can use other email services)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_PASS, // Your Gmail app password
            },
        });
        const html = buildWelcomeEmail({
            email,
        });

        const html2 = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0ea5e9;">Thank you for subscribing to Visamart!</h2>
            <p>${message}</p>
            <p>We're excited to have you on board and will keep you updated on our launch progress.</p>
            <br>
            <p>Best regards,<br>The Visamart Team</p>
          </div>    
        `;
        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: subject,
            html: html
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: 'Email sent successfully'
        });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to send email' },
            { status: 500 }
        );
    }
}
