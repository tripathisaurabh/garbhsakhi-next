"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

interface ModalFormProps {
  onClose?: () => void; // ✅ external close support
}

export default function ModalForm({ onClose }: ModalFormProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Book a Demo");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // ✅ allow external open/close
  useEffect(() => {
    if (!onClose) {
      const handler = (e: any) => {
        const t = e.target as HTMLElement;
        if (t?.closest("[data-open-modal]")) {
          e.preventDefault();
          const label = t.getAttribute("data-open-modal") || t.textContent || "";
          const lower = label.toLowerCase();
          setTitle(lower.includes("trial") ? "Start Free Trial" : "Book a Demo");
          setOpen(true);
          setSuccess(false);
        }
      };
      document.addEventListener("click", handler);
      return () => document.removeEventListener("click", handler);
    } else {
      // when controlled externally (via CTA)
      setOpen(true);
    }
  }, [onClose]);

  const close = () => {
    setOpen(false);
    setSuccess(false);
    if (onClose) onClose(); // ✅ trigger parent
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      clinic: String(formData.get("clinic") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      source: title,
      timestamp: serverTimestamp(),
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.clinic) {
      alert("⚠️ Please fill all required fields");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "leads"), payload);
      form.reset();
      setSuccess(true);
      setTimeout(() => close(), 2000);
    } catch (err) {
      console.error(err);
      alert("❌ Submission failed. Check Firebase config & rules.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/40 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <motion.div
            ref={dialogRef}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-lg bg-white rounded-2xl p-6 shadow-2xl border border-pink-100 relative"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {!success ? (
              <>
                <div className="mb-5 border-b pb-3 border-pink-100">
                  <h3 className="font-extrabold text-2xl text-[#E91E63] tracking-tight">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Please fill in your details below — we’ll reach out soon.
                  </p>
                </div>

                <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold text-sm text-gray-700">Full Name</label>
                    <input
                      name="name"
                      className="w-full mt-1 rounded-lg border px-3 py-2 focus:ring-2 focus:ring-[#E91E63]/50 focus:outline-none"
                      placeholder="Dr. Ananya Kumar"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-sm text-gray-700">Work Email</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full mt-1 rounded-lg border px-3 py-2 focus:ring-2 focus:ring-[#E91E63]/50 focus:outline-none"
                      placeholder="ananya@hospital.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-sm text-gray-700">Phone</label>
                    <input
                      name="phone"
                      className="w-full mt-1 rounded-lg border px-3 py-2 focus:ring-2 focus:ring-[#E91E63]/50 focus:outline-none"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-sm text-gray-700">Hospital / Clinic</label>
                    <input
                      name="clinic"
                      className="w-full mt-1 rounded-lg border px-3 py-2 focus:ring-2 focus:ring-[#E91E63]/50 focus:outline-none"
                      placeholder="City Maternity Center"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="font-semibold text-sm text-gray-700">Message (optional)</label>
                    <textarea
                      name="message"
                      className="w-full mt-1 rounded-lg border px-3 py-2 min-h-[100px] focus:ring-2 focus:ring-[#E91E63]/50 focus:outline-none"
                      placeholder="Any specific needs or questions?"
                    />
                  </div>
                  <div className="md:col-span-2 flex justify-end gap-2 mt-3">
                    <button
                      type="button"
                      onClick={close}
                      className="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-100 font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-5 py-2 rounded-lg bg-[#E91E63] text-white font-extrabold hover:bg-[#C2185B] transition disabled:opacity-60"
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 rounded-full bg-[#10B981] flex items-center justify-center mb-3">
                  <CheckCircle2 className="text-white w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  Submission Successful 🎉
                </h3>
                <p className="text-gray-500">
                  Thank you! We’ll reach out shortly to schedule your demo.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
