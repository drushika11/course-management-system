"use client";

import Link from "next/link";
import { BookOpen, LogOut, User } from "lucide-react";

export default function Navbar() {
  // In a real app we'd fetch auth state
  const isAuth = false;

  return (
    <header className="header">
      <div className="container header-content">
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <BookOpen color="var(--primary)" size={28} />
          <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "var(--primary)" }}>
            Course Management System
          </span>
        </Link>
        <nav className="nav-links">
          <Link href="/courses" className="nav-link">Courses</Link>
          <Link href="/pricing" className="nav-link">Pricing</Link>
          {isAuth ? (
            <>
              <Link href="/dashboard" className="nav-link">Dashboard</Link>
              <button className="btn-secondary" style={{ padding: "0.4rem 1rem" }}>
                <LogOut size={18} /> Logout
              </button>
            </>
          ) : (
            <div style={{ display: "flex", gap: "1rem" }}>
              <Link href="/login" className="btn-secondary" style={{ padding: "0.5rem 1rem" }}>Login</Link>
              <Link href="/register" className="btn-primary" style={{ padding: "0.5rem 1rem" }}>Sign Up</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
