import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Smartphone, Palette, Code2, Globe, Wrench, SearchCheck,
  ClipboardList, Bug, Rocket, LifeBuoy,
} from 'lucide-react'
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
    expanded: (
      <>
        Our SEO services cover technical audits, on-page optimisation, keyword strategy, and
        performance monitoring — ensuring your product ranks and retains visibility over time.
      </>
    ),
  },
]

/* ─── Dev-process steps ──────────────────────────────────────── */
const DEV_STEPS = [
  {
    id: 'plan',
    num: '01',
    label: 'Plan',
    Icon: ClipboardList,
    description:
      'We begin by deeply understanding your requirements, goals, and business objectives to map out a clear, actionable project roadmap.',
    keyPoints: [
      'Requirements gathering',
      'Project roadmap creation',
      'Timeline & milestones',
      'Risk assessment',
    ],
  },
  {
    id: 'design',
    num: '02',
    label: 'Design',
    Icon: Palette,
    description:
      'Our designers craft intuitive UI/UX prototypes that align perfectly with your brand identity and exceed user expectations.',
    keyPoints: [
      'Wireframing & prototyping',
      'Brand-aligned UI/UX',
      'User flow mapping',
      'Design system creation',
    ],
  },
  {
    id: 'develop',
    num: '03',
    label: 'Develop',
    Icon: Code2,
    description:
      'Our engineers build robust, scalable solutions using modern technologies, clean code and industry best practices throughout.',
    keyPoints: [
      'Agile sprint cycles',
      'Clean, documented code',
      'API & backend integration',
      'Performance optimisation',
    ],
  },
  {
    id: 'test',
    num: '04',
    label: 'Test',
    Icon: Bug,
    description:
      'Rigorous QA testing ensures your product is bug-free, secure, and performs optimally across all platforms and devices.',
    keyPoints: [
      'Unit & integration tests',
      'Cross-device QA',
      'Security & load testing',
      'User acceptance testing',
    ],
  },
  {
    id: 'deploy',
    num: '05',
    label: 'Deploy',
    Icon: Rocket,
    description:
      'We handle smooth deployment to your chosen infrastructure using CI/CD pipelines and zero-downtime release strategies.',
    keyPoints: [
      'CI/CD pipeline setup',
      'Zero-downtime deployment',
      'Cloud infrastructure',
      'Go-live monitoring',
    ],
  },
  {
    id: 'support',
    num: '06',
    label: 'Support',
    Icon: LifeBuoy,
    description:
      'Our team provides ongoing maintenance, feature updates, and continuous support to keep your product running perfectly.',
    keyPoints: [
      '24/7 monitoring',
      'Regular updates & patches',
      'Performance analytics',
      'Continuous improvement',
    ],
  },
]

const AUTO_INTERVAL = 3000

function StepCircle({ step, index, activeIndex, activeStep }: {
  step: typeof DEV_STEPS[0], index: number, activeIndex: number, activeStep: string
}) {
  return (
    <motion.div
      animate={{
        background: index <= activeIndex ? 'linear-gradient(135deg,#2dd4bf,#38bdf8)' : 'rgb(22,27,39)',
        borderColor: index <= activeIndex ? 'rgba(45,212,191,0.6)' : 'rgb(30,45,64)',
        boxShadow: activeStep === step.id ? '0 0 20px rgba(45,212,191,0.5)' : 'none',
      }}
      transition={{ duration: 0.35 }}
      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center z-10 relative transition-transform duration-200 group-hover:scale-110"
    >
      {index <= activeIndex ? (
        <step.Icon size={14} className="text-gray-900" />
      ) : (
        <span className="font-bold text-xs text-slate-500 group-hover:text-teal-400 transition-colors">{step.num}</span>
      )}
    </motion.div>
  )
}

function StepLabel({ step, activeStep }: { step: typeof DEV_STEPS[0], activeStep: string }) {
  return (
    <span className={cn('text-xs font-medium transition-colors duration-200',
      activeStep === step.id ? 'text-teal-400' : 'text-slate-500 group-hover:text-slate-300'
    )}>
      {step.label}
    </span>
  )
}

export default function OurServices() {
  const [activeStep, setActiveStep] = useState('plan')
  const [paused, setPaused] = useState(false)
  const activeIndex = DEV_STEPS.findIndex((s) => s.id === activeStep)

  useEffect(() => {
    if (paused) return
    const timer = setTimeout(
      () => setActiveStep(DEV_STEPS[(activeIndex + 1) % DEV_STEPS.length].id),
      AUTO_INTERVAL,
    )
    return () => clearTimeout(timer)
  }, [activeStep, paused])

  function handleStepClick(id: string) {
    setActiveStep(id)
    setPaused(true)
    setTimeout(() => setPaused(false), AUTO_INTERVAL * 2)
  }

  return (
    <PageTransition>
      <Navbar />
      <PageHero
        title="Our Services"
        subtitle="End-to-end technology services that scale with your ambition — from mobile to web, design to deployment."
        breadcrumb="Our Services"
      />

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <section className="bg-dark-base py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <AnimatedSection>
            <div className="card-dark p-5 sm:p-8 border-l-4 border-teal-400/50">
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg mb-4 md:mb-5">
                At Arjava, we help enterprises expand their businesses through custom application
                development, Business Intelligence, IT services, testing, mobile application development,
                and Cloud solutions — capable of performing across several platforms and infrastructures.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                Our core value revolves around being a well-respected technology company focused on
                delivering best-in-class innovative solutions to our customers and partners.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SERVICE CARDS ─────────────────────────────────────── */}
      <section className="bg-dark-surface py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-8 md:mb-12">
            <span className="section-tag">What We Offer</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3 md:mt-4">
              Service <span className="gradient-text">Catalogue</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
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
      <section className="bg-dark-base py-12 sm:py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

          {/* Heading */}
          <AnimatedSection className="text-center mb-8 sm:mb-14">
            <span className="section-tag">How We Work</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3 md:mt-4">
              Development <span className="gradient-text">Process</span>
            </h2>
            <p className="text-slate-400 mt-2 md:mt-3 max-w-xl mx-auto text-sm">
              A structured approach that takes your idea from concept to a live, supported product.
            </p>
          </AnimatedSection>

          {/* ── Timeline stepper ──────────────────────────────── */}
          <AnimatedSection delay={0.1}>
            <div className="relative max-w-4xl mx-auto mb-10 px-2 sm:px-4">
              {/* Background connector line */}
              <div className="absolute top-5 left-[calc(8.33%+1rem)] right-[calc(8.33%+1rem)] h-px bg-dark-line hidden sm:block" />
              {/* Animated progress line */}
              <motion.div
                className="absolute top-5 left-[calc(8.33%+1rem)] h-px bg-gradient-to-r from-teal-400 to-sky-400 origin-left hidden sm:block"
                style={{ right: 'calc(8.33% + 1rem)' }}
                animate={{ scaleX: activeIndex === 0 ? 0 : activeIndex / (DEV_STEPS.length - 1) }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Mobile: two-row snake layout */}
              <div className="sm:hidden flex flex-col gap-4">
                {/* Row 1: Plan → Design → Develop */}
                <div className="flex justify-between">
                  {DEV_STEPS.slice(0, 3).map((step, i) => (
                    <button
                      key={step.id}
                      onClick={() => handleStepClick(step.id)}
                      className="flex flex-col items-center gap-2 group outline-none relative flex-1"
                    >
                      {i < 2 && <div className="absolute top-4 left-1/2 right-[-50%] h-px bg-dark-line z-0" />}
                      {i < 2 && i < activeIndex && <div className="absolute top-4 left-1/2 right-[-50%] h-px bg-gradient-to-r from-teal-400 to-sky-400 z-0" />}
                      {i === 2 && <div className="absolute top-4 left-1/2 -translate-x-1/2 w-px h-[calc(100%+1rem)] bg-dark-line z-0" />}
                      {i === 2 && activeIndex >= 3 && <div className="absolute top-4 left-1/2 -translate-x-1/2 w-px h-[calc(100%+1rem)] bg-gradient-to-b from-teal-400 to-sky-400 z-0" />}
                      <StepCircle step={step} index={i} activeIndex={activeIndex} activeStep={activeStep} />
                      <StepLabel step={step} activeStep={activeStep} />
                    </button>
                  ))}
                </div>
                {/* Row 2: reversed so Test aligns under Develop, lines go right-to-left */}
                <div className="flex justify-between">
                  {[DEV_STEPS[5], DEV_STEPS[4], DEV_STEPS[3]].map((step, i) => {
                    const realIndex = DEV_STEPS.findIndex(s => s.id === step.id)
                    return (
                      <button
                        key={step.id}
                        onClick={() => handleStepClick(step.id)}
                        className="flex flex-col items-center gap-2 group outline-none relative flex-1"
                      >
                        {i < 2 && <div className="absolute top-4 left-1/2 right-[-50%] h-px bg-dark-line z-0" />}
                        {i < 2 && realIndex <= activeIndex && <div className="absolute top-4 left-1/2 right-[-50%] h-px bg-gradient-to-r from-sky-400 to-teal-400 z-0" />}
                        <StepCircle step={step} index={realIndex} activeIndex={activeIndex} activeStep={activeStep} />
                        <StepLabel step={step} activeStep={activeStep} />
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Desktop: single row */}
              <div className="hidden sm:flex justify-between">
                {DEV_STEPS.map((step, i) => (
                  <button
                    key={step.id}
                    onClick={() => handleStepClick(step.id)}
                    className="flex flex-col items-center gap-2 group outline-none"
                  >
                    <StepCircle step={step} index={i} activeIndex={activeIndex} activeStep={activeStep} />
                    <StepLabel step={step} activeStep={activeStep} />
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* ── Detail card ───────────────────────────────────── */}
          <AnimatePresence mode="wait">
            {DEV_STEPS.filter((s) => s.id === activeStep).map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="card-dark overflow-hidden border border-dark-line"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div className="flex flex-col lg:grid lg:grid-cols-5">

                  {/* ── LEFT: text content (3 cols) ──────────── */}
                  <div className="order-2 lg:order-1 lg:col-span-3 p-5 sm:p-8 lg:p-10">
                    {/* Step number + icon header */}
                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <motion.div
                        key={`icon-${step.id}`}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="pt-2"
                      >
                        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-teal-400/20 to-sky-400/10 border border-teal-400/25 flex items-center justify-center text-teal-400 mb-2 sm:mb-3">
                          <step.Icon size={18} />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                          {step.label}
                        </h3>
                      </motion.div>
                      <motion.span
                        key={`num-${step.id}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="ml-auto text-[48px] sm:text-[72px] font-black leading-none text-white/[0.05] select-none tabular-nums"
                      >
                        {step.num}
                      </motion.span>
                    </div>

                    <p className="text-slate-400 leading-relaxed mb-4 sm:mb-8 text-xs sm:text-sm lg:text-base">
                      {step.description}
                    </p>

                    {/* Key points grid */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.keyPoints.map((pt, i) => (
                        <motion.li
                          key={pt}
                          initial={{ opacity: 0, x: -14 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.08 + i * 0.07, duration: 0.35 }}
                          className="flex items-center gap-3 text-slate-300 text-sm"
                        >
                          <div className="w-6 h-6 rounded-lg bg-teal-400/10 border border-teal-400/20 flex items-center justify-center flex-shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                          </div>
                          {pt}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* ── RIGHT: visual panel (2 cols) ─────────── */}
                  <div className="order-1 lg:order-2 lg:col-span-2 relative overflow-hidden min-h-[160px] sm:min-h-[240px] lg:min-h-[280px] border-b lg:border-b-0 lg:border-l border-dark-line">
                    {/* Development process diagram as background */}
                    <img
                      src="/image/Development process.png"
                      alt="Development Process"
                      className="absolute inset-0 w-full h-full object-cover opacity-[0.08]"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-950/60 via-dark-card/80 to-sky-950/40" />

                    {/* Decorative rotating ring */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                        className="w-52 h-52 rounded-full border border-dashed border-teal-400/15"
                      />
                      <div className="absolute w-72 h-72 rounded-full border border-teal-400/[0.06]" />
                    </div>

                    {/* Glow blob behind icon */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-36 h-36 bg-teal-400/15 rounded-full blur-3xl" />
                    </div>

                    {/* Big step icon */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                      <motion.div
                        key={step.id}
                        initial={{ scale: 0.4, opacity: 0, rotate: -10 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        className="w-20 h-20 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-teal-400/25 to-sky-400/15 border border-teal-400/30 flex items-center justify-center text-teal-400 drop-shadow-[0_0_45px_rgba(45,212,191,0.35)]"
                      >
                        <step.Icon size={36} strokeWidth={1.4} className="sm:hidden" />
                        <step.Icon size={52} strokeWidth={1.4} className="hidden sm:block" />
                      </motion.div>

                      {/* Step label under icon */}
                      <motion.p
                        key={`label-${step.id}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.35 }}
                        className="text-teal-300 text-sm font-semibold tracking-wider uppercase"
                      >
                        {step.label}
                      </motion.p>
                    </div>

                    {/* Corner step number watermark */}
                    <span className="absolute bottom-4 right-5 text-[56px] font-black text-white/[0.04] select-none leading-none">
                      {step.num}
                    </span>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* ── Dot navigation ────────────────────────────────── */}
          <div className="flex justify-center gap-2 mt-6">
            {DEV_STEPS.map((step) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300',
                  activeStep === step.id
                    ? 'w-6 bg-teal-400'
                    : 'w-1.5 bg-dark-line hover:bg-slate-500',
                )}
              />
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </PageTransition>
  )
}
