"use client";

import {
  MessageSquare,
  BarChart3,
  AlertTriangle,
  Clock,
  LineChart,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const items = [
    {
      icon: <MessageSquare className="w-8 h-8 text-[#E91E63]" />,
      title: "WhatsApp Integration",
      desc: "Connect directly with mothers on WhatsApp — no app installs, just seamless daily tracking.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#9C27B0]" />,
      title: "Smart Dashboard",
      desc: "Comprehensive insights, compliance analytics, and predictive trends — all in one intuitive view.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-[#F59E0B]" />,
      title: "Intelligent Alerts",
      desc: "AI detects critical warning signs early and instantly notifies doctors or caregivers.",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#C2185B]" />,
      title: "Daily Reminders",
      desc: "Smart reminders for medication, hydration, and checkups, personalized for each mother.",
    },
    {
      icon: <LineChart className="w-8 h-8 text-[#9C27B0]" />,
      title: "Advanced Analytics",
      desc: "Visualize vital metrics like BP, glucose, and adherence in elegant, interactive charts.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#E91E63]" />,
      title: "White-Label Ready",
      desc: "Customizable branding for hospitals and clinics — your colors, your logo, your patients.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 relative bg-gradient-to-b from-[#FFF0F5] to-white overflow-hidden"
    >
      {/* Soft pink-lavender backdrop glows */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-[#F8BBD0]/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[350px] h-[350px] bg-[#E1BEE7]/40 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="uppercase text-[#E91E63] font-bold tracking-wide text-sm">
            Premium Features
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mt-3 leading-tight">
            Designed for Modern Pregnancy Care
          </h2>
          <p className="text-[#64748B] mt-4 text-lg leading-relaxed">
            From WhatsApp automation to smart alerts — Garbhsakhi brings
            simplicity and intelligence together for doctors and mothers.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(233,30,99,0.08)] hover:shadow-[0_10px_40px_rgba(233,30,99,0.15)] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Glow with Heartbeat Hover */}
              <div className="relative w-16 h-16 flex items-center justify-center mb-6 mx-auto md:mx-0 group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F8BBD0] to-[#E1BEE7] blur-xl opacity-60 transition group-hover:opacity-80" />
                <div className="relative bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner animate-none group-hover:animate-pulse-heart">
                  {it.icon}
                </div>
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-[#1E293B] mb-2 text-center md:text-left">
                {it.title}
              </h3>
              <p className="text-[#64748B] text-center md:text-left leading-relaxed">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
