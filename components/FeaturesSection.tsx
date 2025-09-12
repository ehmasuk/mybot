import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Zap, Puzzle, BarChart3, Shield, Smartphone, MessageSquare, Settings, FileText, BrainCircuit } from "lucide-react"

const features = [
  {
    icon: BrainCircuit,
    title: "Custom Instructions",
    description:
      "Define your chatbot\'s personality and behavior with custom instructions to create a unique user experience.",
  },
  {
    icon: FileText,
    title: "Knowledge Base",
    description: "Upload your own data to create a chatbot that can answer questions about specific information.",
  },
  {
    icon: MessageSquare,
    title: "Conversation History",
    description: "Review past conversations to understand user interactions and improve your chatbot\'s performance.",
  },
  {
    icon: Zap,
    title: "Quick Setup",
    description: "Get your chatbot up and running in minutes. Just register, create a bot, and start chatting.",
  },
  {
    icon: Bot,
    title: "AI-Powered",
    description: "Leverages powerful AI models to understand and respond intelligently to user queries.",
  },
  {
    icon: Settings,
    title: "Free to Use",
    description: "Create and use your chatbot for free. No hidden fees or subscriptions.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Everything You Need to Build a Personal Chatbot
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            MyBot provides the essential tools to create a chatbot that understands your data and interacts with users effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
