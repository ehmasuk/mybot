"use client";

import ChatBox from "@/components/ChatBox";

function Welcome(){
  return (
    <div>
      <div className="w-full md:p-10 p-2 flex flex-col items-center justify-center">
        Welcome to your garage! Start by training your bot with relevant data to make it smarter and more responsive. Once training is complete, you can test your bots capabilities in the chatbox below. Enjoy building your AI companion!
      </div>
    </div>
  );
}

export default Welcome;
