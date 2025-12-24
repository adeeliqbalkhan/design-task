import { useState } from 'react'
import FloatingShape from './FloatingShape'
import workWithPics from '../assets/workWithPics.svg'
import vpnAddBlocker from '../assets/vpnAddBlocker.svg'
import boostTeamWork from '../assets/boostTeamWork.svg'
import staySecure from '../assets/staySecure.svg'
import cSvg from '../assets/c.svg'
import fixwifi from '../assets/fixwifi.svg.svg'
import planYourDay from '../assets/planYourDay.svg.svg'
import convertHeicToPdf from '../assets/convertHeicToPdf.svg.svg'
import manageYourMac from '../assets/manageYourMac.svg.svg'
import codeEasier from '../assets/codeEasier.svg.svg'
import Logo from '../assets/Logo.svg'
import AppleLogo from '../assets/apple.svg.svg'
import GoogleLogo from '../assets/google.svg.svg'
import DynamicModal from '../ui-components/DynamicModal'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const shapes = [
    // Left side shapes
    { svg: workWithPics, position: 'left-0 top-[10%] md:left-4 lg:left-8 xl:left-12', side: 'left' as const },
    { svg: vpnAddBlocker, position: 'left-[16%] top-[28%] md:left-24 lg:left-28 xl:left-32', side: 'left' as const },
    { svg: boostTeamWork, position: 'left-0 top-[47%] md:left-8 lg:left-12 xl:left-16', side: 'left' as const },
    { svg: staySecure, position: 'left-0 top-[55%] md:left-4 lg:left-8 xl:left-12', side: 'left' as const },
    { svg: cSvg, position: 'left-0 top-[27%] md:left-6 lg:left-10 xl:left-14', side: 'left' as const },
    // Right side shapes
    { svg: fixwifi, position: 'right-0 top-[12%] md:right-4 lg:right-8 xl:right-12', side: 'right' as const },
    { svg: planYourDay, position: 'right-[20%] top-[20%] md:right-28 lg:right-32 xl:right-36', side: 'right' as const },
    { svg: convertHeicToPdf, position: 'right-0 top-[35%] md:right-4 lg:right-8 xl:right-12', side: 'right' as const },
    { svg: manageYourMac, position: 'right-[6%] top-[53%] md:right-12 lg:right-16 xl:right-20', side: 'right' as const },
    { svg: codeEasier, position: 'right-[8%] top-[63%] md:right-16 lg:right-20 xl:right-24', side: 'right' as const },
  ]

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20 overflow-x-hidden">
      {/* Floating shapes */}
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={Logo} alt="Setapp Logo" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
        </div>

        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-white mb-4 sm:mb-6 leading-tight px-2 max-[931px]:text-black max-[931px]:bg-white max-[931px]:rounded-lg max-[931px]:px-4 max-[931px]:py-3">
          Dozens of apps.
          <br />
          One subscription.
          <br />
          $9.99
        </h1>

        {/* CTA Button and Logos */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 mt-6 sm:mt-8 px-4">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-black rounded-lg text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-colors whitespace-nowrap flex items-center justify-center w-full sm:w-auto px-6 sm:px-8" 
            style={{ height: '48px', maxWidth: '209.9px' }}
          >
            Try free for 7 days
          </button>
          
          {/* Logos */}
          <div className="flex items-center gap-3">
            <div 
              onClick={() => setIsModalOpen(true)}
              className="bg-white flex items-center justify-center p-1.5 cursor-pointer hover:opacity-80 transition-opacity" 
              style={{ width: '48px', height: '48px', borderRadius: '6px' }}
            >
              <img src={AppleLogo} alt="Apple" className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div 
              onClick={() => setIsModalOpen(true)}
              className="bg-white flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity" 
              style={{ width: '48px', height: '48px', borderRadius: '6px' }}
            >
              <img src={GoogleLogo} alt="Google" className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-white text-sm sm:text-base md:text-lg mt-8 sm:mt-12 px-4">
          Power up your workflow with Setapp, a<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>smart way to get apps.
        </p>
      </div>

      {/* Dynamic Modal */}
      <DynamicModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="This feature is coming soon"
      />
    </div>
  )
}

export default Hero

