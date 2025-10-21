'use client'
import { useEffect, useState } from 'react'

export default function WhatsAppButton(){
  const [href, setHref] = useState('#')
  useEffect(()=>{
    const num = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919321517975'
    const msg = encodeURIComponent("Hi GarbhSakhi Team, I'd like to know more about your product.")
    setHref(`https://wa.me/${num}?text=${msg}`)
  },[])
  return (
    <a href={href} target="_blank" rel="noopener" className="fixed right-4 bottom-4 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full px-4 py-3 font-extrabold shadow-xl animate-pulse hover:scale-105 transition">
      <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white" aria-hidden="true"><path d="M16.002 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.255.59 4.41 1.71 6.325L3.2 28.8l6.64-1.69c1.86 1.02 3.96 1.56 6.16 1.56 7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.04c-1.94 0-3.8-.52-5.43-1.49l-.39-.23-3.94 1 1.05-3.84-.25-.39c-1.11-1.76-1.7-3.8-1.7-5.95 0-6.005 4.86-10.88 10.88-10.88S26.88 9.35 26.88 15.36 22.005 26.24 16.002 26.24zm6.16-7.28c-.34-.17-2-1-2.31-1.12-.31-.11-.53-.17-.75.17-.22.34-.86 1.11-1.06 1.34-.2.23-.39.25-.73.08-.34-.17-1.44-.53-2.75-1.69-1.02-.91-1.7-2.02-1.9-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.39.5-.58.17-.2.22-.34.34-.56.11-.23.06-.42-.03-.59-.09-.17-.75-1.81-1.03-2.48-.27-.65-.55-.56-.75-.57h-.64c-.2 0-.53.08-.8.39-.27.34-1.05 1.03-1.05 2.52s1.08 2.93 1.23 3.13c.15.2 2.12 3.22 5.14 4.52.72.31 1.28.5 1.71.64.72.23 1.38.2 1.9.12.58-.09 1.8-.73 2.05-1.44.25-.7.25-1.31.17-1.44-.08-.13-.31-.2-.64-.36z"/></svg>
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  )
}
