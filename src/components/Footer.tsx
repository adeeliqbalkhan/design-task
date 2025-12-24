import { useState } from 'react'
import { IconArrowRight, IconChevronDown } from '@tabler/icons-react'
import facebook from '../assets/facebook2.svg'
import twitter from '../assets/twitter2.svg'
import instagram from '../assets/instagram2.svg'
import youtube from '../assets/youtube2.svg'
import headerLogo from '../assets/Header-Logo.svg'
import DynamicModal from '../ui-components/DynamicModal'

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <footer className="w-full" style={{ backgroundColor: '#26262B' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Logo and Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <img src={headerLogo} alt="Setapp Logo" className="w-4 h-6 sm:w-5 sm:h-8" />
              <div className="text-white text-xl sm:text-2xl font-medium">SETAPP</div>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Updates from our team, written with love <span style={{ color: '#FF6B6B' }}>❤️</span>
            </p>
            <div className="flex w-full max-w-full sm:max-w-[440px]" style={{ height: '50.23px' }}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 bg-gray-800 text-gray-400 rounded-l-lg border border-gray-700 focus:outline-none focus:border-gray-600 text-sm sm:text-base"
                style={{ height: '50.23px' }}
              />
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white rounded-r-lg flex items-center justify-center hover:bg-gray-100 transition-colors border-t border-r border-b border-gray-700 flex-shrink-0"
                style={{ width: '50.23px', height: '50.23px' }}
              >
                <IconArrowRight size={18} className="text-black sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Column 1 */}
            <div>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Home</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">How it Works</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">All Apps</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Pricing</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Setapp for Teams</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Blog</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Podcast</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Download</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Support</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Education Discount</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Family Plan</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">For Developers</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Gift Cards</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Redeem Code or Card</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Setapp Reviews</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Affiliate Program</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Mac Developer Survey 2023</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Getting started with Setapp</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Remote access to other Mac</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Fix macOS Ventura problems</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Best productivity apps</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Best YouTube downloaders</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Uninstall apps</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Top row - DMCA, Copyright, Terms, Language, Social */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6">
              {/* Left side - DMCA badge and copyright */}
              <div className="flex flex-col gap-2 sm:gap-3 w-full lg:w-auto text-white">
                <div className="flex">
                  <div className="px-2 sm:px-3 py-1 sm:py-1.5 flex items-center justify-center" style={{ backgroundColor: '#969799' }}>
                    <span className="text-white text-[10px] sm:text-xs font-bold">DMCA</span>
                  </div>
                  <div className="px-2 sm:px-3 py-1 sm:py-1.5 flex items-center justify-center" style={{ backgroundColor: '#404547' }}>
                    <span className="text-white text-[10px] sm:text-xs font-bold">PROTECTED</span>
                  </div>
                </div>
                <div className="text-white text-[10px] sm:text-xs leading-relaxed">
                  ©2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
                </div>
                <div className="text-white text-xs sm:text-sm">
                  <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
                  <span className="mx-2">|</span>
                  <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                </div>
              </div>

              {/* Right side - Language selector and Social icons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full lg:w-auto">
                {/* Language selector */}
                <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                  <span>🇺🇸</span>
                  <span>English</span>
                  <IconChevronDown size={14} className="sm:w-4 sm:h-4" />
                </div>
                
                {/* Social Media Icons */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div 
                    onClick={() => setIsModalOpen(true)}
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <img src={facebook} alt="Facebook" className="w-full h-full" />
                  </div>
                  <div 
                    onClick={() => setIsModalOpen(true)}
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <img src={twitter} alt="Twitter" className="w-full h-full" />
                  </div>
                  <div 
                    onClick={() => setIsModalOpen(true)}
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <img src={instagram} alt="Instagram" className="w-full h-full" />
                  </div>
                  <div 
                    onClick={() => setIsModalOpen(true)}
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <img src={youtube} alt="YouTube" className="w-full h-full" />
                  </div>
                </div>
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
    </footer>
  )
}

export default Footer

