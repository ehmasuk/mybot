import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Zap, Puzzle, BarChart3, Shield, Smartphone, MessageSquare, Settings } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI-Powered Intelligence",
    description:
      "Advanced natural language processing ensures your chatbots understand and respond intelligently to user queries.",
  },
  {
    icon: Puzzle,
    title: "Drag & Drop Builder",
    description: "Create complex conversation flows with our intuitive visual builder. No coding experience required.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Get your chatbot up and running in minutes, not hours. Deploy instantly across multiple platforms.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Track performance, user engagement, and conversation insights with comprehensive analytics dashboard.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption, GDPR compliance, and SOC 2 certification.",
  },
  {
    icon: Smartphone,
    title: "Multi-Platform Deploy",
    description: "Deploy your chatbots on websites, mobile apps, Slack, WhatsApp, and 20+ other platforms.",
  },
  {
    icon: MessageSquare,
    title: "Rich Conversations",
    description: "Support for text, images, videos, buttons, carousels, and custom interactive elements.",
  },
  {
    icon: Settings,
    title: "Custom Integrations",
    description:
      "Connect with your existing tools via APIs, webhooks, and pre-built integrations with popular services.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Everything You Need to Build Amazing Chatbots
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            From simple FAQ bots to complex AI assistants, MyBot provides all the tools you need to create engaging
            conversational experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
