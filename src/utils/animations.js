import { useInView as useFramerInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

/**
 * Custom hook per intersection observer con framer-motion
 */
export const useInView = (options = {}) => {
  const ref = useRef(null);
  const isInView = useFramerInView(ref, {
    once: true,
    margin: '-100px',
    ...options,
  });

  return [ref, isInView];
};

/**
 * Hook per gestire lo scroll della pagina
 */
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};

/**
 * Varianti di animazione predefinite
 */
export const animationVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  },
  
  fadeInDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  },
  
  fadeInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  },
  
  fadeInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  },
  
  fadeInScale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  },
  
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  },
  
  slideInLeft: {
    hidden: { x: '-100vw' },
    visible: { 
      x: 0,
      transition: { type: 'spring', stiffness: 50, damping: 20 }
    }
  },
  
  slideInRight: {
    hidden: { x: '100vw' },
    visible: { 
      x: 0,
      transition: { type: 'spring', stiffness: 50, damping: 20 }
    }
  }
};

/**
 * Configurazioni di transizione comuni
 */
export const transitions = {
  smooth: { duration: 0.6, ease: 'easeInOut' },
  quick: { duration: 0.3, ease: 'easeOut' },
  slow: { duration: 1.2, ease: 'easeInOut' },
  spring: { type: 'spring', stiffness: 100, damping: 15 },
  bouncy: { type: 'spring', stiffness: 300, damping: 10 }
};
