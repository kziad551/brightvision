'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="w-full bg-white py-6 px-8 fixed top-0 right-0 left-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo - Right side for RTL */}
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src="/assets/logo.png" 
              alt="ذا برايت فيجن" 
              width={180} 
              height={72} 
              priority 
              quality={100}
              className="h-auto w-auto max-h-[72px]"
            />
          </Link>
        </div>
        
        {/* Main Navigation - Centered */}
        <div className="flex items-center justify-center flex-1">
          <div className="flex items-center space-x-8 rtl:space-x-reverse">
            <Link 
              href="/" 
              className={`text-[18px] font-[500] px-4 py-2 transition-colors ${
                isActive('/') ? 'text-[#F94239]' : 'text-[#24135F] hover:text-[#F94239]'
              }`}
            >
              الصفحة الرئيسية
            </Link>
            <Link 
              href="/about" 
              className={`text-[18px] font-[500] px-4 py-2 transition-colors ${
                isActive('/about') ? 'text-[#F94239]' : 'text-[#24135F] hover:text-[#F94239]'
              }`}
            >
              عنا
            </Link>
            <Link 
              href="/services" 
              className={`text-[18px] font-[500] px-4 py-2 transition-colors ${
                isActive('/services') ? 'text-[#F94239]' : 'text-[#24135F] hover:text-[#F94239]'
              }`}
            >
              خدماتنا
            </Link>
            <Link 
              href="/works" 
              className={`text-[18px] font-[500] px-4 py-2 transition-colors ${
                isActive('/works') ? 'text-[#F94239]' : 'text-[#24135F] hover:text-[#F94239]'
              }`}
            >
              أعمالنا
            </Link>
            <Link 
              href="/contact" 
              className={`text-[18px] font-[500] px-4 py-2 transition-colors ${
                isActive('/contact') ? 'text-[#F94239]' : 'text-[#24135F] hover:text-[#F94239]'
              }`}
            >
              اتصل بنا
            </Link>
          </div>
        </div>

        {/* Book Button - Left side */}
        <div className="flex items-center">
          <Link 
            href="/book" 
            className={`text-[18px] font-[500] px-6 py-3 rounded-full transition-colors ${
              isActive('/book') 
                ? 'bg-[#d63529] text-white' 
                : 'bg-[#F94239] text-white hover:bg-[#d63529]'
            }`}
          >
            احجز موعد
          </Link>
        </div>
      </div>
    </nav>
  );
}