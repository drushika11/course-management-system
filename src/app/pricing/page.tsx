"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for beginners starting their journey.",
      price: "Free",
      features: [
        "Access to 50+ free courses",
        "Basic community support",
        "Course completion certificates",
        "Mobile app access"
      ],
      notIncluded: [
        "1-on-1 mentorship",
        "Premium career resources",
        "Offline downloads"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      description: "Everything you need to advance your career.",
      price: "₹29/mo",
      features: [
        "Access to all 10,000+ courses",
        "Priority community support",
        "Course completion certificates",
        "Mobile app access",
        "Offline downloads",
        "Premium career resources"
      ],
      notIncluded: [
        "1-on-1 mentorship"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For teams and organizations scaling their learning.",
      price: "Custom",
      features: [
        "Everything in Pro",
        "Dedicated success manager",
        "Advanced analytics & reporting",
        "Custom learning paths",
        "1-on-1 mentorship",
        "API access"
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div style={{ backgroundColor: "var(--bg)", minHeight: "calc(100vh - 4rem)", padding: "4rem 0" }}>
      <div className="container" style={{ textAlign: "center", marginBottom: "4rem" }}>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "1rem" }}
        >
          Simple, transparent pricing
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ color: "var(--text-secondary)", fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto" }}
        >
          Choose the plan that's right for you. No hidden fees, cancel anytime.
        </motion.p>
      </div>

      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="card"
              style={{
                position: "relative",
                display: "flex", flexDirection: "column",
                border: plan.popular ? "2px solid var(--primary)" : "1px solid var(--border)",
                transform: plan.popular ? "scale(1.02)" : "scale(1)",
                zIndex: plan.popular ? 10 : 0
              }}
            >
              {plan.popular && (
                <div style={{
                  position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)",
                  backgroundColor: "var(--primary)", color: "white", padding: "0.25rem 1rem",
                  borderRadius: "2rem", fontSize: "0.75rem", fontWeight: "bold"
                }}>
                  MOST POPULAR
                </div>
              )}
              
              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>{plan.name}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", minHeight: "40px" }}>{plan.description}</p>
                <div style={{ margin: "1.5rem 0", fontSize: "2.5rem", fontWeight: 800 }}>{plan.price}</div>
                <button className={plan.popular ? "btn-primary" : "btn-secondary"} style={{ width: "100%", padding: "0.875rem" }}>
                  {plan.cta}
                </button>
              </div>

              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {plan.features.map(feature => (
                  <div key={feature} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem" }}>
                    <Check size={18} color="var(--success)" />
                    <span>{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map(feature => (
                  <div key={feature} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem", color: "var(--text-secondary)", opacity: 0.7 }}>
                    <X size={18} />
                    <span style={{ textDecoration: "line-through" }}>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
