import { useState } from 'react'
import HeaderLogo from '../assets/Header-Logo.svg'
import DynamicModal from '../ui-components/DynamicModal'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between backdrop-blur-sm" style={{ backgroundColor: '#26262B' }}>
        {/* Logo */}
        <div className="flex items-center">
          <img src={HeaderLogo} alt="Setapp Logo" className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>

        {/* Right side: Navigation + Actions */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-white text-sm">
            <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="hover:text-gray-300 transition-colors">How it works</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="hover:text-gray-300 transition-colors">All apps</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="hover:text-gray-300 transition-colors">Pricing</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="hover:text-gray-300 transition-colors">For Teams</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="hover:text-gray-300 transition-colors">Blog</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true) }} className="hover:text-gray-300 transition-colors">Podcast</a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden md:flex items-center gap-2 text-white">
            <span className="text-gray-500 mx-2">|</span>
            <span className="text-xl">🇺🇸</span>
          </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="hidden sm:block px-3 sm:px-4 py-1.5 sm:py-2 text-white rounded hover:bg-green-500/10 transition-colors text-xs sm:text-sm"
                >
                  Sign In
                </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-3 sm:px-4 py-1.5 sm:py-2 text-white border border-white rounded-md hover:bg-white/10 transition-colors text-xs sm:text-sm whitespace-nowrap mr-4"
          >
            Try free
          </button>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden ml-2 p-2 text-white hover:bg-white/10 rounded transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-[60px] left-0 right-0 z-40 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{ backgroundColor: '#26262B' }}
      >
        <nav className="flex flex-col px-4 py-6 space-y-4 border-t border-gray-700">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors py-2 text-base"
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setIsModalOpen(true) }}
          >
            How it works
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors py-2 text-base"
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setIsModalOpen(true) }}
          >
            All apps
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors py-2 text-base"
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setIsModalOpen(true) }}
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors py-2 text-base"
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setIsModalOpen(true) }}
          >
            For Teams
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors py-2 text-base"
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setIsModalOpen(true) }}
          >
            Blog
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors py-2 text-base"
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setIsModalOpen(true) }}
          >
            Podcast
          </a>
          <div className="pt-4 border-t border-gray-700">
            <button 
              onClick={() => {
                setIsModalOpen(true)
                setIsMenuOpen(false)
              }}
              className="w-full px-4 py-2 text-white rounded hover:bg-green-500/10 transition-colors text-sm mb-3"
            >
              Sign In
            </button>
            <div className="flex items-center justify-center gap-2 text-white mb-3">
              <span className="text-xl">🇺🇸</span>
            </div>
          </div>
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30 top-[60px]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Dynamic Modal */}
      <DynamicModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="This feature is coming soon"
      />
    </>
  )
}

export default Header

