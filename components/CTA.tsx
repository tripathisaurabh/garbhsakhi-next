"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ModalForm from "@/components/ModalForm";
import DemoBookingForm from "../components/DemoBookingForm";

export default function CTA() {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [showTrialForm, setShowTrialForm] = useState(false);

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#FFF0F5] via-[#F3ECFF] to-white overflow-hidden">
      {/* soft glows */}
      <div className="absolute top-[-120px] right-[-100px] w-[280px] h-[280px] bg-[#F8BBD0]/40 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] left-[-100px] w-[320px] h-[320px] bg-[#E1BEE7]/40 blur-3xl rounded-full" />

     <div className="relative container mx-auto px-6 text-center">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-4xl md:text-5xl font-extrabold text-[#1E293B]"
  >
    Built for Doctors — Designed for Better Pregnancy Care
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    viewport={{ once: true }}
    className="text-[#64748B] mt-4 text-lg max-w-2xl mx-auto"
  >
    GarbhSakhi is an AI-enabled support platform created <strong>for doctors</strong> to streamline patient
    engagement, reminders, and monitoring — currently in early access for partner clinics.
    Book a personalized walkthrough to see how it can fit into your workflow.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    viewport={{ once: true }}
    className="flex flex-wrap gap-4 justify-center mt-8"
  >
    <button
      onClick={() => setShowDemoForm(true)}
      className="bg-[#E91E63] text-white font-extrabold rounded-lg px-6 py-3 hover:bg-[#C2185B] shadow-lg shadow-pink-200 transition"
    >
      Book a Demo
    </button>
  </motion.div>

  {/* Demo Booking Form */}
  {showDemoForm && <DemoBookingForm onClose={() => setShowDemoForm(false)} />}
</div>

    </section>
  );
}
