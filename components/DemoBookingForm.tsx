"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { saveToFirestore } from "@/utils/saveToFirestore";

interface DemoBookingFormProps {
  onClose: () => void;
}

export default function DemoBookingForm({ onClose }: DemoBookingFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // ✅ close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // ✅ close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await saveToFirestore("demo_bookings", data);
    setLoading(false);
    if (res.success) {
      setSuccess(true);
      setTimeout(() => onClose(), 2000); // ✅ auto-close after 2 seconds
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        key="demo-modal"
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          ref={modalRef}
          className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>

          {!success ? (
            <>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-2">
                Schedule a Live Demo
              </h3>
              <p className="text-[#64748B] mb-6 text-sm">
                Book a 1:1 walkthrough of GarbhSakhi. Our team will guide you
                through the platform and answer all your questions.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="doctorName"
                  required
                  placeholder="Doctor Name"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#E91E63]"
                />
                <input
                  name="clinicName"
                  required
                  placeholder="Clinic / Hospital"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#E91E63]"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#E91E63]"
                />
                <input
                  name="phone"
                  required
                  placeholder="Phone"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#E91E63]"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="date"
                    type="date"
                    required
                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#E91E63]"
                  />
                  <input
                    name="time"
                    type="time"
                    required
                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#E91E63]"
                  />
                </div>
                <textarea
                  name="notes"
                  placeholder="Additional notes..."
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#E91E63]"
                />
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-[#E91E63] text-white font-bold py-3 rounded-lg hover:bg-[#C2185B] transition"
                >
                  {loading ? "Booking..." : "Confirm Demo"}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto bg-[#10B981] text-white rounded-full flex items-center justify-center mb-4 text-3xl">
                ✓
              </div>
              <h4 className="text-xl font-bold text-[#1E293B] mb-1">
                Demo Scheduled!
              </h4>
              <p className="text-[#64748B] text-sm">
                We’ll contact you at your selected time.
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
