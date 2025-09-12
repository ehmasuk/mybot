"use client";

import { Button, message } from "antd";
import { useParams } from "next/navigation";
import { useEffect, useState, ChangeEvent } from "react";

function InstructionPage() {
  const [defaultValue, setDefaultValue] = useState<string>("");
  const [newInstruction, setNewInstruction] = useState<string>("");

  const {id:userId} = useParams();

  const [loading, setLoading] = useState<boolean>(true);

  // Fetch existing instructions
  useEffect(() => {
    const fetchInstructions = async () => {
      try {
        const res = await fetch(`/api/instruction?userId=${userId}`);
        const data = await res.json();
        if (res.ok) {
          setDefaultValue(data?.instruction || "");
          setNewInstruction(data?.instruction || "");
        } else {
          message.error(data.message || "Failed to load instructions");
        }
      } catch (err) {
        console.error(err);
        message.error("Server error");
      } finally {
        setLoading(false);
      }
    };

    fetchInstructions();
  }, [userId]);

  const [postLoading, setPostLoading] = useState<boolean>(false);

  const handleInstructionSubmit = async () => {
    setPostLoading(true);
    try {
      const res = await fetch("/api/instruction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({userId,instruction: newInstruction,}),
      });

      const data = await res.json();

      if (!res.ok) {
        message.error(data.message || "Failed to save instruction");
      } else {
        message.success("Instruction saved successfully 🥳");
        setDefaultValue(newInstruction);
      }
    } catch (err) {
      console.error(err);
      message.error("Server error");
    } finally {
      setPostLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-xl border-0 bg-card/50 backdrop-blur-sm">
        <div className="px-6 space-y-6">
          <div className="space-y-3">
            <label htmlFor="instructions" className="flex items-center gap-2 select-none text-base font-medium">
              Bot Instructions
            </label>
            <p className="text-sm mb-3 text-blue-500">Add your bot role, it must be specific eg: you are a helpful assistant/doctor</p>
            <div className="relative">
              <textarea
                className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex w-full rounded-md border bg-transparent px-3 py-2 text-base leading-relaxed resize-none outline-none focus:border-accent focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[200px]"
                maxLength={1000}
                value={newInstruction}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNewInstruction(e.target.value)}
                disabled={postLoading || loading}
                rows={10}
                placeholder={loading ? "Loading..." : "Enter your bot instructions here... For example: 'You are a helpful assistant...'"}
              />
            </div>
          </div>
          <div className="flex items-center justify-end pt-4 border-t">
            <Button loading={postLoading} disabled={!newInstruction || postLoading} type="primary" onClick={handleInstructionSubmit}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructionPage;
