'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isHomepage = pathname === '/';

  return (
    <nav className={`w-full py-4 md:py-6 px-4 md:px-8 fixed top-0 right-0 left-0 z-50 ${
      isHomepage ? 'bg-white' : 'bg-[#24135F]'
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Desktop Navigation - Moved to the left */}
        <div className="hidden lg:flex items-center justify-start flex-1 ml-6">
          <div className="flex items-center space-x-6 xl:space-x-8 rtl:space-x-reverse">
            <Link 
              href="/" 
              className={`text-[16px] xl:text-[18px] font-[500] px-3 xl:px-4 py-2 transition-colors ${
                isActive('/') 
                  ? (isHomepage ? 'text-[#F94239]' : 'text-[#FFB808]') 
                  : (isHomepage ? 'text-[#24135F] hover:text-[#F94239]' : 'text-white hover:text-[#FFB808]')
              }`}
            >
              الصفحـــة الرسميــة
            </Link>
            <Link 
              href="/about" 
              className={`text-[16px] xl:text-[18px] font-[500] px-3 xl:px-4 py-2 transition-colors ${
                isActive('/about') 
                  ? (isHomepage ? 'text-[#F94239]' : 'text-[#FFB808]') 
                  : (isHomepage ? 'text-[#24135F] hover:text-[#F94239]' : 'text-white hover:text-[#FFB808]')
              }`}
            >
              عنـــــــا
            </Link>
            <Link 
              href="/services" 
              className={`text-[16px] xl:text-[18px] font-[500] px-3 xl:px-4 py-2 transition-colors ${
                isActive('/services') 
                  ? (isHomepage ? 'text-[#F94239]' : 'text-[#FFB808]') 
                  : (isHomepage ? 'text-[#24135F] hover:text-[#F94239]' : 'text-white hover:text-[#FFB808]')
              }`}
            >
              خدمــاتنـــا
            </Link>
            <Link 
              href="/works" 
              className={`text-[16px] xl:text-[18px] font-[500] px-3 xl:px-4 py-2 transition-colors ${
                isActive('/works') 
                  ? (isHomepage ? 'text-[#F94239]' : 'text-[#FFB808]') 
                  : (isHomepage ? 'text-[#24135F] hover:text-[#F94239]' : 'text-white hover:text-[#FFB808]')
              }`}
            >
              اعمــــــالنــــــا
            </Link>
            <Link 
              href="/contact" 
              className={`text-[16px] xl:text-[18px] font-[500] px-3 xl:px-4 py-2 transition-colors ${
                isActive('/contact') 
                  ? (isHomepage ? 'text-[#F94239]' : 'text-[#FFB808]') 
                  : (isHomepage ? 'text-[#24135F] hover:text-[#F94239]' : 'text-white hover:text-[#FFB808]')
              }`}
            >
              اتصـــــل بنا
            </Link>
            <Link 
              href="/book" 
              className={`text-[16px] xl:text-[18px] font-[500] px-4 xl:px-6 py-2 xl:py-3 rounded-full transition-colors ${
                isActive('/book') 
                  ? 'bg-[#d63529] text-white' 
                  : 'bg-[#F94239] text-white hover:bg-[#d63529]'
              }`}
            >
              احجز موعد
            </Link>
          </div>
        </div>

        {/* Logo - Right side */}
        <div className="flex items-center">
          <Link href="/" onClick={closeMenu}>
            <Image 
              src={isHomepage ? "/assets/logo.png" : "/assets/logoPurpol.png"}
              alt="ذا برايت فيجن" 
              width={140} 
              height={56} 
              priority 
              quality={100}
              className="h-auto w-auto max-h-[56px] md:max-h-[72px]"
            />
          </Link>
        </div>

        {/* Mobile Hamburger Button - Left side on mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className={`focus:outline-none transition-colors ${
              isHomepage 
                ? 'text-[#24135F] hover:text-[#F94239] focus:text-[#F94239]' 
                : 'text-white hover:text-[#FFB808] focus:text-[#FFB808]'
            }`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[80px] bg-gradient-to-br from-[#24135F] via-[#3a1f7a] to-[#F94239] z-40 shadow-lg">
          <div className="flex flex-col items-center py-8 space-y-6">
            <Link 
              href="/" 
              onClick={closeMenu}
              className={`text-[20px] font-[500] px-4 py-3 transition-colors ${
                isActive('/') ? 'text-[#FFB808]' : 'text-white hover:text-[#FFB808]'
              }`}
            >
              الصفحـــة الرسميــة
            </Link>
            <Link 
              href="/about" 
              onClick={closeMenu}
              className={`text-[20px] font-[500] px-4 py-3 transition-colors ${
                isActive('/about') ? 'text-[#FFB808]' : 'text-white hover:text-[#FFB808]'
              }`}
            >
              عنـــــــا
            </Link>
            <Link 
              href="/services" 
              onClick={closeMenu}
              className={`text-[20px] font-[500] px-4 py-3 transition-colors ${
                isActive('/services') ? 'text-[#FFB808]' : 'text-white hover:text-[#FFB808]'
              }`}
            >
              خدمــاتنـــا
            </Link>
            <Link 
              href="/works" 
              onClick={closeMenu}
              className={`text-[20px] font-[500] px-4 py-3 transition-colors ${
                isActive('/works') ? 'text-[#FFB808]' : 'text-white hover:text-[#FFB808]'
              }`}
            >
              اعمــــــالنــــــا
            </Link>
            <Link 
              href="/contact" 
              onClick={closeMenu}
              className={`text-[20px] font-[500] px-4 py-3 transition-colors ${
                isActive('/contact') ? 'text-[#FFB808]' : 'text-white hover:text-[#FFB808]'
              }`}
            >
              اتصـــــل بنا
            </Link>
            
            {/* Mobile Book Button */}
            <Link 
              href="/book" 
              onClick={closeMenu}
              className={`text-[18px] font-[500] px-8 py-3 rounded-full transition-colors mt-4 ${
                isActive('/book') 
                  ? 'bg-[#FFB808] text-[#24135F]' 
                  : 'bg-white text-[#24135F] hover:bg-[#FFB808]'
              }`}
            >
              احجز موعد
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}