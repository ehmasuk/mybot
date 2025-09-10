"use client";

import ChatBox from "@/components/ChatBox";

function TestDrive(){
  return (
    <div>
      <div className="w-full md:p-10 p-2 flex flex-col items-center justify-center">
        <h1>Traing is done?Lets test your bot</h1>
        <p>Remember that you have only 5 messages everyday as a free user to test your bot.</p>
        <div className="z-20 h-[70vh] w-full md:max-w-md">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}

export default TestDrive;
