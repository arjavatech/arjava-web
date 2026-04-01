import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import StatCounter from '@/components/ui/StatCounter'
import AnimatedSection from '@/components/ui/AnimatedSection'
import PageTransition from '@/components/ui/PageTransition'

/* ─── Board members data ─────────────────────────────────────── */
const BOARD_MEMBERS = [
  {
    id: 'palani',
    name: 'Palani Vairavan',
    role: 'Founder',
    photo: '/image/team-palani.jpeg',
  },
  {
    id: 'saravanan',
    name: 'Saravanan Arumugam',
    role: 'CEO / MD',
    photo: '/image/team-saravanan.png',
  },
  {
    id: 'pitchai',
    name: 'Pitchaimani Rajaram',
    role: 'CEO / SSE',
    photo: '/image/team-pitchai.png',
  },
  {
    id: 'amrish',
    name: 'Amrish KS',
    role: 'Mentor',
    photo: '/image/team-amrish.png',
  },
]

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

      {/* ── LEADERSHIP TEAM ───────────────────────────────────── */}
      <section className="bg-dark-base py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="section-tag">Our People</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              The People <span className="gradient-text">Behind Arjava</span>
            </h2>
            <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
              The visionaries and builders who founded Arjava and continue to drive its growth.
            </p>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-wrap justify-center gap-6"
          >
            {BOARD_MEMBERS.map((member) => (
              <motion.div
                key={member.id}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="card-dark p-7 flex flex-col items-center text-center w-full sm:w-56 lg:w-52 xl:w-56 cursor-default"
              >
                {/* Avatar */}
                <div className="relative mb-5">
                  <div className="w-28 h-28 rounded-full ring-2 ring-teal-400/30 ring-offset-2 ring-offset-[#0D1117] overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Subtle teal glow behind avatar */}
                  <div className="absolute inset-0 rounded-full bg-teal-400/10 blur-xl -z-10 scale-110" />
                </div>

                {/* Name */}
                <h3 className="text-white font-bold text-base leading-snug mb-1">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="gradient-text text-xs font-semibold uppercase tracking-wide">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── VISION & MISSION ──────────────────────────────────── */}
      <section className="bg-dark-surface py-16">
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
