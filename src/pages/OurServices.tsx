import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Smartphone, Palette, Code2, Globe, Wrench, SearchCheck } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import ServiceCard from '@/components/ui/ServiceCard'
import AnimatedSection from '@/components/ui/AnimatedSection'
import PageTransition from '@/components/ui/PageTransition'
import { cn } from '@/lib/utils'

/* ─── Services data ──────────────────────────────────────────── */
const SERVICES = [
  {
    id: 'mob-app',
    icon: <Smartphone size={22} />,
    title: 'Mobile Application',
    shortText:
      'Arjava delivers mobile solutions for every smart device across all major operating systems. Years of expertise, paramount focus on quality.',
    expanded: (
      <>
        <b>Our mobile development services include:</b>
        <ul className="list-disc ml-5 mt-1 space-y-1">
          <li>iPhone / iPad / iOS Application Development</li>
          <li>Android Application Development</li>
          <li>Cross-Platform Development (React Native / Flutter)</li>
          <li>Rich Mobile Web Application Development</li>
        </ul>
      </>
    ),
  },
  {
    id: 'uxui',
    icon: <Palette size={22} />,
    title: 'UX / UI Design',
    shortText:
      "UI and UX are essential in the virtual world. When you have the best UI/UX they elevate your business even in offline situations.",
    expanded: (
      <>
        UI/UX design is a process of designing visual and functional aspects of a product — necessary
        for both hardware and software products.
      </>
    ),
  },
  {
    id: 'soft-dev',
    icon: <Code2 size={22} />,
    title: 'Software Development',
    shortText:
      'Software development covers every phase in the SDLC. Understanding the software development method opens vast opportunities in the IT industry.',
    expanded: (
      <>
        Our agile-driven teams build robust, scalable software from ground-up or step in at any
        lifecycle stage to accelerate delivery.
      </>
    ),
  },
  {
    id: 'web-dev',
    icon: <Globe size={22} />,
    title: 'Web Application',
    shortText:
      'We specialise in engineering secure, tailor-made web solutions that fundamentally change how business is delivered.',
    expanded: (
      <>
        <b>Full-cycle web development services including:</b>
        <ul className="list-disc ml-5 mt-1 space-y-1">
          <li>System architecture, security &amp; UX design</li>
          <li>Prototyping, responsive implementation &amp; design systems</li>
          <li>Automated testing, QA across all platforms &amp; browsers</li>
          <li>Cloud migration, API integration &amp; hosting</li>
        </ul>
      </>
    ),
  },
  {
    id: 'pro-maint',
    icon: <Wrench size={22} />,
    title: 'Product Maintenance',
    shortText:
      'Minimise failures and maintain software products consistently throughout the lifecycle — reducing costs while retaining brand relevance.',
    expanded: (
      <>
        CIOs are often burdened maintaining mission-critical apps while reducing costs. Our lifecycle
        maintenance services address that challenge directly.
      </>
    ),
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
    label: 'Plan',
    description:
      'We start by understanding your requirements, goals, and business objectives to create a comprehensive project roadmap.',
  },
  {
    id: 'design',
    label: 'Design',
    description:
      'Our designers craft intuitive UI/UX prototypes that align with your brand identity and user expectations.',
  },
  {
    id: 'develop',
    label: 'Develop',
    description:
      'Our engineers build robust, scalable solutions using modern technologies and industry best practices.',
  },
  {
    id: 'test',
    label: 'Test',
    description:
      'Rigorous QA testing ensures your product is bug-free, secure, and performs optimally across all platforms.',
  },
  {
    id: 'deploy',
    label: 'Deploy',
    description:
      'We handle smooth deployment to your chosen infrastructure with zero-downtime release strategies.',
  },
  {
    id: 'support',
    label: 'Support',
    description:
      'Our team provides ongoing maintenance, updates, and 24/7 support to keep your product running perfectly.',
  },
]

export default function OurServices() {
  const [activeStep, setActiveStep] = useState('plan')

  return (
    <PageTransition>
      <Navbar />
      <PageHero
        title="Our Services"
        subtitle="End-to-end technology services that scale with your ambition — from mobile to web, design to deployment."
        breadcrumb="Our Services"
      />

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <section className="bg-dark-base py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection>
            <div className="card-dark p-8 border-l-4 border-teal-400/50">
              <p className="text-slate-300 leading-relaxed text-lg mb-5">
                At Arjava, we help enterprises expand their businesses through custom application
                development, Business Intelligence, IT services, testing, mobile application development,
                and Cloud solutions — capable of performing across several platforms and infrastructures.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Our core value revolves around being a well-respected technology company focused on
                delivering best-in-class innovative solutions to our customers and partners.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SERVICE CARDS ─────────────────────────────────────── */}
      <section className="bg-dark-surface py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Service <span className="gradient-text">Catalogue</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((svc, i) => (
              <AnimatedSection key={svc.id} delay={i * 0.07}>
                <ServiceCard
                  icon={svc.icon}
                  title={svc.title}
                  shortText={svc.shortText}
                  expandedContent={svc.expanded}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVELOPMENT PROCESS ───────────────────────────────── */}
      <section className="bg-dark-base py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Development <span className="gradient-text">Process</span>
            </h2>
          </AnimatedSection>

          {/* Step pills */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {DEV_STEPS.map((step, i) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={cn(
                    'relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200',
                    activeStep === step.id
                      ? 'bg-gradient-to-r from-teal-400 to-sky-400 text-gray-900 shadow-[0_0_20px_rgba(45,212,191,0.35)]'
                      : 'bg-dark-card border border-dark-line text-slate-400 hover:border-teal-400/40 hover:text-teal-400',
                  )}
                >
                  <span className="mr-1.5 text-xs opacity-60">{String(i + 1).padStart(2, '0')}</span>
                  {step.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Active step card */}
          <AnimatePresence mode="wait">
            {DEV_STEPS.filter((s) => s.id === activeStep).map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-xl mx-auto text-center"
              >
                <div className="card-dark p-8">
                  <p className="gradient-text text-2xl font-bold mb-3">{step.label}</p>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </PageTransition>
  )
}
