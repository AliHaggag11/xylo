import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface VideoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoDialog({ isOpen, onClose }: VideoDialogProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Dialog */}
          <div className="fixed inset-0 overflow-y-auto z-50">
            <div className="min-h-full flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-5xl"
              >
                {/* Dialog content */}
                <div className="relative">
                  {/* Border gradient */}
                  <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-green-500/50 via-green-500/20 to-green-500/50" />

                  {/* Main content */}
                  <div className="relative bg-black/90 rounded-lg p-1">
                    {/* Video container */}
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                      {/* Grid overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,255,0,0.03)_1.5px,transparent_1.5px)] bg-[size:20px_20px]" />
                      
                      {/* Loading state or placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <div className="text-green-500/70">
                          <svg className="animate-spin h-8 w-8" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Video iframe */}
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/your-video-id?autoplay=1&rel=0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />

                      {/* Corner accents */}
                      {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((position, i) => (
                        <div key={i} className={`absolute ${position} w-8 h-8`}>
                          <div className={`absolute ${i < 2 ? 'top-0' : 'bottom-0'} ${i % 2 === 0 ? 'left-0' : 'right-0'} w-full h-[1px] bg-green-500/30`} />
                          <div className={`absolute ${i % 2 === 0 ? 'left-0' : 'right-0'} h-full w-[1px] bg-green-500/30`} />
                        </div>
                      ))}
                    </div>

                    {/* Close button */}
                    <button
                      onClick={onClose}
                      className="absolute -top-12 right-0 text-green-500/70 hover:text-green-500 transition-colors duration-200 group"
                    >
                      <span className="sr-only">Close</span>
                      <div className="relative">
                        <div className="absolute inset-0 bg-green-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <svg className="relative w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
} 