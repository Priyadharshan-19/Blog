import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// This reads the key from your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Successfully creates the contact globally without needing an audienceId
    await resend.contacts.create({
      email: email,
      unsubscribed: false, 
    });

    return NextResponse.json({ message: 'Subscribed successfully!' }, { status: 200 });
  } catch (error) {
    // Log the error to your terminal to see exactly why it fails
    console.error("Resend API Error:", error);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}