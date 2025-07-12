import { useState } from "react";

export default function ChatInput({ onSend, loading }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="max-w-3xl mx-auto w-full flex gap-2">
      <textarea
        className="w-full rounded-md p-3 bg-[#40414f] border border-[#4c4d56] text-white resize-none focus:outline-none"
        rows={1}
        placeholder="Ask your legal question here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-[#19c37d] text-white px-4 py-2 rounded-md hover:bg-[#13a96b] disabled:opacity-50"
      >
        {loading ? "..." : "Send"}
      </button>
    </div>
  );
}
