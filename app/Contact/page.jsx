'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { db } from '@/lib/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e) {   // ✅ Removed ": FormEvent"
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    try {
      await addDoc(collection(db, 'contact_messages'), {
        ...formData,
        createdAt: serverTimestamp(),
      })
      setSuccess(true)
      setFormData({ name: '', email: '', organization: '', message: '' })
    } catch (error) {
      console.error('Error saving message:', error)
    } finally {
      setLoading(false)
    }
  }


  return (
    <main className="bg-gradient-to-b from-white via-[#f9fafb] to-[#eef2f7] text-gray-800">
      <Navbar />
{/* <WaitingOverlay show={loading} text="Sending your message..." />÷ */}

      {/* ===== HERO ===== */}
      <section className="pt-28 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,217,255,0.25),transparent_70%)]"></div>
        <div className="relative z-10 container mx-auto max-w-4xl px-4">
          <h1 className="text-5xl font-extrabold text-[#14213D] mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Get in touch with the <span className="text-primary font-medium">GarbhSakhi</span> team — we’d love to hear from you.
          </p>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          {/* --- LEFT SIDE --- */}
          <div className="reveal">
            <h2 className="text-3xl font-bold text-[#14213D] mb-6">Let’s Start a Conversation</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Ready to bring AI-driven care to your clinic? Reach out for partnerships, product demos, or general queries — we’re here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#14213D]">Email Us</h3>
                  <p className="text-gray-600">hello@garbhsakhi.com</p>
                  <p className="text-sm text-gray-500">We usually reply within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#14213D]">Call Us</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-sm text-gray-500">Mon – Fri, 9 AM – 6 PM IST</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#14213D]">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Healthcare Avenue <br /> Medical District, Mumbai 400001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE FORM --- */}
          <div className="reveal">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-[#14213D] mb-6">Send us a Message</h3>

              <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Clinic / Hospital Name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us about your needs..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center color-black items-center gap-2 bg-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-dark transition-colors ${
                  loading ? 'opacity-80 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <Send className="w-4 h-4" />}
              </button>

              {success && (
                <p className="text-green-600 text-center mt-4 font-medium">
                  ✅ Thank you! Your message has been sent.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="pb-20">
        <div className="container max-w-6xl mx-auto px-6 text-center reveal">
          <h2 className="text-3xl font-bold text-[#14213D] mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            {[
              {
                q: 'How quickly can we get started?',
                a: 'Most clinics are onboarded within 1–2 weeks, including setup and staff training.',
              },
              {
                q: 'Do you offer on-site training?',
                a: 'Yes, our specialists provide end-to-end training for smooth implementation.',
              },
              {
                q: 'What about data security?',
                a: 'We comply with HIPAA, ABDM, and DPDP standards to ensure total data protection.',
              },
              {
                q: 'Can the platform be customized?',
                a: 'Absolutely. We tailor our features and workflows based on your hospital’s needs.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold text-lg mb-2 text-[#14213D]">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollReveal />
    </main>
  )
}
