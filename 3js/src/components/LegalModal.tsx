import { motion, AnimatePresence } from 'framer-motion';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function LegalModal({ isOpen, onClose, title, content }: LegalModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-[90vw] md:w-full md:max-w-2xl max-h-[90vh] overflow-hidden"
          >
            <div className="relative bg-black/90 border border-[#00ff00]/30 rounded-lg p-4 md:p-6 text-gray-300">
              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#00ff00]" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#00ff00]" />
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6 sticky top-0 bg-black/90 py-2 z-10">
                <h3 className="text-[#00ff00] font-mono text-lg md:text-xl flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-[#00ff00] rounded-full animate-pulse" />
                  {title}
                </h3>
                <button
                  onClick={onClose}
                  className="text-[#00ff00] hover:text-[#00ff00]/80 transition-colors text-2xl leading-none px-2"
                >
                  <span className="sr-only">Close</span>
                  ×
                </button>
              </div>
              
              {/* Content */}
              <div className="prose prose-invert max-w-none overflow-y-auto scrollbar-hide" style={{ maxHeight: 'calc(90vh - 180px)' }}>
                <div className="bg-black/50 p-4 rounded-lg border border-[#00ff00]/10 text-sm md:text-base">
                  {content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 last:mb-0 text-gray-400">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* Footer */}
              <div className="mt-6 flex justify-end sticky bottom-0 bg-black/90 py-2 z-10">
                <button
                  onClick={onClose}
                  className="bg-[#00ff00]/10 hover:bg-[#00ff00]/20 text-[#00ff00] px-4 py-2 rounded-md border border-[#00ff00]/30 transition-colors duration-300 text-sm"
                >
                  Close Terminal
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 