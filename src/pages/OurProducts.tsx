import { useState } from 'react'
import { CheckCircle2, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import AnimatedSection from '@/components/ui/AnimatedSection'
import PageTransition from '@/components/ui/PageTransition'
import { cn } from '@/lib/utils'

/* ─── Featured Products (own-built) ─────────────────────────── */
interface Product {
  id: string
  image: string
  alt: string
  name: string
  subtitle: string
  features: string[]
  imageLeft?: boolean
}

const PRODUCTS: Product[] = [
  {
    id: 'sorting',
    image: '/image/Sorting Analysis mockup.png',
    alt: 'Sorting Analysis Mockup',
    name: 'Sorting Analysis',
    subtitle: 'Sorting Technique Visualiser',
    features: [
      'Input an array and get the output with its full visualisation.',
      'See comparisons and swap counts of every sorting technique to determine the best for each scenario.',
      'Visualisation graph giving graphical representation of input and output arrays.',
      'View code, time and space complexity of every sorting technique.',
    ],
    imageLeft: true,
  },
  {
    id: 'sehatuka',
    image: '/image/Sehatuka mockup.jpg',
    alt: 'Sehatuka Mockup',
    name: 'Sehatuka',
    subtitle: 'Healthcare Application',
    features: [
      'A medicare application available on both Android and iOS.',
      'Useful for medical checkup notifications, medicine intake, doctor appointments and more.',
      'Store important information like emergency contacts, surgeries and prescriptions.',
      'Developed in React Native and SQL.',
    ],
    imageLeft: false,
  },
]

/* ─── All Projects grid data ─────────────────────────────────── */
type ProjectCategory = 'Mobile App' | 'Web App' | 'Website'

interface ProjectCard {
  id: string
  name: string
  category: ProjectCategory
  image: string
  description: string
  features: string[]
  liveUrl?: string
  iosUrl?: string
  androidUrl?: string
  isLogoImage?: boolean          // true → centre the image with padding instead of cover-crop
  comingSoon?: ('web' | 'ios' | 'android')[]  // show grayed-out "Coming Soon" pill for these
}

const ALL_PROJECTS: ProjectCard[] = [
  {
    id: 'findbed',
    name: 'FindBed',
    category: 'Mobile App',
    image: '/image/find-bed-app.jpg',
    description:
      'Healthcare bed booking platform connecting patients with available hospital beds in real-time across India.',
    features: ['Real-time Bed Availability', 'Hospital Network', 'Booking System', 'Emergency Services'],
  },
  {
    id: 'sehatuka-grid',
    name: 'Sehatuka',
    category: 'Mobile App',
    image: '/image/sehatuka-app.jpg',
    description:
      'Medicare app on Android and iOS for medical checkups, medicine reminders, doctor appointments and health records.',
    features: ['Checkup Notifications', 'Medicine Reminders', 'Doctor Appointments', 'Health Records'],
  },
  {
    id: 'rattham',
    name: 'Rattham Udhavi',
    category: 'Mobile App',
    image: '/image/rattham-app.png',
    description:
      'Blood donation management system connecting donors with recipients and managing blood bank operations efficiently.',
    features: ['Donor Registration', 'Blood Bank Management', 'Emergency Requests', 'Mobile Notifications'],
    androidUrl: 'https://play.google.com/store/apps/details?id=com.thiri.raththam&pcampaignid=web_share',
    comingSoon: ['web', 'ios'],
  },
  {
    id: 'brightbrains',
    name: 'Bright Brains',
    category: 'Mobile App',
    image: '/image/brightbrains-app.jpeg',
    description:
      'An innovative app that boosts brain power through engaging games, memory challenges, and cognitive exercises. Available on web, iOS and Android.',
    features: ['Brain Training Games', 'Memory Exercises', 'Progress Tracking', 'Cognitive Challenges'],
    liveUrl: 'http://bright-brains.net/',
    iosUrl: 'https://apps.apple.com/us/app/bright-brains/id6471830069',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.arjava.brightbrains&hl=en_US',
  },
  {
    id: 'stockbrains',
    name: 'StockBrains.ai',
    category: 'Mobile App',
    image: '/image/stock-brains-ai.png',
    description:
      'AI-powered stock research app featuring SWOT analysis, market insights, and smart investment tools to help users make data-driven stock decisions.',
    features: ['SWOT Analysis', 'AI Stock Research', 'Market Insights', 'Investment Analytics'],
    androidUrl: 'https://apkcombo.com/fr/stocks-brain-ai/org.vavtech.stocksbrainai/',
  },
  {
    id: 'sorting-grid',
    name: 'Sorting Analysis',
    category: 'Web App',
    image: '/image/sorting-analysis-web-app.jpg',
    description:
      'Advanced sorting algorithm analysis and visualisation tool for educational and research purposes.',
    features: ['Algorithm Visualisation', 'Performance Analysis', 'Interactive Learning', 'Complexity View'],
    liveUrl: 'https://sortinganalysis.hope3.org/',
  },
  {
    id: 'mugavari',
    name: 'Mugavari',
    category: 'Web App',
    image: '/image/Mugavari-web-app.jpg',
    description:
      'Web application for Mugavari Foundation to manage charitable activities, donations, and community outreach.',
    features: ['Donation Management', 'Volunteer Portal', 'Event Organisation', 'Community Engagement'],
  },
  {
    id: 'goddard',
    name: 'Goddard',
    category: 'Web App',
    image: '/image/goddard-webapp.png',
    description:
      'Comprehensive web application for daycare school management — streamlining admin, parent communication and billing.',
    features: ['Student Management', 'Parent Portal', 'Staff Scheduling', 'Billing System'],
    liveUrl: 'https://goddardschool.org/',
  },
  {
    id: 'grit',
    name: 'Grit',
    category: 'Website',
    image: '/image/grit-web-design.jpg',
    description:
      'Performance tracking system designed to monitor and analyse metrics for improved productivity and goal achievement.',
    features: ['Performance Metrics', 'Goal Setting', 'Progress Analytics', 'Custom Reports'],
  },
  {
    id: 'btk',
    name: 'Bharathi Tamil Academy',
    category: 'Website',
    image: '/image/BTK-website.jpg',
    description:
      'Website for a registered 501(c)(3) nonprofit teaching Tamil language and culture in the Redmond area.',
    features: ['Language Classes', 'Cultural Programs', 'Student Portal', 'Community Events'],
    liveUrl: 'https://www.btaredmond.org/',
  },
  {
    id: 'tnngo',
    name: 'TN-NGO',
    category: 'Website',
    image: '/image/tnngo-website.png',
    description:
      'Platform connecting NGOs with students to provide quality education, resource sharing, and community engagement.',
    features: ['NGO Registration', 'Student Enrollment', 'Resource Management', 'Community Features'],
    liveUrl: 'https://tnngo.org/',
  },
  {
    id: 'redmond-tamil-school',
    name: 'Redmond Tamil School',
    category: 'Website',
    image: '/image/redmond-tamil-school.jpg',
    description:
      'School notification and information website for Redmond Tamil School — featuring news, events, student schedules, and Tamil language class enrolment.',
    features: ['Latest News & Events', 'Student Schedule', 'Class Enrolment', 'School Announcements'],
    liveUrl: 'https://www.redmondtamilschool.org/',
  },
  {
    id: 'tap-time',
    name: 'Tap Time',
    category: 'Web App',
    image: '/image/tap-time.png',
    description:
      'Employee time & attendance tracking web app — staff check in/out, managers get daily and salary-based reports, with iOS and Android apps for on-the-go access.',
    features: ['Employee Check-In / Out', 'Daily & Salary Reports', 'Employee Management', 'Multi-device Support'],
    liveUrl: 'https://tap-time.com/',
    iosUrl: 'https://apps.apple.com/us/app/tap-time-employee-tracker/id6756376037',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.icode.punchcard&pcampaignid=web_share',
  },
  {
    id: 'seeeds-india',
    name: 'SEEEDS India',
    category: 'Website',
    image: '/image/seeds-india.jpg',
    description:
      'NGO website for SEEEDS Foundation — empowering economically challenged children through education with scholarships, donations, volunteer drives and admissions support.',
    features: ['Scholarship Applications', 'Donation & Volunteer Portal', 'Admissions & Events', 'Success Stories'],
    liveUrl: 'https://seeedsindia.org/',
  },
  {
    id: 'element-explorer',
    name: 'Element Explorer',
    category: 'Mobile App',
    image: '/image/element-explorer.png',
    description:
      'Interactive periodic table app for exploring chemical elements — featuring detailed element data, properties, and an engaging learning experience on web, iOS and Android.',
    features: ['Interactive Periodic Table', 'Element Details & Properties', 'Educational Tools', 'Cross-platform'],
    liveUrl: 'https://element-explorer.com/',
    iosUrl: 'https://apps.apple.com/us/app/element-explorer/id6739361632',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.electroniq.app',
  },
]

const FILTER_TABS: Array<{ id: string; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'Mobile App', label: 'Mobile App' },
  { id: 'Web App', label: 'Web App' },
  { id: 'Website', label: 'Website' },
]

/* ─── Featured Product Row ───────────────────────────────────── */
function ProductRow({ product }: { product: Product }) {
  const isLeft = product.imageLeft

  const imgEl = (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="w-full lg:w-1/2 flex justify-center"
    >
      <img
        src={product.image}
        alt={product.alt}
        className="w-full max-w-sm sm:max-w-md lg:max-w-full h-auto rounded-2xl drop-shadow-[0_0_40px_rgba(45,212,191,0.18)]"
      />
    </motion.div>
  )

  const cardEl = (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="w-full lg:w-1/2 flex items-center"
    >
      <div className="card-dark p-5 sm:p-7 w-full border-t-2 border-teal-400/40">
        <h5 className="text-2xl font-bold text-white mb-1">{product.name}</h5>
        <p className="text-teal-400 text-sm font-medium mb-5">{product.subtitle}</p>
        <ul className="space-y-3">
          {product.features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
              <CheckCircle2 size={16} className="text-teal-400 flex-shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>
        <Link to="/contact" className="mt-6 inline-block">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-outline px-6 py-2.5 text-sm"
          >
            Learn More
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )

  return (
    <div className={cn(
      'flex flex-col gap-8 md:gap-10 items-center mb-12 md:mb-16 w-full',
      isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
    )}>
      {imgEl}
      {cardEl}
    </div>
  )
}

/* ─── Project Card Tile ──────────────────────────────────────── */
function ProjectCardTile({ project, index }: { project: ProjectCard; index: number }) {
  const initials = project.name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16, scale: 0.97 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="card-dark overflow-hidden flex flex-col"
    >
      {/* Image / Placeholder */}
      {project.image ? (
        <div className={cn(
          'relative overflow-hidden h-48',
          project.isLogoImage && 'bg-gradient-to-br from-dark-card to-dark-surface flex items-center justify-center'
        )}>
          <img
            src={project.image}
            alt={project.name}
            className={cn(
              'transition-transform duration-500',
              project.isLogoImage
                ? 'max-h-28 max-w-[70%] object-contain drop-shadow-[0_0_24px_rgba(45,212,191,0.2)] hover:scale-105'
                : 'w-full h-full object-cover hover:scale-105'
            )}
          />
          {!project.isLogoImage && (
            <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 to-transparent" />
          )}
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-teal-400/15 text-teal-300 border border-teal-400/20 backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      ) : (
        <div className="relative h-48 bg-gradient-to-br from-teal-900/25 to-dark-card flex items-center justify-center border-b border-dark-line">
          <span className="text-4xl font-black gradient-text select-none">{initials}</span>
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-teal-400/15 text-teal-300 border border-teal-400/20">
            {project.category}
          </span>
        </div>
      )}

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h4 className="text-white font-bold text-base mb-2">{project.name}</h4>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
        <ul className="space-y-1.5 mb-4">
          {project.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-500 text-xs">
              <CheckCircle2 size={13} className="text-teal-400 flex-shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>
        {(project.liveUrl || project.iosUrl || project.androidUrl ||
          project.comingSoon?.length) && (
          <div className="flex flex-wrap items-center gap-2 mt-1">
            {/* Visit Site */}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-teal-400 text-xs font-medium hover:text-teal-300 transition-colors duration-200 group"
              >
                <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                Visit Site
              </a>
            ) : project.comingSoon?.includes('web') && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800/60 border border-slate-700/40 text-slate-600 text-[10px] font-medium cursor-not-allowed select-none">
                🌐 Web · Soon
              </span>
            )}
            {/* iOS */}
            {project.iosUrl ? (
              <a
                href={project.iosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-700/60 border border-slate-600/50 text-slate-300 text-[10px] font-medium hover:border-teal-400/40 hover:text-teal-300 transition-colors duration-200"
              >
                🍎 App Store
              </a>
            ) : project.comingSoon?.includes('ios') && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800/60 border border-slate-700/40 text-slate-600 text-[10px] font-medium cursor-not-allowed select-none">
                🍎 iOS · Soon
              </span>
            )}
            {/* Android */}
            {project.androidUrl ? (
              <a
                href={project.androidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-700/60 border border-slate-600/50 text-slate-300 text-[10px] font-medium hover:border-teal-400/40 hover:text-teal-300 transition-colors duration-200"
              >
                🤖 Play Store
              </a>
            ) : project.comingSoon?.includes('android') && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800/60 border border-slate-700/40 text-slate-600 text-[10px] font-medium cursor-not-allowed select-none">
                🤖 Android · Soon
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function OurProducts() {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filtered =
    activeFilter === 'all'
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <PageTransition>
      <Navbar />
      <PageHero
        title="Our Products"
        subtitle="Innovative B2B and B2C solutions built with the latest market trends and user-centric thinking."
        breadcrumb="Our Products"
      />

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <section className="bg-dark-base py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <AnimatedSection>
            <div className="card-dark p-5 sm:p-8 border-l-4 border-teal-400/50">
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-5">
                Our creative team of software product developers provides B2B and B2C solutions for
                customers and end-users. Being aware of the latest market trends and constantly
                communicating with our users — we go beyond traditional software development.
              </p>
              <p className="text-slate-400 leading-relaxed">
                We have an innovative approach based on extensive technology expertise, being responsible
                for full-cycle product development including market research and active product promotion.
                We develop products on web and mobile platforms (iOS, Android, Windows, etc).
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ─────────────────────────────────── */}
      <section className="bg-dark-surface py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <AnimatedSection className="text-center mb-14">
            <span className="section-tag">What We've Built</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-4">
              Featured <span className="gradient-text">Products</span>
            </h2>
          </AnimatedSection>

          {PRODUCTS.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ── ALL PROJECTS GRID ─────────────────────────────────── */}
      <section className="bg-dark-base py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

          {/* Heading */}
          <AnimatedSection className="text-center mb-10">
            <span className="section-tag">Portfolio</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-4">
              All <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm">
              A complete collection of innovative solutions we've built for clients across industries.
            </p>
          </AnimatedSection>

          {/* Filter tabs */}
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10">
              {FILTER_TABS.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={cn(
                    'px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 border',
                    activeFilter === tab.id
                      ? 'bg-teal-400/15 border-teal-400/50 text-teal-300'
                      : 'border-dark-line text-slate-400 hover:border-teal-400/30 hover:text-slate-300'
                  )}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <ProjectCardTile key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA */}
          <AnimatedSection className="text-center mt-14">
            <p className="text-slate-400 mb-5 text-sm">Have a project idea in mind?</p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-primary px-8 py-3"
              >
                Start a Project
              </motion.button>
            </Link>
          </AnimatedSection>

        </div>
      </section>

      <Footer />
    </PageTransition>
  )
}
