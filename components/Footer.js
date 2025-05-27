import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-[#24135F] py-16 px-4 md:px-8" dir="rtl">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
          
          {/* Right Column: Main Heading (RTL - first position) */}
          <div className="text-right order-1 lg:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#F94239] leading-tight">
              خلنــــا<br />
              نصنــــــع رؤيتـــــــك
            </h2>
          </div>

          {/* Center Column: CTA Text and Button */}
          <div className="flex flex-col items-center text-center order-2 lg:order-2">
            <p className="text-[40px] text-[#F94239] mb-8 leading-relaxed">
              نسمعــك ونردّ بطيـــــب خاطــر
            </p>
            <Link 
              href="/contact" 
              className="inline-block text-[#F94239] border-2 border-[#F94239] rounded-full px-12 py-4 text-xl font-medium hover:bg-[#F94239] hover:text-white transition duration-300"
            >
              ابـــــدأ مشروعــــــــك
            </Link>
          </div>

          {/* Left Column: Social Media Icons (RTL - last position) */}
          <div className="flex flex-col items-start space-y-8 order-3 lg:order-3">
            <a href="https://www.linkedin.com/company/thebrightvision/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#F94239] hover:opacity-75">
              <Image src="/assets/socialmedia-icons/linkedin.png" alt="LinkedIn" width={48} height={48} />
            </a>
            <a href="https://www.instagram.com/thebrightvision.qa" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#F94239] hover:opacity-75">
              <Image src="/assets/socialmedia-icons/instagram.png" alt="Instagram" width={48} height={48} />
            </a>
            <a href="https://x.com/brightvision_qa?t=s2oulYgHhvETFYJZJyyoeA&s=09" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-[#F94239] hover:opacity-75">
              <Image src="/assets/socialmedia-icons/x.png" alt="X" width={48} height={48} />
            </a>
            <a href="https://wa.me/97466646448" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-[#F94239] hover:opacity-75">
              <Image src="/assets/socialmedia-icons/whatsapp.png" alt="WhatsApp" width={48} height={48} />
            </a>
          </div>
        </div>

        {/* Bottom Section: Contact Info in Three Columns */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#F94239] text-sm md:text-base">
            
            {/* Right Column: Email */}
            <div className="text-right">
              <p className="font-medium">
                الايميل: <a href="mailto:info@thebrightvision.qa" className="font-normal hover:underline">info@thebrightvision.qa</a>
              </p>
            </div>

            {/* Center Column: Phone Numbers */}
            <div className="text-center">
              <p className="font-medium">
                أرقام التواصل: 
                <a href="tel:+97466103661" className="font-normal hover:underline ml-1" dir="ltr">+974 6610 3661</a>
                <span className="mx-1">-</span>
                <a href="tel:+97466646448" className="font-normal hover:underline" dir="ltr">+974 6664 6448</a>
              </p>
            </div>

            {/* Left Column: Address */}
            <div className="text-left">
              <p className="font-medium">
                العنوان: <span className="font-normal">السد، المرقاب الجديد، مقابل الرقايب مول، مبنى 50 الدور الأول مكتب 4</span>
              </p>
            </div>
          </div>
          
          {/* Copyright and Logo */}
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 pt-6 border-t border-gray-100 relative">
            {/* Logo positioned on the right for RTL */}
            <div className="absolute right-0 hidden md:block">
              <Image 
                src="/assets/logo.png" 
                alt="The Bright Vision Logo" 
                width={160} 
                height={64} 
                quality={100}
                className="h-auto w-auto max-h-[64px]"
              />
            </div>
            
            {/* Centered Copyright Text */}
            <div className="text-[18px] text-[#24135F] font-medium text-center w-full">
              جميع الحقوق محفوظة © The Bright Vision 2025
            </div>
            
            {/* Logo for mobile - centered below text */}
            <div className="mt-4 md:hidden">
              <Image 
                src="/assets/logo.png" 
                alt="The Bright Vision Logo" 
                width={160} 
                height={64} 
                quality={100}
                className="h-auto w-auto max-h-[64px]"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
