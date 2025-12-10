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

interface AutoResponseEmailProps {
  name: string
}

export function AutoResponseEmail({ name }: AutoResponseEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Thank You for Your Quote Request!</Heading>

          <Text style={text}>Hi {name},</Text>

          <Text style={text}>
            Thank you for reaching out to Wide Open Development. We've received your quote request
            and will review it carefully.
          </Text>

          <Section style={section}>
            <Heading as="h2" style={h2}>What Happens Next?</Heading>
            <Text style={detail}>1. We'll review your project requirements</Text>
            <Text style={detail}>2. We'll prepare a detailed proposal and quote</Text>
            <Text style={detail}>3. We'll reach out within 24-48 hours to discuss next steps</Text>
          </Section>

          <Hr style={hr} />

          <Text style={text}>
            In the meantime, if you have any questions or would like to discuss your project
            sooner, feel free to give us a call at <strong>(801) 834-7246</strong>.
          </Text>

          <Hr style={hr} />

          <Text style={footer}>
            Best regards,<br />
            Wide Open Development<br />
            (801) 834-7246<br />
            hello@wideopendevelopment.com
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
  margin: "16px 0",
}

const section = {
  padding: "0 40px",
  margin: "20px 0",
}

const detail = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "8px 0",
}

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "14px",
  lineHeight: "22px",
  padding: "0 40px",
  margin: "20px 0",
}
