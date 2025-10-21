"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, X } from "lucide-react";
import { saveToFirestore } from "@/utils/saveToFirestore";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [formData, setFormData] = useState({ name: "", email: "", clinic: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const plans = [
    {
      name: "Starter (Free Trial)",
      price: "₹0",
      note: "Limited-time Early Access",
      features: [
        "Up to 20 patients",
        "WhatsApp Bot Access",
        "Basic Dashboard",
        "Alert System",
        "PDF Reports",
        "Email Support",
      ],
      cta: "Start Free Trial",
      collection: "leads",
      popular: true,
    },
    {
      name: "Professional",
      price: "₹9,999",
      note: "Coming Soon after launch",
      features: [
        "Up to 50 patients",
        "Everything in Starter",
        "Advanced Analytics",
        "White Label Option",
        "Custom Alert Rules",
        "Priority Support",
      ],
      cta: "Join Waitlist",
      collection: "beta_waitlist",
    },
    {
      name: "Enterprise",
      price: "Custom",
      note: "For Hospitals & Chains",
      features: [
        "Unlimited patients",
        "Everything in Pro",
        "Multi-doctor Access",
        "API Integration",
        "Custom Features",
        "Dedicated Manager",
      ],
      cta: "Contact Sales",
      collection: "contact_queries",
    },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formData.name || !formData.email) return alert("Please fill in all fields.");
    setLoading(true);

    const res = await saveToFirestore(selectedPlan.collection, {
      ...formData,
      plan: selectedPlan.name,
    });

    setLoading(false);
    if (res.success) {
      setSuccess(true);
      setFormData({ name: "", email: "", clinic: "" });
      setTimeout(() => setSelectedPlan(null), 2000);
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  }

  return (
    <section id="pricing" className="py-24 relative bg-gradient-to-b from-[#FFF0F5] to-white overflow-hidden">
      <div className="absolute top-[-100px] right-[-120px] w-[280px] h-[280px] bg-[#F8BBD0]/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] left-[-120px] w-[300px] h-[300px] bg-[#E1BEE7]/40 blur-3xl rounded-full"></div>

      <div className="relative container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="uppercase text-[#E91E63] font-bold tracking-wide text-sm">Flexible Pricing</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mt-3 leading-tight">
            Start Free — Upgrade When We Launch 🚀
          </h2>
          <p className="text-[#64748B] mt-4 text-lg leading-relaxed">
            We’re currently in Early Access. Explore GarbhSakhi’s premium features free of charge — professional plans will go live after our public launch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border border-white/50 backdrop-blur-xl bg-white/80 shadow-[0_8px_32px_rgba(233,30,99,0.08)] p-8 text-center hover:shadow-[0_10px_40px_rgba(233,30,99,0.15)] transition-all duration-300 hover:-translate-y-1 ${
                p.popular ? "ring-2 ring-[#E91E63]" : ""
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E91E63] text-white text-xs font-extrabold px-4 py-1 rounded-full shadow-md">
                  FREE TRIAL ACTIVE
                </div>
              )}

              <h3 className="font-extrabold text-xl text-[#1E293B] mt-4">{p.name}</h3>
              <div className="text-4xl font-extrabold my-3 text-[#E91E63]">
                {p.price}
                <span className="text-base text-[#64748B] font-medium">{p.price !== "Custom" && "/month"}</span>
              </div>
              {p.note && <p className="text-sm text-[#9CA3AF] italic mb-4">{p.note}</p>}

              <ul className="text-left space-y-2 text-[#64748B] text-sm mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#10b981] mt-1 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedPlan(p)}
                className={`inline-block w-full py-3 font-extrabold rounded-lg text-sm transition ${
                  p.popular
                    ? "bg-[#E91E63] text-white hover:bg-[#C2185B]"
                    : "border border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63]/10"
                }`}
              >
                {p.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-10 text-[#94A3B8] text-sm">
          All prices are indicative and subject to revision after beta launch.
          Clinics in our early-access program will receive exclusive lifetime discounts.
        </p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>

              {!success ? (
                <>
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-1">{selectedPlan.name}</h3>
                  <p className="text-[#64748B] mb-6">Fill your details to get started.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E91E63]"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E91E63]"
                    />
                    <input
                      type="text"
                      name="clinic"
                      placeholder="Clinic / Hospital Name"
                      value={formData.clinic}
                      onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E91E63]"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#E91E63] text-white py-3 rounded-lg font-semibold hover:bg-[#C2185B] transition"
                    >
                      {loading ? "Submitting..." : selectedPlan.cta}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 mx-auto bg-[#10B981] text-white rounded-full flex items-center justify-center mb-4 text-3xl">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-[#1E293B] mb-1">Thank You!</h4>
                  <p className="text-[#64748B]">
                    Your {selectedPlan.name} registration has been received. We’ll reach out shortly.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
