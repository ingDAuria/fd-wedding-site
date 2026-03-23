import { useInView as useFramerInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

/**
 * ==================== CUSTOM HOOKS ====================
 */

/**
 * Hook per gestire la posizione dello scroll
 * @returns {number} Posizione dello scroll in pixel
 */
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

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
 * Hook per parallax effect basato su scroll
 * @param {number} speed - Velocità del parallax (0.5 è consigliato)
 * @returns {Object} Proprietà di stile per transform
 */
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { y: offset };
};

/**
 * ==================== TRANSIZIONI PREDEFINITE ====================
 */

export const transitions = {
  smooth: { duration: 0.6, ease: 'easeInOut' },
  quick: { duration: 0.3, ease: 'easeOut' },
  slow: { duration: 1.2, ease: 'easeInOut' },
  verySlow: { duration: 2, ease: 'easeInOut' },
  spring: { type: 'spring', stiffness: 100, damping: 15 },
  bouncy: { type: 'spring', stiffness: 300, damping: 10 },
  elastic: { type: 'spring', stiffness: 200, damping: 5 },
  gentle: { type: 'spring', stiffness: 50, damping: 25 },
};

/**
 * ==================== VARIANTI DI ANIMAZIONE ====================
 */

export const animationVariants = {
  /**
   * FADE ANIMATIONS
   */
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { oppacity: 1, transition: transitions.smooth }
  },

  fadeOut: {
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: transitions.smooth }
  },

  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: transitions.smooth
    }
  },
  
  fadeInDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: transitions.smooth
    }
  },
  
  fadeInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: transitions.smooth
    }
  },
  
  fadeInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: transitions.smooth
    }
  },

  /**
   * SCALE ANIMATIONS
   */
  
  fadeInScale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: transitions.smooth
    }
  },

  scaleIn: {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: transitions.spring
    }
  },

  scaleUp: {
    hidden: { scale: 0.95 },
    visible: {
      scale: 1,
      transition: transitions.smooth
    }
  },

  pulse: {
    visible: {
      scale: [1, 1.05, 1],
      transition: { 
        duration: 2, 
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  },

  /**
   * SLIDE ANIMATIONS
   */

  slideInLeft: {
    hidden: { x: '-100vw' },
    visible: { 
      x: 0,
      transition: transitions.spring
    }
  },
  
  slideInRight: {
    hidden: { x: '100vw' },
    visible: { 
      x: 0,
      transition: transitions.spring
    }
  },

  slideInUp: {
    hidden: { y: '100vh' },
    visible: {
      y: 0,
      transition: transitions.spring
    }
  },

  slideInDown: {
    hidden: { y: '-100vh' },
    visible: {
      y: 0,
      transition: transitions.spring
    }
  },

  slideOutLeft: {
    visible: { x: 0 },
    hidden: {
      x: '-100vw',
      transition: transitions.spring
    }
  },

  slideOutRight: {
    visible: { x: 0 },
    hidden: {
      x: '100vw',
      transition: transitions.spring
    }
  },

  /**
   * BOUNCE ANIMATIONS
   */

  bounce: {
    hidden: { y: -20 },
    visible: {
      y: [0, -20, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  },

  bounceIn: {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: transitions.bouncy
    }
  },

  /**
   * ROTATE ANIMATIONS
   */

  rotateIn: {
    hidden: { opacity: 0, rotate: -180 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: transitions.smooth
    }
  },

  spin: {
    visible: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  },

  gentle360: {
    visible: {
      rotate: 360,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  },

  /**
   * FLIP ANIMATIONS
   */

  flipInX: {
    hidden: { rotateX: 90, opacity: 0 },
    visible: {
      rotateX: 0,
      opacity: 1,
      transition: transitions.smooth
    }
  },

  flipInY: {
    hidden: { rotateY: 90, opacity: 0 },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: transitions.smooth
    }
  },

  /**
   * BLUR & FILTER ANIMATIONS
   */

  blurIn: {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: transitions.smooth
    }
  },

  /**
   * CONTAINER ANIMATIONS (per stagger effects)
   */

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

  staggerContainerFast: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  },

  staggerContainerSlow: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  },

  /**
   * ITEM ANIMATIONS (per uso dentro stagger containers)
   */

  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.smooth
    }
  },

  /**
   * HOVER ANIMATIONS
   */

  hoverScale: {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: transitions.quick },
    tap: { scale: 0.95 }
  },

  hoverUp: {
    initial: { y: 0 },
    hover: { y: -10, transition: transitions.quick }
  },

  hoverGlow: {
    initial: { boxShadow: '0px 0px 0px rgba(0,0,0,0)' },
    hover: { boxShadow: '0px 10px 30px rgba(0,0,0,0.2)', transition: transitions.quick }
  },

  /**
   * COMBINED ANIMATIONS
   */

  expandInUp: {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: transitions.smooth
    }
  },

  expandInDown: {
    hidden: { opacity: 0, y: -40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: transitions.smooth
    }
  },

  expandIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: transitions.smooth
    }
  },

  /**
   * SPECIAL ANIMATIONS
   */

  shimmer: {
    visible: {
      backgroundPosition: ['200% 0', '-200% 0'],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  },

  float: {
    visible: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  },

  sway: {
    visible: {
      rotate: [-2, 2, -2],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  },

  waveHand: {
    visible: {
      rotate: [0, -10, 0],
      transformOrigin: 'right bottom',
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    }
  }
};

/**
 * ==================== ANIMATION PRESETS ====================
 * Combinazioni pronte all'uso per scopi comuni
 */

export const animationPresets = {
  /**
   * Animazione hero section
   */
  heroTitle: {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: 'easeOut' }
    }
  },

  heroSubtitle: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.2, ease: 'easeOut' }
    }
  },

  heroCTA: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' }
    }
  },

  /**
   * Card animations
   */
  cardEnter: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.smooth
    }
  },

  cardHover: {
    hover: {
      y: -8,
      boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.15)',
      transition: transitions.quick
    }
  },

  /**
   * List animations
   */
  listContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  },

  listItem: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: transitions.smooth
    }
  }
};
