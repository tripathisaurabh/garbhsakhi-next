import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Steps from '@/components/Steps'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import ModalForm from '@/components/ModalForm'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollReveal from '@/components/ScrollReveal'

export default function Page(){
  return (
    <main>
      <Navbar />
      <Hero />


      <Features />
      <Steps />
      <Pricing />
      <Testimonials />
  <section className="py-16 bg-[#F9FAFB] border-t border-[var(--border)]">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#14213D] mb-8">
      Why Choose GarbhSakhi?
    </h2>
    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
      GarbhSakhi empowers healthcare providers to deliver smarter, safer, and more
      compassionate pregnancy care. Our AI-driven platform simplifies monitoring,
      ensures timely interventions, and keeps mothers connected to their doctors — every step of the way.
    </p>

    <div className="grid md:grid-cols-3 gap-10">
      {/* AI-Guided Care */}
      <div className="bg-white shadow-sm rounded-xl p-6 hover:shadow-md transition">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
          alt="AI Care"
          className="mx-auto mb-4 h-14 w-14 object-contain"
        />
        <h3 className="font-semibold text-lg text-[#14213D] mb-2">AI-Guided Care</h3>
        <p className="text-[var(--text-secondary)] text-sm">
          Real-time insights and predictive alerts that help doctors make faster, data-driven decisions.
        </p>
      </div>

      {/* WhatsApp Integration */}
      <div className="bg-white shadow-sm rounded-xl p-6 hover:shadow-md transition">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Integration"
          className="mx-auto mb-4 h-14 w-14 object-contain"
        />
        <h3 className="font-semibold text-lg text-[#14213D] mb-2">Seamless WhatsApp Integration</h3>
        <p className="text-[var(--text-secondary)] text-sm">
          Mothers receive reminders, advice, and emergency alerts — all on WhatsApp, no app required.
        </p>
      </div>

      {/* Privacy & Compliance */}
      <div className="bg-white shadow-sm rounded-xl p-6 hover:shadow-md transition">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
          alt="Data Security"
          className="mx-auto mb-4 h-14 w-14 object-contain"
        />
        <h3 className="font-semibold text-lg text-[#14213D] mb-2">Privacy & Compliance</h3>
        <p className="text-[var(--text-secondary)] text-sm">
          Built to meet India’s DPDP Act and ABDM standards, ensuring complete data protection for every mother.
        </p>
      </div>
    </div>
  </div>
</section>

      <CTA />
      <Footer />
      <ModalForm />
      <WhatsAppButton />
      <ScrollReveal />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(){
            const obs = new IntersectionObserver((entries)=>{
              entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible') })
            }, { threshold: 0.12 });
            document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
          })();`
        }}
      />
    </main>
  )
}
