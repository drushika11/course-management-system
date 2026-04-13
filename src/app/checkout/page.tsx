"use client";

import { motion } from "framer-motion";
import { Check, CreditCard, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Checkout() {
  return (
    <div style={{ backgroundColor: "var(--bg)", minHeight: "calc(100vh - 4rem)", padding: "4rem 0" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>
        
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 800 }}>Secure Checkout</h1>
          <ShieldCheck color="var(--success)" size={28} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "2rem" }}>
           
          {/* Form Side */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="card">
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem", borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>Billing Information</h2>
            
            <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label className="label">First Name</label>
                  <input className="input-field" placeholder="John" />
                </div>
                <div>
                  <label className="label">Last Name</label>
                  <input className="input-field" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="label">Email Address</label>
                <input type="email" className="input-field" placeholder="john@example.com" />
              </div>
              
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "1rem 0 0.5rem", borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>Payment Method</h2>
              
              <div style={{ border: "1px solid var(--primary)", borderRadius: "var(--radius)", padding: "1rem", backgroundColor: "rgba(99,102,241,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                  <input type="radio" checked readOnly /> 
                  <CreditCard size={20} />
                  <span style={{ fontWeight: 600 }}>Credit Card / Stripe</span>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label className="label">Card Number</label>
                    <input className="input-field" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label className="label">Expiry Date</label>
                      <input className="input-field" placeholder="MM/YY" />
                    </div>
                    <div>
                      <label className="label">CVC</label>
                      <input className="input-field" placeholder="123" />
                    </div>
                  </div>
                </div>
              </div>

            </form>
          </motion.div>

          {/* Order Summary Side */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <div className="card" style={{ position: "sticky", top: "6rem" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem" }}>Order Summary</h2>
              
              <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "80px", height: "60px", backgroundColor: "var(--primary)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold" }}>CRM</div>
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600 }}>Complete React & Next.js Masterclass</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Instructor: John Doe</p>
                </div>
              </div>

              <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "1.5rem 0", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--text-secondary)" }}>
                  <span>Original Price</span>
                  <span style={{ textDecoration: "line-through" }}>₹129.99</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--success)" }}>
                  <span>Discount</span>
                  <span>-₹40.00</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: "1.25rem", marginTop: "0.5rem" }}>
                  <span>Total</span>
                  <span>₹89.99</span>
                </div>
              </div>

              <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Check size={16} color="var(--success)"/> Full lifetime access</div>
                 <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Check size={16} color="var(--success)"/> Certificate of completion</div>
                 <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Check size={16} color="var(--success)"/> 30-Day Money-Back Guarantee</div>
              </div>

              <Link href="/dashboard" className="btn-primary" style={{ width: "100%", padding: "1rem", display: "block", textAlign: "center" }}>
                Complete Payment
              </Link>
              
              <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "1rem" }}>
                By completing your purchase you agree to these Terms of Service.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
