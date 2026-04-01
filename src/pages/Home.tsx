import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ServiceCard from '@/components/ui/ServiceCard'
import WorkModal, { type WorkItem } from '@/components/ui/WorkModal'
import { cn } from '@/lib/utils'

/* ─── Digital Services data ─────────────────────────────────── */
const SERVICES = [
  {
    id: 'mob-app',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" viewBox="0 0 16 16">
        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      </svg>
    ),
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" viewBox="0 0 16 16">
        <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z" />
      </svg>
    ),
    title: 'UX/UI Design',
    shortText:
      "UI (User Interface) and UX (User Experience) are two essential elements in the virtual world. Unless the UI and UX are up to the mark, it's not possible to reach the audience, perfectly. When you have the best UI/UX, they can elevate your",
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
      </svg>
    ),
    title: 'Software Development',
    shortText:
      'Software development provides a series of steps for programmers to create computer programs. This process makes up the phases in the software development life cycle. Understanding the software development method offers vast',
    expanded: <>opportunities in the IT industry.</>,
  },
  {
    id: 'web-app',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" viewBox="0 0 16 16">
        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
        <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
      </svg>
    ),
    title: 'Web Application',
    shortText:
      'Web Application is one of the core services of Arjava. We specialize in engineering and migration to unique, secure, comprehensive tailor-made',
    expanded: (
      <>
        web solutions with modern design and user experience. We fundamentally change the way
        business is delivered, providing solutions for a value-based customer-first approach.
        <br /><br />
        <b>We provide a full cycle of custom web development services including:</b>
        <ul className="list-disc ml-5 mt-1 space-y-1">
          <li>Generation/brainstorming of web solution vision and requirements</li>
          <li>System architecture, security, web and user experience design</li>
          <li>Prototyping, UI/UX audit, responsive design implementation, design systems development</li>
          <li>Automated front-end testing, QA under the most popular platforms and browsers</li>
          <li>Migration from desktop to cloud-native web applications</li>
          <li>3rd level maintenance, integration with API, cloud architecture and hosting</li>
        </ul>
      </>
    ),
  },
  {
    id: 'pro-maint',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
      </svg>
    ),
    title: 'Product Maintenance',
    shortText:
      'The new technologies driving up complexities of software products, constant evolution in the realm of product maintenance is inevitable.',
    expanded: (
      <>
        It is pivotal to minimize failures and adequately maintain software products to ensure
        consistency in their performance. Additionally, it is crucial to address that CIO's are often
        burdened with maintaining and monitoring mission-critical applications while simultaneously
        reducing costs. With adequate software maintenance services deployed throughout a product's
        lifecycle, businesses can maintain as well as upgrade existing products to ensure market and
        brand relevance, and in turn, retain customers more effectively.
      </>
    ),
  },
  {
    id: 'seo',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
    ),
    title: 'SEO',
    shortText:
      'We integrate a new web product into your digital infrastructure, test it in the real environment and use performance insights for future optimization.',
  },
]

/* ─── Our Works data ─────────────────────────────────────────── */
type WorkTab = 'mobapp' | 'uxui' | 'webapp' | 'website'

const WORK_TABS: { id: WorkTab; label: string }[] = [
  { id: 'mobapp', label: 'Mobile Application' },
  { id: 'uxui', label: 'UX/UI Design' },
  { id: 'webapp', label: 'Web Application' },
  { id: 'website', label: 'Website' },
]

const WORKS: Record<WorkTab, WorkItem[]> = {
  mobapp: [
    {
      id: 'findabed',
      image: '/image/find-bed-app.jpg',
      alt: 'Find a Bed App',
      title: 'Findabed',
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Findabed is a cross platform application available in web, Android and iOS showing available hospital beds nearby.</li>
          <li>It shows oxygen beds, ICU beds, Normal beds and Corona beds available in various hospitals.</li>
          <li>Several filters to limit search radius, filter beds and sort hospitals by name, distance or available bed count.</li>
          <li>Hospital phone numbers are listed for direct contact.</li>
          <li>Data is fetched from the Indian government website and shows when last refreshed.</li>
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
          <li>Sehatuka is a medicare application available on both Android and iOS.</li>
          <li>Useful for medical checkup notifications, medicine intake reminders, doctor appointments and more.</li>
          <li>Store important information like emergency contacts, surgeries and prescriptions.</li>
          <li>Developed in React Native and SQL.</li>
        </ul>
      ),
    },
    {
      id: 'solladal',
      image: '/image/solladal-app.jpg',
      alt: 'Solladal App',
    },
  ],
  uxui: [
    { id: 'arjava-web-design', image: '/image/arjava-web-design.jpg', alt: 'Arjava Web Design' },
    { id: 'grit-web-design', image: '/image/grit-web-design.jpg', alt: 'Grit Web Design' },
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
          <li>A web application where you input an array and get output with visualisation.</li>
          <li>See comparisons and swap counts of every sorting technique to determine the best scenario.</li>
          <li>Accepts integer, string, character, and float inputs with visualisation for random, reverse, nearly sorted, and duplicate arrays.</li>
          <li>Graphical representation of input and output arrays.</li>
          <li>View code, time and space complexity for every sorting technique.</li>
        </ul>
      ),
    },
    { id: 'mugavari', image: '/image/mugavari-web-app.jpg', alt: 'Mugavari Web App' },
    {
      id: 'webapp-soon',
      image: '',
      alt: 'Update Soon',
    },
  ],
  website: [
    { id: 'btk', image: '/image/btk-website.jpg', alt: 'BTK Website' },
    { id: 'h3', image: '/image/h3-website.jpg', alt: 'H3 Website' },
    { id: 'arjava-site', image: '/image/arjava-website.jpg', alt: 'Arjava Website' },
  ],
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function Home() {
  const [activeTab, setActiveTab] = useState<WorkTab>('mobapp')

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6">
          {/* Mockup image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/image/arjava logo laptop mockup.png"
              alt="Arjava Laptop Mockup"
              className="max-w-full h-auto"
            />
          </div>
          {/* Text + CTA */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-4 pt-6 md:pt-16">
            <h1 className="text-3xl md:text-4xl font-bold text-brand text-center md:text-left">
              Full Stack IT Solutions
            </h1>
            <p className="text-[#4B4B4B] text-center md:text-left leading-relaxed">
              At Arjava, we develop software and mobile product engineering services for businesses,
              educational and financial institutions, healthcare and government organizations to help
              them achieve their valued objectives and targets.
            </p>
            <div className="text-center md:text-left">
              <Link to="/contact">
                <button className="btn-proposal">Get a Proposal</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4 py-8 flex flex-col items-center gap-0">
        {/* Vision Box */}
        <div
          className="w-full max-w-2xl bg-white border border-[rgba(75,75,75,0.25)] overflow-hidden"
          style={{ borderRadius: '90px 90px 0 0' }}
        >
          <div className="flex items-stretch min-h-[160px]">
            <div
              className="bg-brand flex items-center justify-center flex-shrink-0"
              style={{
                width: '160px',
                borderRadius: '0 90px',
                transform: 'matrix(1,0,0,-1,0,0)',
                boxShadow: '5px 0 4px rgba(0,0,0,0.25)',
              }}
            >
              <img
                src="/image/vision.png"
                alt="Vision Icon"
                style={{ transform: 'matrix(1,0,0,-1,0,0)', width: '100px', height: '65px' }}
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-4">
              <h5 className="text-2xl font-medium text-brand mb-2">Our Vision</h5>
              <p className="text-[#4B4B4B]">
                Propel technological innovation that empowers mankind.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Box */}
        <div
          className="w-full max-w-2xl bg-white border border-[rgba(75,75,75,0.25)] overflow-hidden"
          style={{ borderRadius: '0 0 90px 90px' }}
        >
          <div className="flex items-stretch min-h-[160px]">
            <div className="flex flex-col justify-center px-6 py-4 flex-1">
              <h5 className="text-2xl font-medium text-brand mb-2">Our Mission</h5>
              <p className="text-[#4B4B4B]">
                Full Stack IT Solutions and services, IOT Solutions and Services, Product Development.
              </p>
            </div>
            <div
              className="bg-brand flex items-center justify-center flex-shrink-0"
              style={{
                width: '160px',
                borderRadius: '0 90px',
                transform: 'matrix(1,0,0,-1,0,0)',
                boxShadow: '-5px 0 4px rgba(0,0,0,0.25)',
              }}
            >
              <img
                src="/image/mission.png"
                alt="Mission Icon"
                style={{ transform: 'matrix(1,0,0,-1,0,0)', width: '90px', height: '80px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Services */}
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-medium text-center text-brand mb-8">Digital Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc) => (
            <ServiceCard
              key={svc.id}
              icon={svc.icon}
              title={svc.title}
              shortText={svc.shortText}
              expandedContent={svc.expanded}
            />
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className="container mx-auto px-4 pt-8 pb-4">
        <h1 className="text-3xl font-medium text-center text-brand mb-6">Development Process</h1>
        <div className="flex justify-center">
          <img
            src="/image/Development process.png"
            alt="Development Process"
            className="w-full max-w-xl h-auto"
          />
        </div>
      </section>

      {/* Our Works */}
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-medium text-center text-brand mb-6">Our Works</h1>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {WORK_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'works-tab-btn',
                activeTab === tab.id && 'active',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {WORKS[activeTab].map((item) =>
            item.image ? (
              item.description ? (
                <WorkModal key={item.id} item={item} />
              ) : (
                <div key={item.id} className="overflow-hidden rounded-lg">
                  <img src={item.image} alt={item.alt} className="w-full h-auto object-cover" />
                </div>
              )
            ) : (
              /* "Update Soon" placeholder */
              <div
                key={item.id}
                className="h-[164px] rounded-[20px] flex items-center justify-center"
                style={{ background: 'rgba(0,181,72,0.75)', color: '#fff' }}
              >
                <h5 className="text-lg font-medium">Update Soon</h5>
              </div>
            ),
          )}
        </div>
      </section>

      <br />
      <Footer />
    </>
  )
}
