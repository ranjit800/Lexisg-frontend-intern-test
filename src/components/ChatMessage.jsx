import ReactMarkdown from "react-markdown";

export default function ChatMessage({ role, text }) {
  const isUser = role === "user";

  return (
    <div className="w-full px-4 py-2">
      <div className="max-w-3xl mx-auto">
        <div
          className={`p-4 rounded-md shadow-sm text-sm leading-relaxed prose prose-invert ${
            isUser
              ? "bg-[#212121] text-white ml-auto text-right"
              : "bg-[#444654] text-white text-left"
          }`}
        >
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
