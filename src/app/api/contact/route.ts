import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    // Placeholder for integration with email service or CRM.
    console.info("Contact form submitted", {
      name,
      email,
      messageLength: message.length,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Message sent successfully." },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: "Invalid request payload." },
      { status: 400 },
    );
  }
}
