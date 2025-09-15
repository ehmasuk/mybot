import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Sparkles } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export function HeroSection() {
  const { data, status } = useSession();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-card">
      <div
        className="pattern-boxes pattern-gray-500 pattern-bg-white 
  pattern-size-8 pattern-opacity-50 size-20"
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary-foreground ring-1 ring-secondary/20">
            <Sparkles className="mr-2 h-4 w-4" />
            Free to Use: Your Personal AI Chatbot
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Create a <span className="text-primary">Chatbot</span> With Your Personal Data
          </h1>

          {/* Subheading */}
          <p className="mb-10 text-lg text-muted-foreground sm:text-xl lg:text-2xl text-pretty max-w-3xl mx-auto">
            MyBot lets you build a custom chatbot with your own instructions and knowledge base. It&apos;s a powerful tool to create a personalized AI experience, and it&apos;s completely free.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={status === "authenticated" ? "/user/" + data?.user?.id : "/register"}>
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Hero Image/Illustration */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground rounded-full p-3">
                <Bot className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
