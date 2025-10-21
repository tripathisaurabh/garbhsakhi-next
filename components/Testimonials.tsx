export default function Testimonials(){
  const data = [
    { n:'DS', name:'Dr. Sneha Desai', org:'Mumbai Women\'s Hospital', text:'GarbhSakhi transformed my practice. Early alerts prevented 3 emergencies this month!' },
    { n:'RM', name:'Dr. Riya Mehta', org:'Delhi Maternity Care', text:'Patients love the bot! Compliance is up 4x. Best investment for our clinic.' },
    { n:'AK', name:'Dr. Ananya Kumar', org:'Bangalore Clinic', text:'Beautiful dashboard, easy to use. White label makes it feel like ours.' },
  ]
  return (
    <section id="testimonials" className="py-16 bg-[#fff7fb]">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="uppercase text-primary font-extrabold text-sm">Success Stories</div>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Loved by Leading Gynecologists</h2>
          <p className="text-[var(--text-secondary)] mt-3">Join hundreds of doctors who are revolutionizing pregnancy care.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {data.map(t=>(
            <div key={t.name} className="border rounded-xl p-6 bg-white">
              <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
              <p className="italic text-[var(--text-secondary)]">{`"${t.text}"`}</p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#fde2f1] to-[#e7d9ff] flex items-center justify-center font-extrabold text-primary">{t.n}</div>
                <div>
                  <div className="font-extrabold">{t.name}</div>
                  <div className="text-sm text-[var(--text-muted)]">{t.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
