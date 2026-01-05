import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface InquiryRequest {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

serve(async (req: Request): Promise<Response> => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, company, email, phone, message }: InquiryRequest =
      await req.json();

    if (!name || !company || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: corsHeaders }
      );
    }

    const MAILGUN_API_KEY = Deno.env.get("MAILGUN_API_KEY");
    const MAILGUN_DOMAIN = Deno.env.get("MAILGUN_DOMAIN");
    const MAILGUN_BASE_URL =
      Deno.env.get("MAILGUN_BASE_URL") ?? "https://api.mailgun.net";

    if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
      throw new Error("Mailgun environment variables not set");
    }

    // Build form data (application/x-www-form-urlencoded)
    const formData = new URLSearchParams();
    formData.append(
      "from",
      `OZO Bags Inquiry <postmaster@${MAILGUN_DOMAIN}>`
    );
    formData.append("to", "OzoBags <nzlar154@gmail.com>");
    formData.append(
      "subject",
      `New Inquiry from ${name} - ${company}`
    );
    formData.append(
      "html",
      `
      <h1>New Inquiry from Website</h1>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Company:</strong> ${company}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
      </ul>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `
    );

    const response = await fetch(
      `${MAILGUN_BASE_URL}/v3/${MAILGUN_DOMAIN}/messages`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Basic " +
            btoa(`api:${MAILGUN_API_KEY}`),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("Mailgun error:", result);
      throw new Error(result.message || "Mailgun failed");
    }

    console.log("Email sent via Mailgun:", result);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: corsHeaders }
    );
  } catch (error: any) {
    console.error("send-inquiry error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: corsHeaders }
    );
  }
});
