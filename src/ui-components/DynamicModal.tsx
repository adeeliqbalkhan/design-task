import { useEffect } from 'react'
import { IconX } from '@tabler/icons-react'

interface DynamicModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  message: string
}

const DynamicModal = ({ 
  isOpen, 
  onClose, 
  title, 
  message
}: DynamicModalProps) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="rounded-lg shadow-xl max-w-md w-full p-6 relative animate-in fade-in zoom-in duration-200 border border-gray-600"
          style={{ backgroundColor: '#26262B' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button (Cross Icon) */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <IconX size={24} />
          </button>

          {/* Title */}
          {title && (
            <h2 className="text-2xl font-bold text-white mb-4 pr-8">
              {title}
            </h2>
          )}

          {/* Message */}
          <p className="text-white text-base leading-relaxed px-2 py-2 min-h-[60px] flex items-center">
            {message}
          </p>
        </div>
      </div>
    </>
  )
}

export default DynamicModal

