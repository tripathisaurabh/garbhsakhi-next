'use client'
import Link from 'next/link'
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#14213D] via-[#1B2432] to-[#2E3553] text-white mt-24 overflow-hidden">
      {/* soft gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,182,193,0.08),_transparent_50%)] pointer-events-none" />

      <div className="container relative z-10 grid md:grid-cols-4 gap-10 py-16 px-6">
        {/* brand */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#FADADD] to-[#ffffff] text-transparent bg-clip-text">
              Garbh<span className="text-[#FADADD]">Sakhi</span>
            </span>
          </Link>

          <p className="text-slate-300 leading-relaxed text-sm mt-3">
            AI-powered pregnancy care platform designed to assist clinics and hospitals
            in delivering smarter, safer maternal care through WhatsApp and AI.
          </p>

          <div className="flex items-center gap-4 mt-5">
            <a href="https://linkedin.com/company/garbhsakhi" target="_blank" className="hover:text-[#FADADD] transition">
              <FaLinkedin size={20} />
            </a>
            <a href="https://instagram.com/garbhsakhi" target="_blank" className="hover:text-[#FADADD] transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com/garbhsakhi" target="_blank" className="hover:text-[#FADADD] transition">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* product */}
        <div>
          <h4 className="font-extrabold mb-3 text-lg">Product</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><Link href="/#features" className="hover:text-[#FADADD] transition">Features</Link></li>
            <li><Link href="/#pricing" className="hover:text-[#FADADD] transition">Pricing</Link></li>
            <li><button data-open-modal className="hover:text-[#FADADD] transition">Book a Demo</button></li>
          </ul>
        </div>

        {/* company */}
        <div>
          <h4 className="font-extrabold mb-3 text-lg">Company</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>
              <Link
                href={"/About" as any}
                className="hover:text-[#FADADD] transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={"/Contact" as any}
                className="hover:text-[#FADADD] transition"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href={"/Career" as any}
                className="hover:text-[#FADADD] transition"
              >
                Careers
              </Link>
            </li>
          </ul>


        </div>

        {/* legal */}
        <div>
          <h4 className="font-extrabold mb-3 text-lg">Legal</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>
              <Link
                href={"/Privacy" as any}
                className="hover:text-[#FADADD] transition"
              >
                Privacy Policy
              </Link>
            </li>
             <li>
              <Link
                href={"/terms" as any}
                className="hover:text-[#FADADD] transition"
              >
               Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10 py-6 text-center text-slate-400 text-sm relative z-10">
        © {new Date().getFullYear()} GarbhSakhi. All rights reserved.
      </div>
    </footer>
  )
}
