import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, company } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ email, company: company || null }])
      .select();

    if (error) {
      // Check if it's a duplicate email error
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already on the waitlist' },
          { status: 400 }
        );
      }
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to join waitlist. Please try again.' },
        { status: 500 }
      );
    }

    // Send confirmation email
    try {
      await resend.emails.send({
        from: 'Quotio <onboarding@resend.dev>',
        to: email,
        subject: "You're on the Quotio waitlist!",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #4f46e5;">Welcome to Quotio!</h1>
            <p style="font-size: 16px; color: #475569;">
              Thanks for joining our waitlist. We're excited to have you on board!
            </p>
            <p style="font-size: 16px; color: #475569;">
              We're working hard to launch Quotio and we'll let you know as soon as early access is available.
            </p>
            <p style="font-size: 16px; color: #475569;">
              In the meantime, stay tuned for updates on our progress.
            </p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
            <p style="font-size: 14px; color: #94a3b8;">
              <strong>Quotio</strong> - Instant quotes. Fewer emails.
            </p>
            <p style="font-size: 12px; color: #cbd5e1;">
              This is a demo project for portfolio purposes.
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Continue even if email fails - user is still on waitlist
    }

    return NextResponse.json(
      { message: 'Successfully joined the waitlist!', data },
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
