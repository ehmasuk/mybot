"use client";

import { Button, message, notification } from "antd";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function KnowledgeTab() {
  const [newKnowledge, setNewKnowledge] = useState("");
  const [loading, setLoading] = useState(true);
  const [postLoading, setPostLoading] = useState(false);
  const [activeButton, setActiveButton] = useState(false);

  const { id: userId } = useParams();

  // Fetch existing knowledge
  useEffect(() => {
    const fetchKnowledge = async () => {
      try {
        const res = await fetch(`/api/knowledge?userId=${userId}`);
        const data = await res.json();

        if (!res.ok) {
          message.error(data.message || "Failed to load knowledge");
        } else {
          setNewKnowledge(data?.knowledge || "");
        }
      } catch (err) {
        console.error(err);
        message.error("Server error");
      } finally {
        setLoading(false);
      }
    };

    fetchKnowledge();
  }, [userId]);

  const handleKnowledgeSubmit = async () => {
    setPostLoading(true);
    message.loading({ content: "🤖 Saving knowledge...", key: "save", duration: 0 });

    try {
      const res = await fetch("/api/knowledge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, knowledge: newKnowledge }),
      });

      const data = await res.json();

      message.destroy("save");

      if (!res.ok) {
        message.error(data.message || "Failed to save knowledge");
      } else {
        setActiveButton(false);

        notification.success({
          message: "🥳 Success!",
          description: "Your chatbot is trained with new knowledge",
          duration: 0,
          placement: "bottomRight",
        });
      }
    } catch (err) {
      console.error(err);
      message.destroy("save");
      message.error("Server error");
    } finally {
      setPostLoading(false);
    }
  };

  const handleChange = (e) => {
    console.log("changed");
    setNewKnowledge(e.target.value);
    if (newKnowledge.trim().length > 0) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="text-black flex flex-col gap-6 rounded-xl py-6 shadow-xl border-0 bg-card/50 backdrop-blur-sm">
        <div className="px-6 space-y-6">
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-base font-medium" htmlFor="knowledge">
              Bot Knowledge
            </label>
            <textarea
              className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex w-full rounded-md border bg-transparent px-3 py-2 text-base leading-relaxed resize-none outline-none focus:border-blue-500 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[200px]"
              disabled={postLoading || loading}
              placeholder={loading ? "Loading..." : "Enter your knowledge here..."}
              maxLength={1000}
              value={newKnowledge}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-end pt-4 border-t">
            <Button
              loading={postLoading}
              disabled={!activeButton || !newKnowledge || postLoading}
              type="primary"
              onClick={handleKnowledgeSubmit}
              className="flex items-center rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-violet-400"
            >
              Save Knowledge
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KnowledgeTab;
