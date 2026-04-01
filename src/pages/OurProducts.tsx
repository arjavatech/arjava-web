import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import AnimatedSection from '@/components/ui/AnimatedSection'
import PageTransition from '@/components/ui/PageTransition'

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
        className="max-w-full h-auto rounded-2xl drop-shadow-[0_0_40px_rgba(45,212,191,0.18)]"
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
      <div className="card-dark p-7 w-full border-t-2 border-teal-400/40">
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
    <div className="flex flex-col lg:flex-row gap-10 items-center mb-16">
      {isLeft ? (
        <>{imgEl}{cardEl}</>
      ) : (
        <div className="flex flex-col lg:flex-row-reverse w-full gap-10 items-center">
          {imgEl}
          {cardEl}
        </div>
      )}
    </div>
  )
}

export default function OurProducts() {
  return (
    <PageTransition>
      <Navbar />
      <PageHero
        title="Our Products"
        subtitle="Innovative B2B and B2C solutions built with the latest market trends and user-centric thinking."
        breadcrumb="Our Products"
      />

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <section className="bg-dark-base py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection>
            <div className="card-dark p-8 border-l-4 border-teal-400/50">
              <p className="text-slate-300 leading-relaxed text-lg mb-5">
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

      {/* ── PRODUCTS ──────────────────────────────────────────── */}
      <section className="bg-dark-surface py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <AnimatedSection className="text-center mb-14">
            <span className="section-tag">What We've Built</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Featured <span className="gradient-text">Products</span>
            </h2>
          </AnimatedSection>

          {PRODUCTS.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </PageTransition>
  )
}
