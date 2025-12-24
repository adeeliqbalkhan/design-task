import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import musiciansLike from '../assets/musiciansLike.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'
import setappLogo from '../assets/setapp-logo.svg.svg'
import { testimonials } from '../data/testimonials'
import DynamicModal from '../ui-components/DynamicModal'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'facebook':
        return facebook
      case 'twitter':
        return twitter
      case 'instagram':
        return instagram
      case 'youtube':
        return youtube
      default:
        return twitter
    }
  }

  return (
    <section className="w-full relative">
      {/* Blended Background Container */}
      <div 
        className="w-full relative"
        style={{
          background: 'linear-gradient(to bottom, #26262B 0%, #26262B 50%, #FFFFFF 50%, #FFFFFF 100%)'
        }}
      >
        {/* Musicians Like SVG - Upper portion (dark background) */}
        <div className="w-full flex justify-center px-4 sm:px-6 md:px-12 pb-6 sm:pb-8 md:pb-12 pt-6 sm:pt-8">
          <img src={musiciansLike} alt="Musicians Like" className="w-full max-w-full" />
        </div>

        {/* Testimonials Carousel Section - Lower half (white background) */}
        <div className="w-full py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Left - Setapp in your words */}
            <div className="flex-1 w-full lg:w-auto">
              <h2 className="text-black text-left text-2xl sm:text-3xl md:text-4xl" style={{ fontWeight: 600, lineHeight: '1.3' }}>
                Setapp in your words.
              </h2>
            </div>
            
            {/* Center - What you say about how Setapp powers you up */}
            <div className="flex-1 flex justify-start lg:justify-center w-full lg:w-auto">
              <p className="text-left text-sm sm:text-base md:text-lg" style={{ fontWeight: 400, color: '#26262B' }}>
                What you say about how Setapp<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>powers you up.
              </p>
            </div>
            
            {/* Right - Social Media Icons */}
            <div className="flex-1 flex justify-start lg:justify-end w-full lg:w-auto">
              <div className="flex items-center gap-2 sm:gap-3">
                <div 
                  onClick={() => setIsModalOpen(true)}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded flex items-center justify-center cursor-pointer hover:opacity-80"
                >
                  <img src={facebook} alt="Facebook" className="w-full h-full" />
                </div>
                <div 
                  onClick={() => setIsModalOpen(true)}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded flex items-center justify-center cursor-pointer hover:opacity-80"
                >
                  <img src={twitter} alt="Twitter" className="w-full h-full" />
                </div>
                <div 
                  onClick={() => setIsModalOpen(true)}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded flex items-center justify-center cursor-pointer hover:opacity-80"
                >
                  <img src={instagram} alt="Instagram" className="w-full h-full" />
                </div>
                <div 
                  onClick={() => setIsModalOpen(true)}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded flex items-center justify-center cursor-pointer hover:opacity-80"
                >
                  <img src={youtube} alt="YouTube" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Swiper Carousel */}
          <div className="relative mt-8 sm:mt-12 md:mt-16">
            <div className="absolute -top-10 sm:-top-12 md:-top-14 right-0 z-10 flex items-center gap-2">
              <button 
                className="swiper-button-prev-custom w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <IconChevronLeft size={20} className="text-gray-700 sm:w-6 sm:h-6" />
              </button>
              <button 
                className="swiper-button-next-custom w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <IconChevronRight size={20} className="text-gray-700 sm:w-6 sm:h-6" />
              </button>
            </div>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              autoHeight={false}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{
                el: '.swiper-pagination-custom',
                clickable: true,
                dynamicBullets: false,
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="h-auto">
                  <div 
                    className="rounded-lg overflow-hidden shadow-lg flex flex-col w-full max-w-[380px] mx-auto"
                    style={{ minHeight: '300px', height: 'auto' }}
                  >
                    <div 
                      className="text-white p-4 sm:p-6 rounded-t-lg flex-1 flex items-center justify-center min-h-[200px]"
                      style={{ backgroundColor: testimonial.cardColor }}
                    >
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl" style={{ fontWeight: 500, lineHeight: '1.4', textAlign: 'left' }}>
                        {testimonial.quote}
                      </p>
                    </div>
                    
                    <div className="bg-[#F5F5F5] p-4 sm:p-6 rounded-b-lg flex-shrink-0">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-black mb-1 text-sm sm:text-base">
                            {testimonial.author}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600">
                            {testimonial.handle}
                          </p>
                        </div>
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded flex items-center justify-center flex-shrink-0">
                          <img 
                            src={getSocialIcon(testimonial.socialIcon)} 
                            alt={testimonial.socialIcon} 
                            className="w-full h-full" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-pagination-custom mt-6 sm:mt-8" style={{ minHeight: '20px' }}></div>
            
            <hr className="w-full border-t border-black/30 mt-6 sm:mt-8" />
          </div>
        </div>
        </div>
      </div>

      {/* Superpowers CTA Section */}
      <div 
        className="w-full relative"
        style={{
          background: 'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 50%, #1F1F23 50%, #1F1F23 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-6 sm:pt-8 md:pt-12 pb-12 sm:pb-16 md:pb-24">
          <div 
            className="bg-[#F5F5F5] rounded-2xl p-6 sm:p-8 md:p-12"
          >
            <div className="flex flex-col items-start gap-6 sm:gap-8">
              
                <div className="flex justify-start">
                  <img src={setappLogo} alt="Setapp Logo" className="w-16 h-auto sm:w-20" />
                </div>
                
              
                <div className="text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
                    Superpowers starting $9.99/month.<br />
                    Free for 7 days.
                  </h3>
                </div>
                
               
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors text-sm sm:text-base w-full sm:w-auto"
                  >
                    Get started now
                  </button>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-800 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base w-full sm:w-auto"
                  >
                    More about Setapp
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Modal */}
      <DynamicModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="This feature is coming soon"
      />
    </section>
  )
}

export default Testimonials

