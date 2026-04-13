"use client";

import { useState } from "react";
import { BookOpen, User, Award, PlayCircle, LogOut, Settings, BarChart2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("courses");
  
  // Dummy Data for visual mock up
  const enrolledCourses = [
    { id: 1, title: "Modern Next.js 14 Developer", progress: 65, totalModules: 10, completedModules: 6, instructor: "Sarah Jenkins" },
    { id: 2, title: "Advanced UI/UX Animation", progress: 100, totalModules: 8, completedModules: 8, instructor: "David Chen" },
    { id: 3, title: "Backend Systems Design", progress: 15, totalModules: 12, completedModules: 2, instructor: "Michael Boss" },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case "courses":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="dashboard-content">
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>My Enrolled Courses</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {enrolledCourses.map(course => (
                <div key={course.id} className="card" style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center" }}>
                  <div style={{ width: "120px", height: "80px", background: "var(--border)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <PlayCircle size={32} color="var(--text-secondary)" />
                  </div>
                  <div style={{ flex: 1, minWidth: "250px" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.25rem" }}>{course.title}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "1rem" }}>Instructor: {course.instructor}</p>
                    
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <div style={{ flex: 1, height: "8px", background: "var(--border)", borderRadius: "4px", overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${course.progress}%`, background: course.progress === 100 ? "var(--success)" : "var(--primary)", transition: "width 1s ease-in-out" }} />
                      </div>
                      <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>{course.progress}%</span>
                    </div>
                  </div>
                  <div>
                    {course.progress === 100 ? (
                       <button className="btn-secondary" style={{ color: "var(--success)", borderColor: "var(--success)" }}><Award size={18}/> Certificate</button>
                    ) : (
                       <button className="btn-primary">Resume Learning</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case "certificates":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
             <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>My Certificates</h2>
             <div className="card" style={{ borderLeft: "4px solid var(--success)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 600 }}>Advanced UI/UX Animation</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>Completed on April 12, 2026</p>
                  </div>
                  <button className="btn-secondary"><Award size={18}/> Download PDF</button>
                </div>
             </div>
          </motion.div>
        );
      case "profile":
         return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
             <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>Profile settings</h2>
             <div className="card" style={{ maxWidth: "600px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label className="label">Full Name</label>
                    <input className="input-field" defaultValue="John Doe" />
                  </div>
                  <div>
                    <label className="label">Email</label>
                    <input className="input-field" defaultValue="user@example.com" disabled style={{ opacity: 0.7 }} />
                  </div>
                  <button className="btn-primary" style={{ alignSelf: "flex-start", marginTop: "1rem" }}>Save Changes</button>
                </div>
             </div>
          </motion.div>
         );
      default:
        return null;
    }
  };

  return (
    <div className="container" style={{ padding: "3rem 1.5rem", display: "grid", gridTemplateColumns: "250px 1fr", gap: "3rem", minHeight: "calc(100vh - 4rem)" }}>
      {/* Sidebar */}
      <aside style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {[
          { id: "courses", icon: <BookOpen size={20}/>, label: "My Courses" },
          { id: "certificates", icon: <Award size={20}/>, label: "Certificates" },
          { id: "stats", icon: <BarChart2 size={20}/>, label: "Progress Stats" },
          { id: "profile", icon: <User size={20}/>, label: "Profile" },
          { id: "settings", icon: <Settings size={20}/>, label: "Settings" }
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

      {/* Main Content */}
      <main>
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
    </div>
  );
}
