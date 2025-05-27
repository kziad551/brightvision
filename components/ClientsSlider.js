'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function ClientsSlider({ clients }) {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId;
    let scrollAmount = 0;
    const scrollSpeed = 1;

    const animate = () => {
      if (!isPaused && slider && isMounted) {
        scrollAmount += scrollSpeed;
        
        // Reset when we've scrolled through one complete set
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
        }
        
        slider.scrollLeft = scrollAmount;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused, isMounted]);

  // Don't render animation on server
  if (!isMounted) {
    return (
      <div className="relative overflow-hidden">
        <div className="flex items-center gap-16 justify-center">
          {clients.slice(0, 5).map((client, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={client}
                alt={`Client ${index + 1}`}
                width={120}
                height={80}
                className="object-contain filter brightness-0 invert opacity-70"
                style={{ minWidth: '120px', height: '80px' }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={sliderRef}
        className="flex items-center gap-16 overflow-hidden"
        style={{ 
          scrollBehavior: 'auto',
          width: '100%'
        }}
      >
        {/* Render clients twice for seamless loop */}
        {[...clients, ...clients].map((client, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={client}
              alt={`Client ${index + 1}`}
              width={120}
              height={80}
              className="object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{ minWidth: '120px', height: '80px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 