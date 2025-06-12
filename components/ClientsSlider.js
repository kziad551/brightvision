'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

export default function ClientsSlider({ clients }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fallback for SSR
  if (!isMounted || !clients || clients.length === 0) {
    return (
      <div className="relative overflow-hidden">
        <div className="flex items-center gap-16 justify-center py-4">
          {clients && clients.slice(0, 5).map((client, index) => (
            <div key={`fallback-${index}`} className="flex-shrink-0">
              <Image
                src={client}
                alt={`Client ${index + 1}`}
                width={160}
                height={120}
                className="object-contain filter brightness-0 invert opacity-70"
                style={{ minWidth: '160px', height: '120px' }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden select-none">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={64} // 4rem gap between slides
        slidesPerView="auto"
        loop={true}
        centeredSlides={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
          reverseDirection: false,
        }}
        speed={3000} // Slow, smooth transition
        freeMode={{
          enabled: true,
          momentum: true,
        }}
        grabCursor={true}
        className="clients-swiper"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div className="flex-shrink-0 flex items-center justify-center">
              <Image
                src={client}
                alt={`Client ${index + 1}`}
                width={160}
                height={120}
                className="object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ 
                  minWidth: '160px', 
                  minHeight: '120px',
                  maxWidth: '160px',
                  maxHeight: '120px'
                }}
                draggable="false"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}