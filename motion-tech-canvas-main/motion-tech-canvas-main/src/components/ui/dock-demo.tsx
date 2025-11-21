import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

const data = [
  {
    title: 'Home',
    icon: (
      <HomeIcon className='h-full w-full text-indigo-100/90' />
    ),
    href: '#',
  },
  {
    title: 'Products',
    icon: (
      <Package className='h-full w-full text-indigo-100/90' />
    ),
    href: '#',
  },
  {
    title: 'Components',
    icon: (
      <Component className='h-full w-full text-indigo-100/90' />
    ),
    href: '#',
  },
  {
    title: 'Activity',
    icon: (
      <Activity className='h-full w-full text-indigo-100/90' />
    ),
    href: '#',
  },
  {
    title: 'Change Log',
    icon: (
      <ScrollText className='h-full w-full text-indigo-100/90' />
    ),
    href: '#',
  },
  {
    title: 'Email',
    icon: (
      <Mail className='h-full w-full text-indigo-100/90' />
    ),
    href: '#',
  },
  {
    title: 'Theme',
    icon: (
      <SunMoon className='h-full w-full text-indigo-100/90' />
    ),
    href: '#',
  },
];

export function AppleStyleDock() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Mostrar el dock cuando se hace scroll hacia arriba o se está en la parte superior
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="fixed top-2.5 left-0 right-0 flex justify-center z-50">
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ 
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <Dock className='items-center justify-center pb-1 bg-indigo-950/40 backdrop-blur-md shadow-lg'>
            {data.map((item, idx) => (
              <DockItem
                key={idx}
                className='aspect-square rounded-full bg-indigo-900/40 hover:bg-indigo-800/60 transition-all duration-500 flex items-center justify-center'
              >
                <DockLabel>{item.title}</DockLabel>
                <DockIcon className="flex items-center justify-center">{item.icon}</DockIcon>
              </DockItem>
            ))}
          </Dock>
        </motion.div>
      )}
    </div>
  );
} 