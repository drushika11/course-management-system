"use client";

import { useState } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm your AI Mentor. I can help recommend courses, explain concepts, or map out your career path." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const newMsgs = [...messages, { role: "user", content: input }];
    setMessages(newMsgs);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages([...newMsgs, { role: "assistant", content: "That's a great question! Based on your interest, I recommend checking out our Next.js Masterclass." }]);
    }, 1000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed", bottom: "2rem", right: "2rem", width: "60px", height: "60px",
          borderRadius: "50%", backgroundColor: "var(--primary)", color: "white",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.5)", zIndex: 100,
          opacity: isOpen ? 0 : 1, transform: isOpen ? "scale(0.8)" : "scale(1)", transition: "all 0.3s"
        }}
      >
        <MessageSquare size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            style={{
              position: "fixed", bottom: "2rem", right: "2rem", width: "350px", height: "500px",
              backgroundColor: "var(--card-bg)", borderRadius: "var(--radius)",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)", zIndex: 101,
              display: "flex", flexDirection: "column", border: "1px solid var(--border)", overflow: "hidden"
            }}
          >
            {/* Header */}
            <div style={{ padding: "1rem", backgroundColor: "var(--primary)", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Bot size={20} />
                <span style={{ fontWeight: 600 }}>AI Mentor</span>
              </div>
              <button onClick={() => setIsOpen(false)} style={{ color: "white", padding: "4px" }}><X size={20} /></button>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: "auto", padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ alignSelf: msg.role === "assistant" ? "flex-start" : "flex-end", maxWidth: "80%" }}>
                  <div style={{ 
                    padding: "0.75rem 1rem", fontSize: "0.875rem", lineHeight: 1.4,
                    backgroundColor: msg.role === "assistant" ? "var(--bg)" : "var(--primary)",
                    color: msg.role === "assistant" ? "var(--text-primary)" : "white",
                    borderRadius: "1rem", borderBottomLeftRadius: msg.role === "assistant" ? 0 : "1rem",
                    borderBottomRightRadius: msg.role === "user" ? 0 : "1rem",
                    border: msg.role === "assistant" ? "1px solid var(--border)" : "none"
                  }}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} style={{ display: "flex", padding: "1rem", borderTop: "1px solid var(--border)", backgroundColor: "var(--card-bg)" }}>
              <input 
                type="text" 
                placeholder="Ask your AI mentor..." 
                value={input}
                onChange={e => setInput(e.target.value)}
                style={{ flex: 1, padding: "0.75rem", border: "1px solid var(--border)", borderRadius: "2rem", outline: "none", fontSize: "0.875rem" }}
              />
              <button type="submit" style={{ marginLeft: "0.5rem", width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Send size={16} style={{ marginLeft: "-2px" }} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
