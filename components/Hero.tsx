import Image from "next/image";

export default function Hero() {
  return ( 
    <section className="bg-gradient-to-br from-[#fce4ec] via-[#90c7f9] to-[#e16d94] py-20">
      <div className="container mx-auto max-w-7xl px-6 grid md:grid-cols-2 items-center gap-12">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] leading-tight">
            Your Trusted{" "}
            <span className="text-[#E88BB4]">Pregnancy Companion</span> Every
            Step of the Way
          </h1>

          <p className="text-[#64748B] text-lg mt-4 max-w-xl">
            Complete pregnancy care for healthcare providers and expecting
            mothers. AI-powered WhatsApp monitoring with 24/7 support,
            intelligent alerts, and personalized guidance for a safe and healthy
            pregnancy journey.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="#pricing"
              className="bg-[#E88BB4] text-white font-semibold px-6 py-3 rounded-lg shadow-[0_10px_25px_rgba(232,139,180,0.3)] hover:bg-[#D873A2] transition"
            >
              Join GarbhSakhi
            </a>
            <a
              href="#"
              className="border border-[#f1d7e4] text-[#E88BB4] font-semibold px-6 py-3 rounded-lg hover:bg-[#FFF0F7] transition"
            >
              Watch Video
            </a>
          </div>
        </div>

        {/* RIGHT MOCKUP */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/mockups/mockup.png"
            alt="GarbhSakhi WhatsApp Mockup"
            width={420}
            height={860}
            className="drop-shadow-[0_30px_80px_rgba(0,0,0,0.35)] rounded-[2rem] transition-transform duration-700 hover:-translate-y-2"
            priority
          />
        </div>
      </div>
    </section>
  );
}
