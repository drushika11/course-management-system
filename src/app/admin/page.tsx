"use client";

import { useState } from "react";
import { Users, BookOpen, BarChart3, Settings, MessageSquare, Plus, Edit, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("analytics");

  const renderContent = () => {
    switch (activeTab) {
      case "analytics":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Analytics Dashboard</h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
              {[
                { label: "Total Revenue", value: "₹450,290", icon: <BarChart3 /> },
                { label: "Total Users", value: "1,204", icon: <Users /> },
                { label: "Active Courses", value: "48", icon: <BookOpen /> },
                { label: "AI Chatbot Uses", value: "8,392", icon: <MessageSquare /> }
              ].map(stat => (
                <div key={stat.label} className="card" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ padding: "1rem", backgroundColor: "rgba(99,102,241,0.1)", color: "var(--primary)", borderRadius: "var(--radius)" }}>
                    {stat.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "0.875rem", color: "var(--text-secondary)", fontWeight: 500 }}>{stat.label}</h3>
                    <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{ height: "300px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--bg)", border: "1px dashed var(--border)" }}>
               <p style={{ color: "var(--text-secondary)" }}>[ Revenue Chart Placeholder ]</p>
            </div>
          </motion.div>
        );
      
      case "courses":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Manage Courses</h2>
              <button className="btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}><Plus size={16}/> New Course</button>
            </div>

            <div className="card" style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <th style={{ padding: "1rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>Course Title</th>
                    <th style={{ padding: "1rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>Instructor</th>
                    <th style={{ padding: "1rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>Price</th>
                    <th style={{ padding: "1rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>Enrolled</th>
                    <th style={{ padding: "1rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[1,2,3,4].map(id => (
                    <tr key={id} style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "1rem", fontWeight: 500 }}>Modern Frontend Development {id}</td>
                      <td style={{ padding: "1rem", color: "var(--text-secondary)" }}>Jane Smith</td>
                      <td style={{ padding: "1rem" }}>₹4,999</td>
                      <td style={{ padding: "1rem" }}>342</td>
                      <td style={{ padding: "1rem", display: "flex", gap: "0.5rem" }}>
                        <button className="btn-secondary" style={{ padding: "0.25rem", border: "none" }}><Edit size={18} color="var(--primary)"/></button>
                        <button className="btn-secondary" style={{ padding: "0.25rem", border: "none" }}><Trash2 size={18} color="var(--danger)"/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        );

      case "users":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem" }}>Manage Users</h2>
            <div className="card" style={{ height: "400px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--bg)", border: "1px dashed var(--border)" }}>
               <p style={{ color: "var(--text-secondary)" }}>[ User Data Grid Placeholder ]</p>
            </div>
          </motion.div>
        );

      case "bot":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0" }}>AI Chatbot Control</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>Configure instructions, context, and restrictions for the AI mentor.</p>

            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "600px" }}>
              <div>
                <label className="label">System Prompt / Role</label>
                <textarea className="input-field" rows={4} defaultValue="You are a helpful AI Mentor. Recommend courses and explain concepts clearly." />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <input type="checkbox" id="voiceToggle" defaultChecked />
                <label htmlFor="voiceToggle" style={{ fontSize: "0.875rem", fontWeight: 500 }}>Enable Voice Interaction capabilities</label>
              </div>
              <button className="btn-primary" style={{ alignSelf: "flex-start" }}>Save Configuration</button>
            </div>
          </motion.div>
        );

      default: return null;
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - 4rem)" }}>
      {/* Admin Sidebar */}
      <aside style={{ width: "250px", backgroundColor: "var(--card-bg)", borderRight: "1px solid var(--border)", padding: "2rem 1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "1rem", paddingLeft: "1rem" }}>Admin Tools</p>
        {[
          { id: "analytics", icon: <BarChart3 size={20}/>, label: "Analytics" },
          { id: "courses", icon: <BookOpen size={20}/>, label: "Courses & Content" },
          { id: "users", icon: <Users size={20}/>, label: "Users" },
          { id: "bot", icon: <MessageSquare size={20}/>, label: "AI Chatbot" },
          { id: "settings", icon: <Settings size={20}/>, label: "System Settings" }
        ].map(tab => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{ 
              display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", 
              borderRadius: "var(--radius)", textAlign: "left", width: "100%",
              backgroundColor: activeTab === tab.id ? "rgba(99,102,241,0.1)" : "transparent",
              color: activeTab === tab.id ? "var(--primary)" : "var(--text-secondary)",
              fontWeight: activeTab === tab.id ? 600 : 500,
              transition: "all 0.2s"
            }}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </aside>

      {/* Main Admin Content */}
      <main style={{ flex: 1, padding: "3rem", backgroundColor: "var(--bg)", overflowY: "auto" }}>
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
    </div>
  );
}
