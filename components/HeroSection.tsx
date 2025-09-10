import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-card py-20 sm:py-32">
      
      
  <div className="pattern-boxes pattern-gray-500 pattern-bg-white 
  pattern-size-8 pattern-opacity-50 size-20"></div>
  
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary-foreground ring-1 ring-secondary/20">
            <Sparkles className="mr-2 h-4 w-4" />
            Build Smarter Chatbots in Minutes
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Create Powerful <span className="text-primary">Chatbots</span> Without Code
          </h1>

          {/* Subheading */}
          <p className="mb-10 text-lg text-muted-foreground sm:text-xl lg:text-2xl text-pretty max-w-3xl mx-auto">
            MyBot empowers developers, businesses, and individuals to build intelligent chatbots with our intuitive
            drag-and-drop interface. No coding required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Building Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Watch Demo
            </Button>
          </div>

          {/* Hero Image/Illustration */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              {/* <img
                src="/modern-chatbot-interface-dashboard.jpg"
                alt="MyBot Dashboard Interface"
                className="rounded-xl shadow-2xl ring-1 ring-border"
              /> */}
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground rounded-full p-3">
                <Bot className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
