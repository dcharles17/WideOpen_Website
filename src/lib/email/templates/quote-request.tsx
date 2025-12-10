import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Hr,
} from "@react-email/components"
import { ContactFormData } from "@/lib/validations/contact"

interface QuoteRequestEmailProps {
  data: ContactFormData
}

export function QuoteRequestEmail({ data }: QuoteRequestEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Quote Request</Heading>

          <Text style={text}>You've received a new quote request from your website.</Text>

          <Section style={section}>
            <Heading as="h2" style={h2}>Contact Information</Heading>
            <Text style={detail}><strong>Name:</strong> {data.name}</Text>
            <Text style={detail}><strong>Email:</strong> {data.email}</Text>
            {data.phone && <Text style={detail}><strong>Phone:</strong> {data.phone}</Text>}
            {data.company && <Text style={detail}><strong>Company:</strong> {data.company}</Text>}
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h2" style={h2}>Project Details</Heading>
            <Text style={detail}><strong>Service:</strong> {data.service}</Text>
            {data.budget && <Text style={detail}><strong>Budget:</strong> {data.budget}</Text>}
            {data.timeline && <Text style={detail}><strong>Timeline:</strong> {data.timeline}</Text>}
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h2" style={h2}>Message</Heading>
            <Text style={message}>{data.message}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            This email was sent from the Wide Open Development contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
}

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0 20px",
  padding: "0 40px",
}

const h2 = {
  color: "#333",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "20px 0 10px",
}

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  padding: "0 40px",
}

const section = {
  padding: "0 40px",
}

const detail = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "4px 0",
}

const message = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "24px",
  whiteSpace: "pre-wrap" as const,
}

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  padding: "0 40px",
}
