"use client";

import { motion } from "framer-motion";
import { ClipboardList, UserPlus, Send, HeartPulse } from "lucide-react";

export default function Steps() {
  const steps = [
    {
      n: 1,
      t: "Sign Up",
      d: "Create your account with your clinic’s details. Choose your preferred plan.",
      icon: <ClipboardList className="w-6 h-6 text-white" />,
    },
    {
      n: 2,
      t: "Add Patients",
      d: "Enter patient info and due dates. The system takes care of daily tracking.",
      icon: <UserPlus className="w-6 h-6 text-white" />,
    },
    {
      n: 3,
      t: "Auto-Onboarding",
      d: "Patients receive a WhatsApp invite automatically. The Garbhsakhi Bot guides them through setup.",
      icon: <Send className="w-6 h-6 text-white" />,
    },
    {
      n: 4,
      t: "Monitor & Track",
      d: "View real-time data, alerts, and engagement reports in your intelligent dashboard.",
      icon: <HeartPulse className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-to-b from-[#FFF0F5] to-[#FCE4EC] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-[-80px] right-[-100px] w-[280px] h-[280px] bg-[#F8BBD0]/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#E1BEE7]/40 blur-3xl rounded-full"></div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="uppercase text-[#E91E63] font-bold tracking-wide text-sm">
            Simple Process
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mt-3 leading-tight">
            Get Started in Minutes
          </h2>
          <p className="text-[#64748B] mt-4 text-lg leading-relaxed">
            From signup to monitoring your first patient — it takes less than 5 minutes.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 relative">
          <div className="absolute top-[60px] left-[9%] w-[82%] h-[3px] bg-gradient-to-r from-[#F8BBD0] via-[#E91E63]/30 to-[#E1BEE7]/40"></div>

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white backdrop-blur-lg border border-white/50 shadow-[0_4px_20px_rgba(233,30,99,0.08)] rounded-2xl p-8 text-center hover:shadow-[0_6px_30px_rgba(233,30,99,0.15)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#E91E63] to-[#9C27B0] flex items-center justify-center shadow-lg shadow-pink-200 animate-none hover:animate-pulse-heart transition">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-2">{s.t}</h3>
              <p className="text-[#64748B] leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative border-l-2 border-[#F8BBD0] pl-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative mb-10"
            >
              {/* Icon */}
              <div className="absolute -left-[34px] top-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#E91E63] to-[#9C27B0] flex items-center justify-center shadow-md shadow-pink-200 animate-none hover:animate-pulse-heart transition">
                {s.icon}
              </div>

              <h3 className="text-lg font-bold text-[#1E293B] mb-1">{s.t}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
