import { useState } from 'react'
import KeepYourMacClean from '../assets/KeepYourMacClean.svg'
import DynamicModal from '../ui-components/DynamicModal'

const Features = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <section className="w-full px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <hr className="w-full border-t border-#ffffff-500 mb-6 sm:mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-16 mt-8 sm:mt-12 md:mt-16 mb-12 sm:mb-16 md:mb-20 px-2 sm:px-4 md:px-8">
          <h2 className="text-white text-center md:text-left text-2xl sm:text-3xl md:text-4xl" style={{ fontWeight: 600 }}>
            What you get on Setapp
          </h2>
          <p className="text-white flex-1 text-center md:text-left text-sm sm:text-base md:text-lg" style={{ fontWeight: 400 }}>
            With a single monthly subscription at $9.99, you get 240+ apps for <br className="hidden sm:block" /> your Mac.
          </p>
        </div>

        {/* KeepYourMacClean SVG */}
        <div className="mt-6 sm:mt-8 flex justify-center px-2">
          <img src={KeepYourMacClean} alt="Keep Your Mac Clean" className="w-full max-w-full" />
        </div>

        {/* View all superpowers button */}
        <div className="mt-8 sm:mt-12 md:mt-16 flex justify-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
          >
            <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-4 sm:w-6 sm:h-5 md:w-7 md:h-6">
              <g clipPath="url(#clip0_1_277)">
                <path d="M15 2L24.688 10.5L15 19M2 10.606H24.316" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1_277">
                  <rect width="27" height="21" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span className="text-base sm:text-lg md:text-xl">View all superpowers</span>
          </button>
        </div>

        {/* Your Setapp journey section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-16 mt-8 sm:mt-12 md:mt-16 px-2 sm:px-4 md:px-8">
          <h2 className="text-white text-center md:text-left text-2xl sm:text-3xl md:text-4xl" style={{ fontWeight: 600 }}>
            Your Setapp journey.
          </h2>
          <p className="text-white flex-1 text-center md:text-left text-sm sm:text-base md:text-lg" style={{ fontWeight: 400 }}>
            Type in your task into Setapp search and get instant app recommendations.
          </p>
        </div>

        {/* Horizontal line */}
        <hr className="w-full border-t border-gray-500 mt-8 sm:mt-12 md:mt-16" />
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

export default Features

