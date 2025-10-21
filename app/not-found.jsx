'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/837/837543.png"
          alt="Not Found"
          className="w-32 h-32 mx-auto mb-6 opacity-90"
        />
        <h1 className="text-4xl font-extrabold text-[#14213D] mb-2">
          Page Not Found
        </h1>
        <p className="text-[var(--text-secondary)] mb-8 text-sm md:text-base">
          Oops! It seems the page you’re looking for isn’t available right now.  
          It might have been moved, renamed, or is still under development. 
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-all"
        >
          Back to Home
        </Link>
      </motion.div>
    </main>
  )
}
