import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageCover from '@/components/ui/PageCover'

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
    subtitle: 'Sorting technique',
    features: [
      'A web application where you input an array and get the output with its visualisation.',
      'See comparisons and swap counts of every sorting technique to determine which is best for each scenario.',
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
      'Useful for anyone who needs reminders for medical checkups, medicine intake, doctor appointments and more.',
      'Store important information like emergency contacts, surgeries taken and prescriptions for future checkups.',
      'Developed in React Native and SQL.',
    ],
    imageLeft: false,
  },
]

function ProductRow({ product }: { product: Product }) {
  const imgEl = (
    <div className="w-full lg:w-1/2 flex justify-center">
      <img src={product.image} alt={product.alt} className="max-w-full h-auto rounded-lg" />
    </div>
  )

  const cardEl = (
    <div className="w-full lg:w-1/2 flex items-center">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 w-full">
        <h5 className="text-xl font-semibold text-brand text-center mb-1">{product.name}</h5>
        <p className="text-gray-400 text-sm text-center mb-4">{product.subtitle}</p>
        <ul className="list-disc ml-5 space-y-2 text-[#4B4B4B] text-sm">
          {product.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center mb-14">
      {product.imageLeft ? (
        <>
          {imgEl}
          {cardEl}
        </>
      ) : (
        <>
          {/* On mobile always image first, on desktop swap */}
          <div className="flex flex-col lg:flex-row-reverse w-full gap-8 items-center">
            {imgEl}
            {cardEl}
          </div>
        </>
      )}
    </div>
  )
}

export default function OurProducts() {
  return (
    <>
      <Navbar />
      <PageCover title="Our Products" />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Intro */}
        <p className="text-[#4B4B4B] leading-relaxed mb-10">
          Our creative Team of Software Product developers provides B2B and B2C solutions for
          customers and end-users. Being aware of the latest market trends as well as constantly
          communicating with our users – we go beyond traditional software development and create
          software products that precisely correspond with users' needs and help them get the most
          value of using them. We have an innovative approach based on extensive technology expertise,
          being responsible for full-cycle product development including market research and active
          product promotion. We develop products on different web and mobile platforms (iOS, Android,
          Windows, etc) and possess deep experience in creating diverse applications for mobile
          devices.
        </p>

        {/* Product Rows */}
        {PRODUCTS.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </div>

      <Footer />
    </>
  )
}
