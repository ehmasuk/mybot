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
          <div className="text-lg font-semibold text-center">Test Your Bot</div>
        </div>
        <div className="px-6 space-y-4">
          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
            <div className="mb-2 w-full flex justify-center">
              <Info color="#D97706" size={30} />
            </div>
            <div className="text-sm text-amber-800">
              <p className="font-semibold mb-2 text-center">Important Notes:</p>
              <ul className="list-disc pl-5 space-y-3">
                <li>Ensure you have defined your bot's instructions and provided a knowledge base before testing.</li>
                <li>You can send up to 5 messages per day for testing purposes.</li>
                <li>This free version uses models that may experience slight delays.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestDrive;
