import { useState } from 'react';

interface ModalState {
  isOpen: boolean;
  toggle: () => void;
}

export const useModal = (): ModalState => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggle };
};
