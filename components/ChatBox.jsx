"use client";
import { stringFormatter } from "@/helpers/helperFunctions";
import usePost from "@/hooks/usePost";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

function ChatBox() {
  const [userMessage, setUserMessage] = useState("");
  const { postData } = usePost();
  const chatBoxBodyRef = useRef(null);
  const [unableToSendMessage, setUnableToSendMessage] = useState(false);

  const { id: userId } = useParams();

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e) => {
    setUserMessage(e.target.value);
  };

  const scrollToBottom = useCallback(() => {
    chatBoxBodyRef.current?.scrollTo({
      top: chatBoxBodyRef.current.scrollHeight,
    });
  }, []);

  const messages = [
    {
      role: "bot",
      message: "Hello, how can I help you today?",
    },
  ];

  const [conversations, setConversations] = useState(messages);

  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!userMessage.trim()) return;

    const message = userMessage.trim();

    setUserMessage("");

    const newUserMessage = {
      role: "human",
      message,
    };

    setConversations((prev) => {
      return [...prev, newUserMessage];
    });

    try {
      setLoading(true);
      const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/chat", {
        userId,
        question: message,
        history: conversations,
      });

      const botResponse = { role: "bot", message: response.data };
      setConversations((prev) => {
        return [...prev, botResponse];
      });

      saveConversationToDatabase([...conversations, botResponse]);

      console.log([...conversations, botResponse]);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getUsersConversations = async (id) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/conversation?conversationId=${id}`);
      setConversations(res.data?.conversation?.messages);
    } catch (error) {
      console.log(error);
    }
  };

  const conversationsRef = useRef(conversations);

  useEffect(() => {
    const conversationId = Cookies.get("conversationId");

    if (conversationId) {
      getUsersConversations(conversationId);
    }
  }, []);

  // function to save conversation to database
  const saveConversationToDatabase = async (conversation) => {
    const conversationId = Cookies.get("conversationId");

    if (conversationId) {
      postData({
        endpoint: "/conversation",
        data: { userId, conversationId, messages: conversation },
        allowMessage: false,
      });
    } else {
      postData({
        endpoint: "/conversation",
        data: { userId, messages: conversation },
        allowMessage: false,
        onSuccess: (res) => {
          Cookies.set("conversationId", res.conversationId);
        },
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
    conversationsRef.current = conversations;
  }, [conversations, scrollToBottom]);

  return (
    <div className="h-full w-full overflow-hidden border">
      <main className="group relative flex h-full flex-col bg-white">
        <div className="relative flex flex-1 basis-full flex-col overflow-y-hidden scroll-smooth shadow-inner">
          <div ref={chatBoxBodyRef} className="flex w-full flex-1 flex-col space-y-3 overflow-y-auto px-5 pt-5 pb-4 sm:overscroll-contain scroll-smooth">
            {conversations?.map((item, index) => {
              if (item.role === "bot") {
                return (
                  <div key={index} className="flex w-full items-end pr-8">
                    <div className="group/message relative max-w-[min(calc(100%-40px),65ch)]">
                      <div className="hyphens-auto break-words text-left text-sm leading-5 relative inline-block max-w-full rounded-[20px] rounded-bl px-5 py-4 bg-zinc-200/50 text-zinc-800">
                        <div className="w-full text-sm">
                          <div dangerouslySetInnerHTML={{ __html: stringFormatter(item.message) }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="hyphens-auto text-wrap break-words rounded-[20px] text-left text-sm leading-5 antialiased ml-auto rounded-br px-4 py-2 whitespace-pre border-zinc-200 font-sans max-w-[min(calc(100%-40px),65ch)]"
                    style={{ backgroundColor: "rgb(59, 129, 246)", borderWidth: 0, color: "rgb(255, 255, 255)" }}
                  >
                    {item.message}
                  </div>
                );
              }
            })}
            {loading && (
              <div className="flex w-full items-end pr-8">
                <div className="group/message relative max-w-[min(calc(100%-40px),65ch)]">
                  <div className="hyphens-auto break-words text-left text-sm leading-5 relative inline-block max-w-full rounded-[20px] rounded-bl md:px-4 md:py-2 px-3 py-2 bg-zinc-200/50 text-zinc-800">
                    <div className="w-full text-sm">
                      <div>
                        <div className="inline-flex gap-1 items-center animate-pulse">
                          <div className="h-1 w-1 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
                          <div className="h-1 w-1 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
                          <div className="h-1 w-1 bg-black rounded-full animate-bounce" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {!unableToSendMessage && (
          <div className="flex shrink-0 flex-col justify-end">
            <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={handleSendMessage} value={userMessage} />
          </div>
        )}
      </main>
    </div>
  );
}

export default ChatBox;
