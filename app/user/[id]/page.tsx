'use client';

import { Button } from "@/components/ui/button";
import { Bot, Settings, Thermometer } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

function Welcome() {
  const { id } = useParams();

  return (
    <div>
      <div className="max-w-3xl mx-auto md:p-10 p-2 flex flex-col items-center justify-center">
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm w-full max-w-2xl">
          <div
            data-slot="card-header"
            className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center pb-4"
          >
            <div className="flex justify-center mb-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <Bot size={26} />
              </div>
            </div>
            <div data-slot="card-title" className="text-2xl font-bold">
              Create Your Custom Chatbot
            </div>
            <div data-slot="card-description" className="text-muted-foreground text-base">
              Follow these steps to build and train your personalized AI companion.
            </div>
          </div>
          <div data-slot="card-content" className="px-6 space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                  <Bot size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">Define Instructions</p>
                  <p className="text-xs text-muted-foreground">Provide a role and instructions for your bot (e.g., 'You are a helpful assistant for my website').</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                  <Settings size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">Add Knowledge</p>
                  <p className="text-xs text-muted-foreground">Upload relevant data to train your bot on your specific context.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                  <Thermometer size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">Test Your Bot</p>
                  <p className="text-xs text-muted-foreground">Interact with your bot in the 'Test Drive' tab to evaluate its performance.</p>
                </div>
              </div>
            </div>
            <div className="pt-2 text-center">
              <Link href={`/user/${id}/instruction`}>
                <Button>Start Building</Button>
              </Link>
              <p className="text-xs text-center text-muted-foreground mt-2">Enjoy building your AI companion!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
