import { useState, useEffect, useRef } from "react";
import ChatInput from "./components/ChatInput";
import ChatMessage from "./components/ChatMessage";
import CitationCard from "./components/CitationCard";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (input) => {
    setLoading(true);

    const userMessage = {
      role: "user",
      text: input,
    };

    // 🟡 Simulated response like in the assignment
    const response = {
      answer: `**Yes**, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was **self-employed** and aged **54–55 years** at the time of the accident.

**Legal Position:**

The **Punjab and Haryana High Court**, in *Dani Devi v. Pritam Singh*, held:

> “...as the age of the deceased at the time of accident was held to be about 54–55 years, being self-employed, **10% of annual income should have been awarded on account of future prospects.”  
>  
> [Para 7, citing *Pranay Sethi* and *Sarla Verma*]`,
      citations: [
        {
          text:
            "As the age of the deceased at the time of accident was held to be about 54–55 years...",
          source: "Dani_Devi_v_Pritam_Singh.pdf",
          link:
            "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
        },
      ],
    };

    setMessages((prev) => [...prev, userMessage]);

    // 🟢 Typing effect using response.answer
    let index = 0;
    const typingInterval = setInterval(() => {
      index++;
      const partialAnswer = response.answer.slice(0, index);

      const assistantMessage = {
        role: "assistant",
        text: partialAnswer,
        citation: {
          title: response.citations[0].source,
          type: "PDF",
          link: response.citations[0].link,
        },
      };

      setMessages((prev) => {
        const filtered = prev.filter((msg) => msg.role !== "assistant");
        return [...filtered, assistantMessage];
      });

      if (index >= response.answer.length) {
        clearInterval(typingInterval);
        setLoading(false);
      }
    }, 8); // Adjust speed as needed
  };

  return (
    <div className="dark min-h-screen bg-[#343541] text-white flex flex-col">
      <main className="flex-grow overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i}>
            <ChatMessage role={msg.role} text={msg.text} />
            {msg.role === "assistant" && msg.citation && (
              <div className="max-w-3xl mx-auto px-4">
                <CitationCard citation={msg.citation} />
              </div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </main>
      <footer className="sticky bottom-0 bg-[#40414f] p-4 border-t border-[#2c2c32]">
        <ChatInput onSend={handleSend} loading={loading} />
      </footer>
    </div>
  );
}
