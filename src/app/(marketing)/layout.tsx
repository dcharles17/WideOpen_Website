import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SimpleChatButton } from "@/components/shared/chat-widget"
import { ExitIntentPopup } from "@/components/shared/exit-intent-popup"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <SimpleChatButton />
      <ExitIntentPopup />
    </>
  )
}
