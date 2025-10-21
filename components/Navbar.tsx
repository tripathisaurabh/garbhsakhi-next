'use client'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  // --- Close menu if user clicks outside ---
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-[var(--border)] shadow-sm z-50"style={{ backgroundColor: 'color(srgb 0.949 0.949 0.9491)' }}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between relative">
        {/* === Logo === */}
<Link href="/" className="flex items-center gap-2">
  <img
    src="/logo.png"
    alt="GarbhSakhi Logo"
    className="h-10 w-auto object-contain md:h-12"
  />
</Link>



        {/* === Hamburger === */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block w-full h-[2px] bg-[var(--text-primary)] transition-all ${
              open ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          ></span>
          <span
            className={`block w-full h-[2px] bg-[var(--text-primary)] transition-all ${
              open ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block w-full h-[2px] bg-[var(--text-primary)] transition-all ${
              open ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          ></span>
        </button>

        {/* === Desktop Nav === */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/#features" className="text-[var(--text-secondary)] hover:text-primary font-semibold">
            Features
          </Link>
          <Link href="/#how-it-works" className="text-[var(--text-secondary)] hover:text-primary font-semibold">
            How It Works
          </Link>
          <Link href="/#pricing" className="text-[var(--text-secondary)] hover:text-primary font-semibold">
            Pricing
          </Link>
          <Link href="/#testimonials" className="text-[var(--text-secondary)] hover:text-primary font-semibold">
            Testimonials
          </Link>
          <button
            data-open-modal
            className="bg-[#FADADD] text-black font-extrabold rounded-lg px-4 py-2 shadow-sm hover:bg-[#f5c2cb] transition-all"
          >
            Start Free Trial
          </button>
        </div>

        {/* === Mobile Dropdown Menu (small panel) === */}
        {open && (
          <div
            ref={menuRef}
            className="absolute top-16 right-4 w-56 bg-white rounded-xl shadow-lg border border-gray-200 p-4 flex flex-col gap-4 animate-fadeIn md:hidden"
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-primary text-xl"
              aria-label="Close menu"
            >
              ✕
            </button>

            <Link
              href="/#features"
              onClick={() => setOpen(false)}
              className="text-[var(--text-secondary)] hover:text-primary font-medium"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              onClick={() => setOpen(false)}
              className="text-[var(--text-secondary)] hover:text-primary font-medium"
            >
              How It Works
            </Link>
            <Link
              href="/#pricing"
              onClick={() => setOpen(false)}
              className="text-[var(--text-secondary)] hover:text-primary font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/#testimonials"
              onClick={() => setOpen(false)}
              className="text-[var(--text-secondary)] hover:text-primary font-medium"
            >
              Testimonials
            </Link>
            <button
              data-open-modal
              onClick={() => setOpen(false)}
              className="bg-[#FADADD] text-black font-extrabold rounded-lg px-3 py-2 shadow-sm hover:bg-[#f5c2cb] transition-all"
            >
              Start Free Trial
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
