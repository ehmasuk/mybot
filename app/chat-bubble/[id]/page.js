"use client";
import ChatBox from "@/components/ChatBox";
import { useParams } from "next/navigation";

function ChatBubble() {
  const params = useParams();

  return (
    <div className="h-screen">
      <ChatBox />
    </div>
  );
}

export default ChatBubble;
