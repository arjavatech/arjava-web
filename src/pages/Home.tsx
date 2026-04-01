import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Smartphone, Palette, Code2, Globe, Wrench, SearchCheck,
  ChevronRight, ArrowRight, Zap,
  ClipboardList, Bug, Rocket, LifeBuoy,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ServiceCard from '@/components/ui/ServiceCard'
import StatCounter from '@/components/ui/StatCounter'
import WorkModal, { type WorkItem } from '@/components/ui/WorkModal'
import AnimatedSection from '@/components/ui/AnimatedSection'
import PageTransition from '@/components/ui/PageTransition'
import { cn } from '@/lib/utils'

/* ─── Typewriter hook ────────────────────────────────────────── */
function useTypewriter(words: string[], speed = 90, pause = 1800) {
  const [index, setIndex]   = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [text, setText]     = useState('')

  useEffect(() => {
    if (!deleting && subIndex === words[index].length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((p) => (p + 1) % words.length)
      return
    }
    const t = setTimeout(
      () => {
        setSubIndex((p) => p + (deleting ? -1 : 1))
        setText(words[index].substring(0, subIndex + (deleting ? -1 : 1)))
      },
      deleting ? speed / 2 : speed,
    )
    return () => clearTimeout(t)
  }, [subIndex, deleting, index, words, speed, pause])

  return text
}

/* ─── Services data ──────────────────────────────────────────── */
const SERVICES = [
  {
    id: 'mob-app',
    icon: <Smartphone size={22} />,
    title: 'Mobile Application',
    shortText:
      'Arjava delivers mobile solutions for every smart device across all major operating systems. From iOS to Android, we craft quality-rich, innovative apps.',
    expanded: (
      <>
        <b>Our mobile development services include:</b>
        <ul className="list-disc ml-5 mt-1 space-y-1">
          <li>iPhone / iPad / iOS Application Development</li>
          <li>Android Application Development</li>
          <li>Rich Mobile Web Application Development</li>
          <li>Cross-Platform Development (React Native / Flutter)</li>
        </ul>
      </>
    ),
    featured: true,
  },
  {
    id: 'uxui',
    icon: <Palette size={22} />,
    title: 'UX / UI Design',
    shortText:
      'UI and UX are the heartbeat of any digital product. Our design team creates pixel-perfect interfaces that elevate your brand and delight users.',
    expanded: (
      <>
        We design intuitive visual and functional experiences for both hardware and software products
        — from wireframes to fully polished design systems.
      </>
    ),
  },
  {
    id: 'soft-dev',
    icon: <Code2 size={22} />,
    title: 'Software Development',
    shortText:
      'We guide projects through every phase of the software development lifecycle — from requirements gathering to delivery — using modern methodologies.',
    expanded: <>Vast opportunities in the IT industry start with a solid development foundation.</>,
  },
  {
    id: 'web-app',
    icon: <Globe size={22} />,
    title: 'Web Application',
    shortText:
      'We specialise in engineering secure, tailor-made web solutions with modern design and top-notch user experience for value-driven, customer-first businesses.',
    expanded: (
      <>
        <b>Full-cycle web development services including:</b>
        <ul className="list-disc ml-5 mt-1 space-y-1">
          <li>System architecture, security & UX design</li>
          <li>Prototyping, responsive implementation & design systems</li>
          <li>Cloud migration, API integration & hosting</li>
        </ul>
      </>
    ),
  },
  {
    id: 'pro-maint',
    icon: <Wrench size={22} />,
    title: 'Product Maintenance',
    shortText:
      'Minimise failures and keep software products consistent with our lifecycle maintenance services — reducing cost while retaining brand relevance.',
  },
  {
    id: 'seo',
    icon: <SearchCheck size={22} />,
    title: 'SEO',
    shortText:
      'We integrate products into your digital infrastructure, test in real environments, and use performance insights for continuous optimisation.',
  },
]

/* ─── Dev-process steps ──────────────────────────────────────── */
const DEV_STEPS = [
  {
    id: 'plan',
    num: '01',
    label: 'Plan',
    Icon: ClipboardList,
    accent: 'from-teal-400/25 to-teal-400/5',
    border: 'border-teal-400/20',
    glow: 'text-teal-400',
    description: 'We map your requirements, goals, and timelines into a clear project roadmap before a single line of code is written.',
  },
  {
    id: 'design',
    num: '02',
    label: 'Design',
    Icon: Palette,
    accent: 'from-sky-400/25 to-sky-400/5',
    border: 'border-sky-400/20',
    glow: 'text-sky-400',
    description: 'Our designers craft pixel-perfect UI/UX prototypes that align with your brand and delight your users.',
  },
  {
    id: 'develop',
    num: '03',
    label: 'Develop',
    Icon: Code2,
    accent: 'from-violet-400/25 to-violet-400/5',
    border: 'border-violet-400/20',
    glow: 'text-violet-400',
    description: 'Engineers build robust, scalable solutions using modern stacks, clean architecture, and agile sprint cycles.',
  },
  {
    id: 'test',
    num: '04',
    label: 'Test',
    Icon: Bug,
    accent: 'from-amber-400/25 to-amber-400/5',
    border: 'border-amber-400/20',
    glow: 'text-amber-400',
    description: 'Rigorous QA — unit, integration, security, and cross-device testing — ensures a flawless product launch.',
  },
  {
    id: 'deploy',
    num: '05',
    label: 'Deploy',
    Icon: Rocket,
    accent: 'from-emerald-400/25 to-emerald-400/5',
    border: 'border-emerald-400/20',
    glow: 'text-emerald-400',
    description: 'CI/CD pipelines and zero-downtime strategies get your product live — on your cloud of choice — without interruption.',
  },
  {
    id: 'support',
    num: '06',
    label: 'Support',
    Icon: LifeBuoy,
    accent: 'from-rose-400/25 to-rose-400/5',
    border: 'border-rose-400/20',
    glow: 'text-rose-400',
    description: 'We stay in your corner with monitoring, updates, and continuous improvements long after go-live.',
  },
]

/* ─── Works data ─────────────────────────────────────────────── */
type WorkTab = 'mobapp' | 'uxui' | 'webapp' | 'website'

const WORK_TABS: { id: WorkTab; label: string }[] = [
  { id: 'mobapp',  label: 'Mobile App' },
  { id: 'uxui',   label: 'UX / UI'    },
  { id: 'webapp',  label: 'Web App'   },
  { id: 'website', label: 'Website'   },
]

const WORKS: Record<WorkTab, WorkItem[]> = {
  mobapp: [
    {
      id: 'findabed',
      image: '/image/find-bed-app.jpg',
      alt: 'FindBed App',
      title: 'FindBed',
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Cross-platform app (web, Android, iOS) showing available hospital beds nearby.</li>
          <li>Shows oxygen, ICU, Normal, and Corona beds across hospitals.</li>
          <li>Filters by radius, bed type; sort by name, distance, or availability.</li>
          <li>Data sourced from the Indian government portal.</li>
        </ul>
      ),
    },
    {
      id: 'sehatuka',
      image: '/image/sehatuka-app.jpg',
      alt: 'Sehatuka App',
      title: 'Sehatuka',
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Medicare app available on Android and iOS.</li>
          <li>Medical checkup notifications, medicine reminders, doctor appointments.</li>
          <li>Store emergency contacts, surgery history, and prescriptions.</li>
          <li>Built with React Native and SQL.</li>
        </ul>
      ),
    },
    {
      id: 'rattham',
      image: '/image/rattham-app.png',
      alt: 'Rattham Udhavi App',
      title: 'Rattham Udhavi',
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Blood donation management app connecting donors with recipients.</li>
          <li>Donor registration and blood bank management system.</li>
          <li>Emergency blood requests with real-time mobile notifications.</li>
          <li>Available on Android.</li>
        </ul>
      ),
    },
    {
      id: 'brightbrains',
      image: '/image/brightbrains-app.jpeg',
      alt: 'Bright Brains App',
      title: 'Bright Brains',
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Brain training app with engaging games and memory challenges.</li>
          <li>Cognitive exercises designed to boost mental performance.</li>
          <li>Progress tracking and performance analytics dashboard.</li>
          <li>Available on web, iOS, and Android.</li>
        </ul>
      ),
    },
    {
      id: 'stockbrains',
      image: '/image/stock-brains-ai.png',
      alt: 'StockBrains.ai App',
      title: 'StockBrains.ai',
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>AI-powered stock research app with SWOT analysis.</li>
          <li>Smart investment tools and real-time market insights.</li>
          <li>Data-driven stock decision support powered by AI.</li>
          <li>Available on Android.</li>
        </ul>
      ),
    },
  ],
  uxui: [
    { id: 'arjava-web-design', image: '/image/arjava-web-design.jpg', alt: 'Arjava Web Design' },
    { id: 'grit-web-design',   image: '/image/grit-web-design.jpg',   alt: 'Grit Web Design'  },
    { id: 'sangam-web-design', image: '/image/sangam-web-design.jpg', alt: 'Sangam Web Design' },
  ],
  webapp: [
    {
      id: 'sorting',
      image: '/image/sorting-analysis-web-app.jpg',
      alt: 'Sorting Analysis Web App',
      title: 'Sorting Analysis',
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Input an array and get output with full visualisation.</li>
          <li>Compare swap counts across every sorting technique.</li>
          <li>Accepts integers, strings, characters, floats — random, reverse, or nearly-sorted arrays.</li>
          <li>View code, time, and space complexity per technique.</li>
        </ul>
      ),
    },
    {
      id: 'mugavari',
      image: '/image/Mugavari-web-app.jpg',
      alt: 'Mugavari Web App',
      title: 'Mugavari',
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Web application for Mugavari Foundation's charitable activities.</li>
          <li>Donation management and volunteer portal.</li>
          <li>Event organisation and community engagement features.</li>
        </ul>
      ),
    },
    {
      id: 'goddard',
      image: '/image/goddard-webapp.png',
      alt: 'Goddard Web App',
      title: 'Goddard',
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Comprehensive daycare school management web application.</li>
          <li>Student management with a dedicated parent portal.</li>
          <li>Staff scheduling and integrated billing system.</li>
        </ul>
      ),
    },
    {
      id: 'tap-time',
      image: '/image/tap-time.png',
      alt: 'Tap Time Web App',
      title: 'Tap Time',
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Employee time & attendance tracking web application.</li>
          <li>Staff check-in / out with daily and salary-based reports.</li>
          <li>iOS and Android companion apps for on-the-go access.</li>
        </ul>
      ),
    },
  ],
  website: [
    {
      id: 'btk',
      image: '/image/BTK-website.jpg',
      alt: 'Bharathi Tamil Academy Website',
      title: 'Bharathi Tamil Academy',
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Website for a 501(c)(3) nonprofit teaching Tamil language and culture.</li>
          <li>Student portal, class schedules, and community events.</li>
          <li>Based in Redmond, WA.</li>
        </ul>
      ),
    },
    {
      id: 'tnngo',
      image: '/image/tnngo-website.png',
      alt: 'TN-NGO Website',
      title: 'TN-NGO',
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Platform connecting NGOs with students for quality education.</li>
          <li>NGO registration, student enrollment, and resource management.</li>
          <li>Community engagement and outreach features.</li>
        </ul>
      ),
    },
    {
      id: 'redmond-tamil-school',
      image: '/image/redmond-tamil-school.jpg',
      alt: 'Redmond Tamil School Website',
      title: 'Redmond Tamil School',
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>School notification and information website for Redmond Tamil School.</li>
          <li>Latest news, upcoming events, and student schedules.</li>
          <li>Tamil language class enrolment and school announcements.</li>
        </ul>
      ),
    },
    {
      id: 'seeeds-india',
      image: '/image/seeds-india.jpg',
      alt: 'SEEEDS India Website',
      title: 'SEEEDS India',
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>NGO website for SEEEDS Foundation empowering children through education.</li>
          <li>Scholarship applications and donation / volunteer portal.</li>
          <li>Admissions support, events, and success stories.</li>
        </ul>
      ),
    },
    {
      id: 'grit',
      image: '/image/grit-web-design.jpg',
      alt: 'Grit Website',
      title: 'Grit',
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Performance tracking system for productivity and goal achievement.</li>
          <li>Custom metrics, progress analytics, and goal setting.</li>
          <li>Custom reporting dashboard for teams and individuals.</li>
        </ul>
      ),
    },
  ],
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function Home() {
  const [activeTab, setActiveTab] = useState<WorkTab>('mobapp')

  const typeText = useTypewriter(['Experiences', 'Solutions', 'Products', 'Futures'], 85, 2000)

  return (
    <PageTransition>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-base">
        {/* Animated blobs */}
        <div className="absolute top-[-100px] right-[-80px] w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-60px] left-[10%] w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] animate-blob delay-2000" />
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[90px] animate-blob delay-4000" />

        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        {/* Edge gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-base via-transparent to-dark-base pointer-events-none" />

        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

            {/* Left — text */}
            <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start gap-6">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="section-tag">
                  <Zap size={12} />
                  Full Stack IT Solutions
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-center lg:text-left"
              >
                Building Digital<br />
                <span className="gradient-text">
                  {typeText}
                  <span className="inline-block w-[3px] h-[1em] bg-teal-400 align-middle ml-1 animate-pulse" />
                </span>
                {' '}That Matter
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-400 text-lg leading-relaxed text-center lg:text-left max-w-xl"
              >
                At Arjava, we develop software and mobile product engineering services for businesses,
                educational institutions, healthcare and government organisations — helping them achieve
                their valued objectives.
              </motion.p>

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="btn-primary px-7 py-3"
                  >
                    Get a Proposal <ArrowRight size={16} />
                  </motion.button>
                </Link>
                <Link to="/products">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="btn-outline px-7 py-3"
                  >
                    Our Works <ChevronRight size={16} />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 w-full"
              >
                <StatCounter value={5}  label="Years Experience" />
                <StatCounter value={15} label="Projects Delivered" />
                <StatCounter value={15} label="Happy Clients" />
                <StatCounter value={5}  label="Countries Served" />
              </motion.div>
            </div>

            {/* Right — hero image */}
            <div className="w-full lg:w-[55%] flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-2xl"
              >
                {/* Teal glow halo */}
                <div className="absolute inset-0 rounded-3xl bg-teal-500/15 blur-[60px] scale-110 pointer-events-none" />
                <motion.img
                  src="/image/hero_image.png"
                  alt="Arjava Technologies — Full Stack IT Solutions"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-full h-auto rounded-3xl object-cover shadow-[0_0_80px_rgba(45,212,191,0.18)] border border-white/10"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ──────────────────────────────────── */}
      <section className="bg-dark-surface py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">Our DNA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              What <span className="gradient-text">Drives</span> Us
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Vision */}
            <AnimatedSection direction="left">
              <div className="glass p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center mb-5">
                  <img src="/image/vision.png" alt="Vision" className="w-8 h-8 object-contain brightness-0 invert" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
                <p className="text-slate-400 leading-relaxed">
                  Propel technological innovation that empowers mankind.
                </p>
              </div>
            </AnimatedSection>

            {/* Mission */}
            <AnimatedSection direction="right">
              <div className="glass p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center mb-5">
                  <img src="/image/mission.png" alt="Mission" className="w-8 h-8 object-contain brightness-0 invert" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                <p className="text-slate-400 leading-relaxed">
                  Full Stack IT Solutions and services, IoT Solutions and Services, Product Development —
                  delivered with precision and passion.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── DIGITAL SERVICES (bento grid) ─────────────────────── */}
      <section className="bg-dark-base py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Digital <span className="gradient-text">Services</span>
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">
              End-to-end technology solutions crafted to scale with your business.
            </p>
          </AnimatedSection>

          {/* Bento-style grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((svc, i) => (
              <AnimatedSection key={svc.id} delay={i * 0.07}>
                <ServiceCard
                  icon={svc.icon}
                  title={svc.title}
                  shortText={svc.shortText}
                  expandedContent={svc.expanded}
                  featured={svc.featured}
                  className={svc.featured ? 'lg:col-span-1 border-teal-500/30' : ''}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVELOPMENT PROCESS ───────────────────────────────── */}
      <section className="bg-dark-surface py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="section-tag">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Development <span className="gradient-text">Process</span>
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm">
              A structured approach that takes your idea from concept to a live, supported product.
            </p>
          </AnimatedSection>

          {/* 3 × 2 step card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DEV_STEPS.map((step, i) => (
              <AnimatedSection key={step.id} delay={i * 0.09}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.22 } }}
                  className="group relative card-dark p-6 h-full overflow-hidden cursor-default"
                >
                  {/* Top accent line — reveals on hover */}
                  <div className={cn(
                    'absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent via-current opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                    step.glow,
                  )} />

                  {/* Watermark number */}
                  <span className="absolute -top-3 -right-1 text-[96px] font-black text-white/[0.03] select-none leading-none pointer-events-none">
                    {step.num}
                  </span>

                  {/* Icon bubble */}
                  <div className={cn(
                    'w-12 h-12 rounded-xl bg-gradient-to-br border flex items-center justify-center mb-5 transition-shadow duration-300 group-hover:shadow-[0_0_24px_currentColor]',
                    step.accent, step.border, step.glow,
                  )}>
                    <step.Icon size={22} />
                  </div>

                  {/* Step number badge */}
                  <span className={cn('text-xs font-mono font-semibold tracking-widest mb-1 block', step.glow)}>
                    {step.num}
                  </span>

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                    {step.label}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom connector arrow — shows between steps in a row */}
                  {i % 3 !== 2 && (
                    <ChevronRight
                      size={16}
                      className="absolute -right-3 top-1/2 -translate-y-1/2 text-teal-400/20 hidden lg:block z-10"
                    />
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR WORKS ─────────────────────────────────────────── */}
      <section className="bg-dark-base py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Our <span className="gradient-text">Works</span>
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">
              A selection of projects we're proud to have shipped.
            </p>
          </AnimatedSection>

          {/* Tab pills */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {WORK_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200',
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-teal-400 to-sky-400 text-gray-900'
                      : 'bg-dark-card border border-dark-line text-slate-400 hover:border-teal-400/40 hover:text-teal-400',
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Work grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {WORKS[activeTab].map((item) =>
                item.image ? (
                  item.description ? (
                    <WorkModal key={item.id} item={item} />
                  ) : (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden rounded-2xl border border-dark-line"
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-52 object-cover"
                      />
                    </motion.div>
                  )
                ) : (
                  <div
                    key={item.id}
                    className="h-52 rounded-2xl border border-dark-line bg-dark-surface flex items-center justify-center"
                  >
                    <span className="text-slate-500 text-sm font-medium">Update Soon</span>
                  </div>
                ),
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section className="bg-dark-surface border-y border-dark-line py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Ready to Build Something{' '}
                <span className="gradient-text">Amazing?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Tell us about your project and we'll craft a tailored proposal within 24 hours.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn-primary px-10 py-4 text-base"
                >
                  Get a Proposal <ArrowRight size={18} />
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </PageTransition>
  )
}
