"use client";
import { stringFormatter } from "@/helpers/helperFunctions";
import usePost from "@/hooks/usePost";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState, ChangeEvent, FormEvent } from "react";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

type Message = {
  role: "bot" | "human";
  message: string;
};

function ChatBox(): JSX.Element {
  const [userMessage, setUserMessage] = useState<string>("");
  const { postData } = usePost();
  const chatBoxBodyRef = useRef<HTMLDivElement | null>(null);
  const [unableToSendMessage, setUnableToSendMessage] = useState<boolean>(false);

  const params = useParams();
  const userId = params?.id as string | undefined;

  const placeholders: string[] = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserMessage(e.target.value);
  };

  const scrollToBottom = useCallback(() => {
    chatBoxBodyRef.current?.scrollTo({
      top: chatBoxBodyRef.current.scrollHeight,
    });
  }, []);

  const initialMessages: Message[] = [
    {
      role: "bot",
      message: "Hello, how can I help you today?",
    },
  ];

  const [conversations, setConversations] = useState<Message[]>(initialMessages);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!userMessage.trim()) return;

    const message = userMessage.trim();
    setUserMessage("");

    const newUserMessage: Message = {
      role: "human",
      message,
    };

    setConversations((prev) => [...prev, newUserMessage]);

    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/chat`,
        {
          userId,
          question: message,
          history: conversations,
        }
      );

      const botResponse: Message = { role: "bot", message: response.data };
      setConversations((prev) => [...prev, botResponse]);

      saveConversationToDatabase([...conversations, botResponse]);
      console.log([...conversations, botResponse]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getUsersConversations = async (id: string) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/conversation?conversationId=${id}`
      );
      setConversations(res.data?.conversation?.messages || []);
    } catch (error) {
      console.error(error);
    }
  };

  const conversationsRef = useRef<Message[]>(conversations);

  useEffect(() => {
    const conversationId = Cookies.get("conversationId");
    if (conversationId) {
      getUsersConversations(conversationId);
    }
  }, []);

  const saveConversationToDatabase = async (conversation: Message[]) => {
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
        onSuccess: (res: { conversationId: string }) => {
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
          <div
            ref={chatBoxBodyRef}
            className="flex w-full flex-1 flex-col space-y-3 overflow-y-auto px-5 pt-5 pb-4 sm:overscroll-contain scroll-smooth"
          >
            {conversations?.map((item, index) =>
              item.role === "bot" ? (
                <div key={index} className="flex w-full items-end pr-8">
                  <div className="group/message relative max-w-[min(calc(100%-40px),65ch)]">
                    <div className="hyphens-auto break-words text-left text-sm leading-5 relative inline-block max-w-full rounded-[20px] rounded-bl px-5 py-4 bg-zinc-200/50 text-zinc-800">
                      <div className="w-full text-sm">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: stringFormatter(item.message),
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className="hyphens-auto text-wrap break-words rounded-[20px] text-left text-sm leading-5 antialiased ml-auto rounded-br px-4 py-2 whitespace-pre border-zinc-200 font-sans max-w-[min(calc(100%-40px),65ch)]"
                  style={{
                    backgroundColor: "rgb(59, 129, 246)",
                    borderWidth: 0,
                    color: "rgb(255, 255, 255)",
                  }}
                >
                  {item.message}
                </div>
              )
            )}
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
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={handleSendMessage}
              value={userMessage}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default ChatBox;
