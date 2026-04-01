import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageCover from '@/components/ui/PageCover'

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <PageCover title="About Us" />

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* About Text */}
        <p className="text-[#4B4B4B] leading-relaxed mb-8">
          At Arjava, we develop software and mobile product engineering services for businesses,
          educational and financial institutions, healthcare and government organizations to help them
          achieve their valued objectives and targets. Our goal is to create value-added and
          cost-effective software solutions tailored to our customer's specific requirements to help
          them increase their efficiency and productivity.
          <br />
          <br />
          Full set of software development services supporting you through the whole project lifecycle
          from idea to release and post-production. We can develop a solution from scratch or step in
          at any stage of your project.
          <br />
          <br />
          Your solution will be developed in accordance with industry standards and tried-and-true
          methodologies and will be delivered in time and with high quality.
        </p>

        {/* Vision */}
        <h1 className="text-3xl font-medium text-brand mb-4">Vision</h1>
        <div className="flex justify-center mb-8">
          <div
            className="w-full max-w-2xl bg-white border border-[rgba(75,75,75,0.25)] overflow-hidden rounded-xl flex items-stretch"
            style={{ minHeight: '140px' }}
          >
            <div
              className="bg-brand flex items-center justify-center flex-shrink-0"
              style={{
                width: '140px',
                borderRadius: '0 80px',
                boxShadow: '5px 0 4px rgba(0,0,0,0.25)',
              }}
            >
              <img src="/image/vision.png" alt="Vision Icon" className="w-20 h-14 object-contain" />
            </div>
            <div className="flex flex-col justify-center px-6 py-4">
              <p className="text-[#4B4B4B] text-lg">
                Propel technological innovation that empowers mankind.
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <h1 className="text-3xl font-medium text-brand mb-4">Mission</h1>
        <div className="flex justify-center mb-8">
          <div
            className="w-full max-w-2xl bg-white border border-[rgba(75,75,75,0.25)] overflow-hidden rounded-xl flex items-stretch"
            style={{ minHeight: '140px' }}
          >
            <div className="flex flex-col justify-center px-6 py-4 flex-1">
              <p className="text-[#4B4B4B] text-lg">
                Full Stack IT Solutions and services, IOT Solutions and Services, Product
                Development.
              </p>
            </div>
            <div
              className="bg-brand flex items-center justify-center flex-shrink-0"
              style={{
                width: '140px',
                borderRadius: '0 80px',
                boxShadow: '-5px 0 4px rgba(0,0,0,0.25)',
                transform: 'scaleX(-1)',
              }}
            >
              <img
                src="/image/mission.png"
                alt="Mission Icon"
                className="w-20 h-16 object-contain"
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>
          </div>
        </div>
      </div>

      <br />
      <Footer />
    </>
  )
}
