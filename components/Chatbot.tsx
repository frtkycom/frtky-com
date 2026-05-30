"use client";

import { useState } from "react";

const linkedinUrl =
  "https://www.linkedin.com/in/f%C4%B1rat-kaya-068384164/";

const replies = [
  {
    keywords: ["who", "whois", "kim", "firat kim", "fırat kim", "about"],
    answer:
      "Fırat Kaya is a Quality Operations Specialist focused on customer experience, service quality, data analytics, SLA performance and AI-assisted quality evaluation.",
  },
  {
    keywords: ["work", "job", "role", "title", "calis", "çalış", "is", "iş", "meslek", "ne yap"],
    answer:
      "Fırat works as a Quality Operations Specialist. His work focuses on customer experience analytics, operational quality, process improvement, SLA analysis and AI-supported quality evaluation.",
  },
  {
    keywords: ["experience", "deneyim", "years", "yil", "yıl", "senior"],
    answer:
      "Fırat has 15+ years of professional experience in service quality, customer experience, operational performance and process improvement.",
  },
  {
    keywords: ["age", "old", "yas", "yaş", "kaç yaş", "kac yas"],
    answer:
      "This website focuses on Fırat’s professional background, projects and expertise rather than personal details.",
  },
  {
    keywords: ["nps", "customer", "cx", "musteri", "müşteri"],
    answer:
      "Fırat works on customer experience analytics, NPS programs, feedback analysis and experience improvement initiatives.",
  },
  {
    keywords: ["sla", "pareto", "ticket", "operation", "operasyon"],
    answer:
      "Fırat has built SLA and Pareto-based analysis frameworks to identify bottlenecks, long-running tickets and operational performance gaps.",
  },
  {
    keywords: ["ai", "llm", "quality", "first update", "yapay zeka"],
    answer:
      "Fırat focuses on AI-assisted quality evaluation, including first update assessment and LLM-based ticket quality analysis.",
  },
  {
    keywords: ["project", "projects", "proje", "portfolio"],
    answer:
      "Fırat’s key projects include Corporate NPS Program, SLA Pareto Analytics Framework, AI First Update Quality Assessment and Operational Intelligence Dashboards.",
  },
  {
    keywords: ["contact", "linkedin", "email", "mail", "ulas", "ulaş"],
    answer:
      "You can contact Fırat through LinkedIn or Gmail from the Contact page.",
  },
];

function normalize(text: string) {
  return text
    .toLowerCase()
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c");
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi, I'm Fırat's AI assistant. Ask me about his experience, projects, customer experience work, SLA analytics or AI quality evaluation.",
    },
  ]);
  const [input, setInput] = useState("");

  function getReply(question: string) {
    const lowerQuestion = normalize(question);

    const matchedReply = replies.find((item) =>
      item.keywords.some((keyword) =>
        lowerQuestion.includes(normalize(keyword))
      )
    );

    return (
      matchedReply?.answer ||
      `I couldn't find a specific answer to that question. For more detailed information about Fırat Kaya's professional background, projects and experience, please visit his LinkedIn profile: ${linkedinUrl}`
    );
  }

  function handleSend() {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    const botMessage = {
      role: "bot",
      text: getReply(input),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-[340px] rounded-3xl border border-white/10 bg-black/90 p-4 text-white shadow-2xl backdrop-blur">
          <div className="mb-4">
            <p className="text-sm text-violet-300">AI Assistant</p>
            <h3 className="text-lg font-semibold">Ask about Fırat</h3>
          </div>

          <div className="mb-4 max-h-72 space-y-3 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "bot"
                    ? "rounded-2xl bg-white/10 p-3 text-sm text-zinc-200"
                    : "ml-8 rounded-2xl bg-violet-500/20 p-3 text-sm text-violet-100"
                }
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              placeholder="Ask something..."
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm outline-none placeholder:text-zinc-500"
            />

            <button
              onClick={handleSend}
              className="rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="rounded-full border border-violet-400/40 bg-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400"
      >
        {open ? "Close" : "Ask AI"}
      </button>
    </div>
  );
}