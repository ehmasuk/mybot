"use client";

import ChatBox from "@/components/ChatBox";
import { Info } from "lucide-react";

function TestDrive() {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <div className="z-20 h-[70vh] w-full md:max-w-md md:order-1 order-2">
        <ChatBox />
      </div>
      <div className="flex flex-col rounded-xl md:order-2 order-1 border py-6 shadow-sm w-full max-w-md mx-auto border-border/50 bg-white backdrop-blur-sm">
        <div className="items-start gap-1.5 px-6 pb-3">
          <div className="text-lg font-semibold text-center">Training is done? Let&apos;s test your bot.</div>
        </div>
        <div className="px-6 space-y-4">
          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
            <div className="mb-2 w-full flex justify-center">
              <Info color="#D97706" size={30} />
            </div>
            <div className="text-sm text-amber-800">
              <ul className="list-disc pl-5 space-y-3">
                <li>If you did not add bot role and data for his knowledge, please add them first.</li>
                <li>You have 5 messages/day</li>
                <li>We are using free AI models, so it may have delays</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestDrive;
