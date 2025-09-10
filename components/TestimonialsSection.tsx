import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    avatar: "/professional-woman-avatar.png",
    content:
      "MyBot transformed how we handle customer support. Our response time improved by 80% and customer satisfaction is at an all-time high.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder at StartupLab",
    avatar: "/professional-man-avatar.png",
    content:
      "As a non-technical founder, I was amazed how quickly I could build a sophisticated chatbot. MyBot made the impossible possible.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Marketing Director at GrowthCo",
    avatar: "/professional-woman-avatar-2.png",
    content:
      "The analytics insights from our chatbot conversations helped us understand our customers better than any survey ever could.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Developer at InnovateTech",
    avatar: "/professional-man-avatar-2.png",
    content:
      "The API integrations are seamless. I was able to connect our chatbot to our entire tech stack in just a few hours.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Operations Manager at ServicePro",
    avatar: "/professional-woman-avatar-3.jpg",
    content:
      "MyBot handles 70% of our customer inquiries automatically. It's like having a 24/7 support team that never sleeps.",
    rating: 5,
  },
  {
    name: "Alex Johnson",
    role: "Product Manager at DigitalFirst",
    avatar: "/professional-man-avatar-3.jpg",
    content:
      "The drag-and-drop interface is incredibly intuitive. Our entire team can now create and modify chatbot flows without any technical knowledge.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Trusted by Thousands of Businesses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See what our customers are saying about their experience with MyBot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-muted-foreground mb-6 text-pretty">"{testimonial.content}"</blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
