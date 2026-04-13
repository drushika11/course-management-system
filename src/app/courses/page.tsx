"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Star, Clock, BookOpen, Filter } from "lucide-react";

export default function Courses() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCourses() {
      try {
        const res = await fetch("/api/courses");
        const data = await res.json();
        
        // Map Prisma DB schema to our UI shape (padding missing fields for visual mock completion)
        const formattedData = data.map((course: any, index: number) => ({
          id: course.id,
          title: course.title,
          category: ["Web Development", "Design", "Engineering"][index % 3], // mock category
          rating: 4.8 + (Math.random() * 0.2), // mock rating
          reviews: Math.floor(Math.random() * 5000) + "+", // mock reviews
          duration: `${Math.floor(Math.random() * 40) + 10} hours`, 
          level: "All Levels",
          instructor: "Instructor Name",
          price: `₹${course.price}`,
          image: ["var(--primary)", "var(--success)", "#F59E0B", "#EC4899"][index % 4]
        }));
        setCourses(formattedData);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    getCourses();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, y: 0, 
      transition: { duration: 0.5 } 
    }
  };



  return (
    <div style={{ backgroundColor: "var(--bg)", minHeight: "calc(100vh - 4rem)" }}>
      {/* Header Area */}
      <div style={{ backgroundColor: "var(--card-bg)", borderBottom: "1px solid var(--border)", padding: "3rem 0" }}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}
          >
            Explore Courses
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ color: "var(--text-secondary)", fontSize: "1.125rem", maxWidth: "600px" }}
          >
            Discover thousands of courses from top instructors to upgrade your skills and advance your career.
          </motion.p>
          
          {/* Search and Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}
          >
            <div style={{ position: "relative", flex: 1, maxWidth: "500px" }}>
              <div style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-secondary)" }}>
                <Search size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Search for courses, skills, or instructors..." 
                className="input-field"
                style={{ paddingLeft: "3rem", height: "100%", paddingRight: "1rem" }}
              />
            </div>
            <button className="btn-secondary">
              <Filter size={18} /> Filters
            </button>
          </motion.div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="container" style={{ padding: "4rem 1.5rem" }}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}
        >
          {courses.map((course) => (
            <Link href={`/checkout?courseId=${course.id}`} key={course.id} style={{ display: "block" }}>
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              style={{ 
                borderRadius: "1rem", overflow: "hidden", border: "1px solid var(--border)",
                backgroundColor: "var(--card-bg)", cursor: "pointer", transition: "box-shadow 0.3s",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
              }}
            >
              <div style={{ height: "180px", backgroundColor: course.image, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.15 }} />
              <div style={{ marginTop: "-180px", height: "180px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <BookOpen size={48} color={course.image.startsWith('var') ? course.image : course.image} opacity={0.5} />
              </div>

              <div style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ padding: "0.25rem 0.75rem", backgroundColor: "var(--bg)", color: "var(--text-secondary)", borderRadius: "1rem", fontSize: "0.75rem", fontWeight: 600, border: "1px solid var(--border)" }}>
                    {course.category}
                  </span>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    <Star size={14} color="#F59E0B" fill="#F59E0B" /> {course.rating} ({course.reviews})
                  </span>
                </div>
                
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.4 }}>
                  {course.title}
                </h3>
                
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    <Clock size={14} /> {course.duration}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    <BookOpen size={14} /> {course.level}
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-secondary)", fontWeight: "bold", fontSize: "0.65rem" }}>
                      {course.instructor.split(' ').map((n: string) => n[0]).join('')}
                    </div>
                    <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>{course.instructor}</span>
                  </div>
                  <span style={{ fontWeight: 800, fontSize: "1.125rem", color: "var(--text-primary)" }}>{course.price}</span>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
