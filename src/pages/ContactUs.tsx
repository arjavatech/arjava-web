import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin, Mail, Phone,
  Facebook, Instagram, Twitter, Linkedin,
  Send, CheckCircle2,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import AnimatedSection from '@/components/ui/AnimatedSection'
import PageTransition from '@/components/ui/PageTransition'

interface FormState {
  name: string
  email: string
  company: string
  whatsapp: string
  about: string
}

const INITIAL_FORM: FormState = {
  name: '', email: '', company: '', whatsapp: '', about: '',
}

const SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://www.facebook.com/p/Arjava-Technologies-100067001514838/', Icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/arjavatech', Icon: Instagram },
  { name: 'Twitter', href: '#', Icon: Twitter },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/arjavatech', Icon: Linkedin },
]


function FloatingInput({
  label,
  type = 'text',
  name,
  value,
  onChange,
  required = false,
}: {
  label: string
  type?: string
  name: keyof FormState
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        className="peer w-full bg-dark-base border border-dark-line rounded-xl px-4 pt-5 pb-2 text-sm text-white
                   focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/30
                   transition-colors duration-200 placeholder-transparent"
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-1 text-[10px] text-teal-400 font-medium uppercase tracking-wide
                   peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500
                   peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal
                   peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-teal-400 peer-focus:uppercase peer-focus:tracking-wide peer-focus:font-medium
                   transition-all duration-200 pointer-events-none"
      >
        {label}
      </label>
    </div>
  )
}

export default function ContactUs() {
  const [form, setForm]           = useState<FormState>(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    console.log('Form data:', form)
    setSubmitted(true)
    setForm(INITIAL_FORM)
  }

  return (
    <PageTransition>
      <Navbar />
      <PageHero
        title="Contact Us"
        subtitle="Have a project in mind? We'd love to hear from you. Let's build something great together."
        breadcrumb="Contact Us"
      />

      <section className="bg-dark-base py-6 md:py-16">
        <div className="container mx-auto px-3 sm:px-6 max-w-5xl">

          {/* ── GET A PROPOSAL FORM ─────────────────────────── */}
          <AnimatedSection className="mb-8 md:mb-16">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-8">
              Get a <span className="gradient-text">Proposal</span>
            </h2>

            <div className="glass p-3 sm:p-8 border-t-2 border-teal-400/40">
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 mb-4 p-3 bg-teal-400/10 border border-teal-400/30 rounded-xl text-teal-400 text-xs sm:text-sm"
                >
                  <CheckCircle2 size={18} className="flex-shrink-0" />
                  Thank you! We'll get back to you within 24 hours.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <FloatingInput
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <FloatingInput
                    label="Your Email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <FloatingInput
                    label="Company Name"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    required
                  />
                  <FloatingInput
                    label="WhatsApp Number"
                    type="tel"
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Textarea */}
                <div className="relative">
                  <textarea
                    name="about"
                    id="about"
                    value={form.about}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder=" "
                    className="peer w-full bg-dark-base border border-dark-line rounded-xl px-4 pt-5 pb-2 text-sm text-white
                               focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/30
                               transition-colors duration-200 resize-none placeholder-transparent"
                  />
                  <label
                    htmlFor="about"
                    className="absolute left-4 top-1 text-[10px] text-teal-400 font-medium uppercase tracking-wide
                               peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500
                               peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal
                               peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-teal-400 peer-focus:uppercase peer-focus:tracking-wide peer-focus:font-medium
                               transition-all duration-200 pointer-events-none"
                  >
                    About Your Project
                  </label>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary px-5 py-2 text-sm w-full sm:w-auto"
                >
                  Send Message <Send size={15} />
                </motion.button>
              </form>
            </div>
          </AnimatedSection>

          {/* ── OFFICE ADDRESSES ────────────────────────────── */}
          <AnimatedSection className="mb-8 md:mb-16">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-8">
              Our <span className="gradient-text">Offices</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              {/* India */}
              <div className="card-dark p-3 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-teal-400/10 border border-teal-400/20 flex items-center justify-center text-base">
                    🇮🇳
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold text-white">India Office</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-teal-400 flex-shrink-0 mt-0.5" />
                    <address className="not-italic text-xs sm:text-sm text-slate-400 leading-relaxed">
                      Arjava India Tech Pvt Ltd,<br />
                      19, Ganesh Nagar Main Road,<br />
                      Selaiyur, Chennai - 600073.
                    </address>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={13} className="text-teal-400 flex-shrink-0" />
                    <a
                      href="mailto:arjavatech@gmail.com"
                      className="text-xs sm:text-sm text-slate-400 hover:text-teal-400 transition-colors"
                    >
                      arjavatech@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="text-teal-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-400">044-35675035</span>
                  </div>
                </div>
              </div>

              {/* USA */}
              <div className="card-dark p-3 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-base">
                    🇺🇸
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold text-white">USA Office</h3>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-sky-400 flex-shrink-0 mt-0.5" />
                  <address className="not-italic text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Arjava Technologies,<br />
                    2135 204th PL NE,<br />
                    Sammamish, WA - 98974, USA.
                  </address>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── STAY CONNECTED ──────────────────────────────── */}
          <AnimatedSection>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-8">
              Stay <span className="gradient-text">Connected</span>
            </h2>
            <div className="card-dark p-3 sm:p-8">
              <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-5">Follow us on social media for latest updates.</p>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map(({ name, href, Icon }) => (
                  <motion.a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    title={name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.94 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl border border-dark-line text-slate-400
                               hover:border-teal-400/50 hover:text-teal-400 hover:bg-teal-400/5
                               transition-colors duration-200 text-xs sm:text-sm font-medium"
                  >
                    <Icon size={15} />
                    {name}
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <Footer />
    </PageTransition>
  )
}
