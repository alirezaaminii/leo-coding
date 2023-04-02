import { useEffect } from 'react';

export const useEscapeKeyPress = (callback) => {
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === 'Escape') {
        callback();
      }
    }

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [callback]);
}