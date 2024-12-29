import { createContext, useContext, useState, ReactNode } from 'react';
import LegalModal from '../components/LegalModal';

interface ModalContextType {
  openModal: (title: string, content: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalContent, setModalContent] = useState<{ title: string; content: string; isOpen: boolean }>({
    title: '',
    content: '',
    isOpen: false
  });

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content, isOpen: true });
  };

  const closeModal = () => {
    setModalContent(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <LegalModal
        isOpen={modalContent.isOpen}
        onClose={closeModal}
        title={modalContent.title}
        content={modalContent.content}
      />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
} 