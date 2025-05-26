'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function ClientsSlider({ clients }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const interval = setInterval(() => {
      if (slider) {
        scrollAmount += 1;
        if (scrollAmount >= slider.scrollWidth / 2) scrollAmount = 0;
        slider.scrollLeft = scrollAmount;
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto whitespace-nowrap" ref={sliderRef} style={{direction:'ltr'}}>
        <div className="inline-flex gap-12 min-w-full">
          {clients.concat(clients).map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 w-48 h-32 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Image 
                src={logo} 
                alt={`شعار عميل ${idx+1}`} 
                width={160} 
                height={100} 
                style={{objectFit: 'contain'}} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 