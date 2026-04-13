"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PlayCircle, Star, Users, Award, BookOpen } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      {/* Hero Section */}
      <section style={{ 
        padding: "6rem 0", 
        background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)",
        position: "relative"
      }}>
        {/* Abstract background shapes */}
        <div style={{
          position: "absolute", top: "-10%", right: "-5%", width: "400px", height: "400px",
          borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(40px)", zIndex: 0
        }} />
        <div style={{
          position: "absolute", bottom: "-10%", left: "-5%", width: "400px", height: "400px",
          borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(40px)", zIndex: 0
        }} />

        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >

            
            <motion.h1 variants={itemVariants} style={{ 
              fontSize: "3.5rem", fontWeight: 800, lineHeight: 1.2, marginBottom: "1.5rem",
              background: "linear-gradient(to right, var(--text-primary), var(--primary))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>
              Master new skills with world-class instructors
            </motion.h1>
            
            <motion.p variants={itemVariants} style={{ 
              fontSize: "1.25rem", color: "var(--text-secondary)", marginBottom: "2.5rem",
              lineHeight: 1.6 
            }}>
              Join millions of learners worldwide. Build your portfolio, advance your career, and learn from industry experts in tech, design, and business.
            </motion.p>
            
            <motion.div variants={itemVariants} style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
              <Link href="/courses" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
                Explore Courses <ArrowRight size={20} />
              </Link>
              <button className="btn-secondary" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
                <PlayCircle size={20} /> Watch Demo
              </button>
            </motion.div>

            <motion.div variants={itemVariants} style={{ 
              marginTop: "4rem", display: "flex", justifyContent: "center", gap: "3rem",
              borderTop: "1px solid var(--border)", paddingTop: "2rem"
            }}>
              {[
                { icon: <Users size={24} color="#6366F1" />, title: "2M+", subtitle: "Active Students" },
                { icon: <Award size={24} color="#10B981" />, title: "10k+", subtitle: "Certified Instructors" },
                { icon: <Star size={24} color="#F59E0B" />, title: "4.8/5", subtitle: "Average Rating" },
              ].map((stat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ 
                    padding: "1rem", backgroundColor: "var(--card-bg)", borderRadius: "1rem",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
                  }}>
                    {stat.icon}
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontSize: "1.25rem", fontWeight: 700 }}>{stat.title}</div>
                    <div style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{stat.subtitle}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Courses Segment */}
      <section style={{ padding: "6rem 0", backgroundColor: "var(--card-bg)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
            <div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Featured Courses</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>Hand-picked courses to kickstart your journey</p>
            </div>
            <Link href="/courses" style={{ color: "var(--primary)", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem" }}>
              View all <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
            {/* Mocked course cards */}
            {[1, 2, 3].map((_, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                style={{ 
                  borderRadius: "1rem", overflow: "hidden", border: "1px solid var(--border)",
                  backgroundColor: "var(--bg)", cursor: "pointer", transition: "box-shadow 0.3s",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div style={{ height: "200px", backgroundColor: "#E2E8F0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <BookOpen size={48} color="#94A3B8" />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                    <span style={{ padding: "0.25rem 0.75rem", backgroundColor: "rgba(99,102,241,0.1)", color: "var(--primary)", borderRadius: "1rem", fontSize: "0.75rem", fontWeight: 600 }}>Web Development</span>
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <Star size={14} color="#F59E0B" fill="#F59E0B" /> 4.9 (2k+ reviews)
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>Complete React & Next.js Masterclass</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "1.5rem", lineHeight: 1.5 }}>
                    Learn how to build production-ready applications with React, Next.js, and modern web technologies.
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold", fontSize: "0.75rem" }}>JD</div>
                      <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>John Doe</span>
                    </div>
                    <span style={{ fontWeight: 700, fontSize: "1.25rem", color: "var(--primary)" }}>₹89.99</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ padding: "1rem 2rem", textAlign: "right", fontSize: "0.75rem", color: "var(--text-secondary)", backgroundColor: "var(--card-bg)" }}>
        Created by @Rushika Dodiya
      </div>
    </div>
  );
}
