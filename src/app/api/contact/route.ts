import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  locations?: string;
  message?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let body: ContactPayload;

  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const company = (body.company ?? "").trim();
  const locations = (body.locations ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !company || !locations || !message) {
    return NextResponse.json(
      { ok: false, message: "Please fill in all fields." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  // Deploy-safe placeholder: log the submission server-side.
  // Later: integrate an email provider or CRM webhook.
  console.log("[contact] submission", {
    name,
    email,
    company,
    locations,
    messageLength: message.length,
  });

  return NextResponse.json(
    { ok: true, message: "Thanks — we’ll reach out to book a demo." },
    { status: 200 }
  );
}
