import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { contactSchema } from "@/lib/validations/contact"
import { QuoteRequestEmail } from "@/lib/email/templates/quote-request"
import { AutoResponseEmail } from "@/lib/email/templates/auto-response"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // If RESEND_API_KEY is not set, log the data and return success (for development)
    if (!process.env.RESEND_API_KEY) {
      console.log("📧 Quote Request (Development Mode):")
      console.log(JSON.stringify(validatedData, null, 2))

      return NextResponse.json(
        {
          message: "Quote request received (development mode - no email sent)",
          data: validatedData
        },
        { status: 200 }
      )
    }

    // Send email to you (the business owner)
    const ownerEmail = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL || "dillon@wideopendevelopment.com",
      subject: `New Quote Request from ${validatedData.name}`,
      react: QuoteRequestEmail({ data: validatedData }),
    })

    // Send auto-response to the customer
    const customerEmail = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: validatedData.email,
      subject: "Thank you for your quote request - Wide Open Development",
      react: AutoResponseEmail({ name: validatedData.name }),
    })

    return NextResponse.json(
      {
        message: "Quote request sent successfully",
        ownerEmailId: ownerEmail.data?.id,
        customerEmailId: customerEmail.data?.id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: "Failed to process quote request" },
      { status: 500 }
    )
  }
}
