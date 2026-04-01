import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageCover from '@/components/ui/PageCover'
import ServiceCard from '@/components/ui/ServiceCard'
import { cn } from '@/lib/utils'

/* ─── Services data ──────────────────────────────────────────── */
const SERVICES = [
  {
    id: 'mob-app',
    image: '/image/mob-app-icon1.png',
    title: 'Mobile Application',
    shortText:
      'Arjava technology has profound providing mobile solutions for every smart device for all the prevalent operating systems. Our expertise in mobile development comes from years of experience. Our paramount focus is to create quality-rich innovative solutions.',
    expanded: (
      <>
        <b>Our mobile development services include:</b>
        <ul className="list-disc ml-5 mt-1 space-y-1">
          <li>iPhone/iPad/iOS Application Development</li>
          <li>Android Application Development</li>
          <li>BlackBerry Application Development</li>
          <li>Windows Phone Application Development</li>
          <li>Rich Mobile Web Application Development</li>
        </ul>
      </>
    ),
  },
  {
    id: 'uxui',
    image: '/image/uxui-icon1.png',
    title: 'UX/UI Design',
    shortText:
      "UI (User Interface) and UX (User Experience) are two essential elements in the virtual world. Unless the UI and UX are up to the mark, it's not possible to reach the audience. When you have the best UI/UX, they can elevate your",
    expanded: (
      <>
        business even in offline situations. Basically, the UI/UX design is a process of designing
        visual and functional aspects of a product. It is necessary for both hardware or software
        products.
      </>
    ),
  },
  {
    id: 'soft-dev',
    image: '/image/web-app-icon2.png',
    title: 'Software Development',
    shortText:
      'Software development provides a series of steps for programmers to create computer programs. This process makes up the phases in the software development life cycle. Understanding the software development method offers vast',
    expanded: <>opportunities in the IT industry.</>,
  },
  {
    id: 'web-dev',
    image: '/image/web-dev-icon1.png',
    title: 'Web Application',
    shortText:
      'Web Development is one of the core services of Arjava. We specialize in engineering and migration to unique, secure, comprehensive tailor-made',
    expanded: (
      <>
        web solutions with modern design and user experience. We fundamentally change the way
        business is delivered.
        <br /><br />
        <b>We provide a full cycle of custom web development services including:</b>
        <ul className="list-disc ml-5 mt-1 space-y-1">
          <li>Generation/brainstorming of web solution vision and requirements</li>
          <li>System architecture, security, web and user experience design</li>
          <li>Prototyping, UI/UX audit, responsive design implementation</li>
          <li>Automated front-end testing, QA under the most popular platforms and browsers</li>
          <li>Migration from desktop to cloud-native web applications</li>
          <li>3rd level maintenance, integration with API, cloud architecture and hosting</li>
        </ul>
      </>
    ),
  },
  {
    id: 'pro-maint',
    image: '/image/pro-main-icon1.png',
    title: 'Product Maintenance',
    shortText:
      'The new technologies driving up complexities of software products, constant evolution in the realm of product maintenance is inevitable.',
    expanded: (
      <>
        It is pivotal to minimize failures and adequately maintain software products to ensure
        consistency in their performance. Additionally, it is crucial to address that CIO's are often
        burdened with maintaining and monitoring mission-critical applications while simultaneously
        reducing costs.
      </>
    ),
  },
  {
    id: 'seo',
    image: '/image/seo-icon1.png',
    title: 'SEO',
    shortText:
      'We integrate a new web product into your digital infrastructure, test it in the real environment and use performance insights for future optimization.',
  },
]

/* ─── Development Process Steps ─────────────────────────────── */
const DEV_STEPS = ['Plan', 'Design', 'Development', 'Test', 'Deploy', 'Support']

export default function OurServices() {
  const [activeStep, setActiveStep] = useState('Plan')

  return (
    <>
      <Navbar />
      <PageCover title="Our Services" />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Intro Text */}
        <p className="text-[#4B4B4B] leading-relaxed mb-8">
          At Arjava, we help enterprises expand their businesses by custom application development,
          Business Intelligence, IT services, testing and mobile application development and Cloud
          solutions and services that are capable of performing across several platforms and
          infrastructures.
          <br />
          <br />
          We have the expertise to provide your organization the enterprise analytics services that you
          need. We bring out the Business Intelligence that provides meaningful insights that enable
          decision making based on real-time data. We deliver cutting edge technology solutions
          customized as per your needs. We work with you to provide end-to-end services to maximize
          your ROI as you transform your IT environment to move to Cloud Computing.
          <br />
          <br />
          Our core value revolves around being a well-respected technology company focused on
          delivering best in class innovative solutions to its customers and partners.
        </p>

        {/* Service Cards — using image icons from original services page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((svc) => (
            <ServiceCard
              key={svc.id}
              icon={
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-16 h-16 object-contain"
                />
              }
              title={svc.title}
              shortText={svc.shortText}
              expandedContent={svc.expanded}
            />
          ))}
        </div>

        {/* Development Process */}
        <h1 className="text-3xl font-medium text-brand text-center mb-6">Development Process</h1>

        {/* Step tabs */}
        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <div className="flex flex-wrap justify-around gap-2">
            {DEV_STEPS.map((step) => (
              <button
                key={step}
                onClick={() => setActiveStep(step)}
                className={cn(
                  'px-5 py-2 rounded-full font-medium text-sm transition-all',
                  activeStep === step
                    ? 'bg-brand text-white'
                    : 'bg-white border border-gray-300 text-[#4B4B4B] hover:bg-brand hover:text-white',
                )}
              >
                {step}
              </button>
            ))}
          </div>
        </div>

        {/* Active step description */}
        <div className="text-center text-[#4B4B4B] py-4">
          <p className="text-lg font-medium text-brand">{activeStep}</p>
          <p className="mt-2 text-sm">
            {activeStep === 'Plan' &&
              'We start by understanding your requirements, goals, and business objectives to create a comprehensive project plan.'}
            {activeStep === 'Design' &&
              'Our designers craft intuitive UI/UX prototypes that align with your brand identity and user expectations.'}
            {activeStep === 'Development' &&
              'Our engineers build robust, scalable solutions using modern technologies and best practices.'}
            {activeStep === 'Test' &&
              'Rigorous testing ensures your product is bug-free, secure, and performs optimally across all platforms.'}
            {activeStep === 'Deploy' &&
              'We handle smooth deployment to your chosen infrastructure with zero-downtime release strategies.'}
            {activeStep === 'Support' &&
              'Our team provides ongoing maintenance, updates, and 24/7 support to keep your product running perfectly.'}
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}
