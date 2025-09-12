import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Bot, Cog, Rocket, Zap, Users, BarChart3 } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: Bot,
    title: "Design Your Bot",
    description:
      "Use our intuitive drag-and-drop interface to create conversation flows, add responses, and define your bot's personality with zero coding required.",
    features: ["Visual Flow Builder", "Pre-built Templates", "Custom Responses"],
  },
  {
    step: "02",
    icon: Cog,
    title: "Configure & Train",
    description:
      "Set up integrations, train your AI with custom data, and configure advanced features like analytics and user management seamlessly.",
    features: ["AI Training", "API Integrations", "User Management"],
  },
  {
    step: "03",
    icon: Rocket,
    title: "Deploy & Scale",
    description:
      "Launch your chatbot across multiple platforms with one click. Monitor performance and iterate based on real user feedback and analytics.",
    features: ["Multi-platform Deploy", "Real-time Analytics", "Performance Monitoring"],
  },
]


export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance mb-6">
            How MyBot Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Transform your ideas into intelligent chatbots in three simple steps. Our platform handles the complexity
            while you focus on creating exceptional user experiences.
          </p>
        </div>

        <div className="relative mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <Card className="border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    {/* Step indicator with enhanced styling */}
                    <div className="flex items-center mb-8">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground text-lg font-bold mr-4">
                        {step.step}
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground mb-4 text-balance">{step.title}</h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed mb-6">{step.description}</p>

                    {/* Feature list */}
                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Enhanced arrow with animation */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-background border-2 border-border flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300">
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}
