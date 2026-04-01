import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import StatCounter from '@/components/ui/StatCounter'
import AnimatedSection from '@/components/ui/AnimatedSection'
import PageTransition from '@/components/ui/PageTransition'

export default function AboutUs() {
  return (
    <PageTransition>
      <Navbar />
      <PageHero
        title="About Us"
        subtitle="We are a team of passionate engineers, designers, and innovators building digital solutions that matter."
        breadcrumb="About Us"
      />

      {/* ── STORY ─────────────────────────────────────────────── */}
      <section className="bg-dark-base py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection>
            <div className="card-dark p-8 border-l-4 border-teal-400/50">
              <p className="text-slate-300 leading-relaxed text-lg mb-5">
                At Arjava, we develop software and mobile product engineering services for businesses,
                educational and financial institutions, healthcare and government organisations to help
                them achieve their valued objectives and targets.
              </p>
              <p className="text-slate-400 leading-relaxed mb-5">
                Our goal is to create value-added and cost-effective software solutions tailored to
                our customers' specific requirements — helping them increase efficiency and productivity.
              </p>
              <p className="text-slate-400 leading-relaxed">
                We offer a full set of software development services supporting you through the entire
                project lifecycle from idea to release and post-production. We can develop a solution
                from scratch or step in at any stage of your project.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section className="bg-dark-surface py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-10">
            <span className="section-tag">By the Numbers</span>
          </AnimatedSection>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: 10, label: 'Years Experience' },
              { value: 50, label: 'Projects Delivered' },
              { value: 20, label: 'Happy Clients' },
              { value: 5,  label: 'Countries Served' },
            ].map((s) => (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
                }}
              >
                <StatCounter value={s.value} label={s.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── VISION & MISSION ──────────────────────────────────── */}
      <section className="bg-dark-base py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">Our Foundation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Vision &amp; <span className="gradient-text">Mission</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Vision */}
            <AnimatedSection direction="left">
              <div className="glass p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center mb-5">
                  <img
                    src="/image/vision.png"
                    alt="Vision"
                    className="w-8 h-8 object-contain brightness-0 invert"
                  />
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
                  <img
                    src="/image/mission.png"
                    alt="Mission"
                    className="w-8 h-8 object-contain brightness-0 invert"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                <p className="text-slate-400 leading-relaxed">
                  Full Stack IT Solutions and services, IoT Solutions and Services, Product
                  Development — delivered with precision and passion for every client we serve.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  )
}
