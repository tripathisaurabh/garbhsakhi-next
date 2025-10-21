'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import { Brain, MessageSquare, BarChart3, HeartPulse, Shield, Users, Lightbulb, Lock } from 'lucide-react'

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-white via-[#f8fafc] to-[#eef2f7] text-gray-800">
      <Navbar />

      {/* ===== Hero Section ===== */}
      <section className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,217,255,0.25),transparent_70%)]"></div>
        <div className="relative z-10 container max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#14213D] mb-6 leading-tight tracking-tight">
            About <span className="text-primary">GarbhSakhi</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming maternal healthcare through intelligent, compassionate technology.
          </p>
        </div>
      </section>

      {/* ===== Mission Section ===== */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <h2 className="text-3xl font-bold text-[#14213D] mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              GarbhSakhi is redefining maternal care with AI-powered systems that simplify communication between doctors and expecting mothers. 
              We provide WhatsApp-based tracking, predictive alerts, and intelligent dashboards to ensure safer, more personalized pregnancy journeys.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to make advanced maternal care accessible, data-driven, and human-centric — empowering both clinicians and patients with the right tools.
            </p>
          </div>
          <div className="reveal flex justify-center">
            <img
              src="/mockups/garbhsakhi-phone.png"
              alt="GarbhSakhi App"
              className="rounded-2xl shadow-xl w-[90%] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* ===== Why Choose GarbhSakhi ===== */}
      <section className="py-24 bg-[#f8fafc] border-t border-gray-200/60">
        <div className="container max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#14213D] mb-14">Why Choose GarbhSakhi</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <Brain className="w-8 h-8 text-primary" />, title: 'AI-Powered Insights', desc: 'Predictive analysis and intelligent alerts for early detection and intervention.' },
              { icon: <MessageSquare className="w-8 h-8 text-primary" />, title: 'Seamless Communication', desc: 'Integrated WhatsApp support for continuous, easy patient engagement.' },
              { icon: <BarChart3 className="w-8 h-8 text-primary" />, title: 'Unified Dashboard', desc: 'Comprehensive analytics and insights for doctors and hospitals.' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all duration-300 reveal border border-gray-100"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-[#14213D]">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Story Section ===== */}
      <section className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#14213D] text-center mb-12">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-14 reveal">
            <div>
              <p className="text-gray-600 mb-5 leading-relaxed">
                GarbhSakhi was founded in 2023 with a purpose — to bridge the gap between innovation and empathy in maternal care.
                What started as a small collaboration between doctors and engineers soon became a mission to revolutionize pregnancy tracking.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Using AI-driven insights and real-time communication, we created a system where expectant mothers never feel alone during their journey.
              </p>
            </div>
            <div>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Today, GarbhSakhi supports <span className="font-semibold text-primary">10+ hospitals</span> and tracks over
                <span className="font-semibold text-primary"> 15,000+ pregnancies</span>, maintaining a 98% engagement rate.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As we continue to innovate, our focus remains the same — better health, early intervention, and connected care for every mother.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Values Section ===== */}
      <section className="py-24 bg-[#f8fafc] border-t border-gray-200/60">
        <div className="container max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#14213D] mb-14">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <HeartPulse className="w-8 h-8 text-primary" />, title: 'Compassion', desc: 'We prioritize empathy and care in every solution we build.' },
              { icon: <Lightbulb className="w-8 h-8 text-primary" />, title: 'Innovation', desc: 'We continuously evolve through research and advanced AI.' },
              { icon: <Users className="w-8 h-8 text-primary" />, title: 'Collaboration', desc: 'We co-create solutions with healthcare experts and institutions.' },
              { icon: <Lock className="w-8 h-8 text-primary" />, title: 'Data Privacy', desc: 'We adhere to strict medical data standards and confidentiality.' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 p-10 border border-gray-100 reveal"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-[#14213D]">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Team Section ===== */}
      {/* <section className="py-24 bg-white relative">
        <div className="container max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#14213D] mb-14">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { initials: 'DS', name: 'Dr. Sarah Johnson', role: 'Chief Medical Officer', desc: 'OB/GYN with 15+ years of clinical excellence' },
              { initials: 'MK', name: 'Michael Kumar', role: 'CTO & Co-Founder', desc: 'AI/ML engineer passionate about healthcare automation' },
              { initials: 'AR', name: 'Anita Rao', role: 'Head of Product', desc: 'Leading healthcare product innovation and strategy' },
            ].map((m, i) => (
              <div
                key={i}
                className="reveal bg-[#f9f9fb] rounded-2xl shadow-sm hover:shadow-lg transition duration-300 p-8 border border-gray-100"
              >
                <div className="w-24 h-24 bg-gradient-to-tr from-primary to-[#4a6ef5] rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold mb-5">
                  {m.initials}
                </div>
                <h3 className="font-semibold text-lg text-[#14213D]">{m.name}</h3>
                <p className="text-sm text-primary mt-1">{m.role}</p>
                <p className="text-xs text-gray-500 mt-2">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
      <ScrollReveal />
    </main>
  )
}
