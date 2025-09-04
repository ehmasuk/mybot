"use client";

import ChatBox from "@/components/ChatBox";

function Playground() {
  return (
    <div>
      <div className="w-full md:p-10 p-2 flex flex-col items-center justify-center">
        <div className="z-20 h-[70vh] w-full md:max-w-md">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}

export default Playground;
