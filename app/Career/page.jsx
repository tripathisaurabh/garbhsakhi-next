'use client'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function CareersPage() {
  const [jobs, setJobs] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('All')
  const [loading, setLoading] = useState(true)

  // ===== Fetch Jobs from Firestore =====
  useEffect(() => {
    async function fetchJobs() {
      try {
        const querySnapshot = await getDocs(collection(db, 'jobs'))
        const jobsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setJobs(jobsData)
      } catch (error) {
        console.error('Error fetching jobs:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchJobs()
  }, [])

  // ===== Filtering Logic =====
  const filteredJobs = jobs.filter((job) => {
    const title = job.title?.toLowerCase() || ''
    const desc = job.description?.toLowerCase() || ''
    const skills = Array.isArray(job.skills)
      ? job.skills.join(' ').toLowerCase()
      : typeof job.skills === 'string'
      ? job.skills.toLowerCase()
      : ''

    const matchesSearch =
      title.includes(searchTerm.toLowerCase()) ||
      desc.includes(searchTerm.toLowerCase()) ||
      skills.includes(searchTerm.toLowerCase())

    const matchesFilter =
      filterType === 'All' ||
      (job.type && job.type.toLowerCase() === filterType.toLowerCase())

    return (matchesSearch || searchTerm === '') && matchesFilter
  })

  return (
    <main className="bg-gradient-to-b from-white via-[#f9fafb] to-[#eef2f7] text-gray-800">
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="pt-28 pb-12 bg-white text-center">
        <div className="container mx-auto max-w-5xl px-4">
          <h1 className="text-5xl font-extrabold text-[#14213D] mb-4">
            Join Our Mission
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Shape the future of maternal healthcare with{' '}
            <span className="text-primary font-medium">GarbhSakhi</span>
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We’re not just building technology—we’re improving lives. Join a team
            where healthcare meets innovation.
          </p>
        </div>
      </section>

      {/* ===== SEARCH & FILTER ===== */}
      <section className="py-10 bg-[#f8fafc] border-t border-gray-200/60">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="All">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <p className="text-gray-500">
            Showing {filteredJobs.length} of {jobs.length} positions
          </p>
        </div>
      </section>

      {/* ===== JOB LISTINGS ===== */}
      <section className="py-16 bg-white relative z-10">
        <div className="container max-w-6xl mx-auto px-6">
          {loading ? (
            <p className="text-center text-gray-500 mt-20">
              Loading open positions...
            </p>
          ) : filteredJobs.length === 0 ? (
            <p className="text-center text-gray-500 mt-20">
              No jobs found matching your criteria.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse shadow-sm rounded-lg overflow-hidden">
                <thead className="bg-[#f1f5f9] text-[#14213D] text-sm uppercase font-semibold">
                  <tr>
                    <th className="text-left py-4 px-4">Job Title</th>
                    <th className="text-left py-4 px-4">Type</th>
                    <th className="text-left py-4 px-4">Location</th>
                    <th className="text-left py-4 px-4">Department</th>
                    <th className="text-left py-4 px-4">Description</th>
                    <th className="text-left py-4 px-4">Skills</th>
                    <th className="text-center py-4 px-4">Apply</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredJobs.map((job) => (
                    <tr
                      key={job.id}
                      className="border-t hover:bg-[#f9fafb] transition-all"
                    >
                      <td className="py-5 px-4 font-semibold text-[#14213D]">
                        {job.title}
                      </td>
                      <td className="py-5 px-4 text-gray-600">{job.type}</td>
                      <td className="py-5 px-4 text-gray-600">
                        {job.location} {job.remote && `• ${job.remote}`}
                      </td>
                      <td className="py-5 px-4 text-gray-600">
                        {job.department || '-'}
                      </td>
                      <td className="py-5 px-4 text-gray-600 max-w-xs">
                        {job.description?.length > 120
                          ? job.description.slice(0, 120) + '...'
                          : job.description}
                      </td>
                      <td className="py-5 px-4">
                        <div className="flex flex-wrap gap-1">
                          {Array.isArray(job.skills)
                            ? job.skills.map((skill, i) => (
                                <span
                                  key={i}
                                  className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                                >
                                  {skill}
                                </span>
                              ))
                            : typeof job.skills === 'string'
                            ? job.skills
                                .split(',')
                                .map((skill, i) => (
                                  <span
                                    key={i}
                                    className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                                  >
                                    {skill.trim()}
                                  </span>
                                ))
                            : '-'}
                        </div>
                      </td>
                      <td className="py-5 px-4 text-center">
                        <a
                          href={job.applyLink || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#14213D] text-white  px-4 py-2 rounded-md text-sm hover:bg-primary-dark transition-all inline-block"
                        >
                          Apply Now
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ScrollReveal />
    </main>
  )
}
