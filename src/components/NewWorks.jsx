import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const NewWorks = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      text: 'Arjava delivered an exceptional mobile app that exceeded our expectations. Their attention to detail and technical expertise is outstanding.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateCorp',
      text: 'Working with Arjava was a game-changer for our business. They transformed our ideas into a powerful web application.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Davis',
      role: 'Founder, HealthTech',
      text: 'The team at Arjava is professional, responsive, and delivers high-quality solutions on time. Highly recommended!',
      rating: 5,
      avatar: 'ED'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 mb-6">
            ✨ Testimonials
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-80 flex flex-col">
                {/* Header with avatar and info */}
                <div className="p-6 pb-4">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-white font-bold">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill text-yellow-400 text-sm"></i>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Quote section */}
                <div className="px-6 pb-6 flex-1 flex items-center">
                  <div className="relative">
                    <i className="bi bi-quote text-4xl text-blue-200 absolute -top-2 -left-1"></i>
                    <p className="text-gray-700 leading-relaxed pl-8">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
                
                {/* Bottom accent */}
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// Custom styles for swiper pagination
const styles = `
  .testimonials-swiper .swiper-pagination-bullet {
    background: #e5e7eb;
    opacity: 1;
  }
  .testimonials-swiper .swiper-pagination-bullet-active {
    background: linear-gradient(to right, #3b82f6, #8b5cf6);
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default NewWorks;