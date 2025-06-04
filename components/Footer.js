import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-[#24135F] py-12 md:py-16 px-4 md:px-8" dir="rtl">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          
          {/* Right Column: Main Heading (RTL - first position) */}
          <div className="text-center lg:text-right order-1 lg:order-1">
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px] font-bold text-[#F94239] leading-tight">
              خلنــــا<br />
              نصنــــــع رؤيتـــــــك
            </h2>
          </div>

          {/* Center Column: CTA Text and Button */}
          <div className="flex flex-col items-center text-center order-2 lg:order-2">
            <p className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-[#F94239] mb-6 md:mb-8 leading-relaxed">
              نسمعــك ونردّ بطيـــــب خاطــر
            </p>
            <Link 
              href="/contact" 
              className="inline-block text-[#F94239] border-2 border-[#F94239] rounded-full px-8 md:px-12 py-3 md:py-4 text-[16px] md:text-[18px] lg:text-xl font-medium hover:bg-[#F94239] hover:text-white transition duration-300"
            >
              ابـــــدأ مشروعــــــــك
            </Link>
          </div>

          {/* Left Column: Social Media Icons (RTL - last position) */}
          <div className="flex flex-row lg:flex-col items-center lg:items-start space-x-6 lg:space-x-0 lg:space-y-6 xl:space-y-8 order-3 lg:order-3 rtl:space-x-reverse">
            <a href="https://www.linkedin.com/company/thebrightvision/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#F94239] hover:opacity-75">
              <Image src="/assets/socialmedia-icons/linkedin.png" alt="LinkedIn" width={40} height={40} className="md:w-12 md:h-12" />
            </a>
            <a href="https://www.instagram.com/thebrightvision.qa" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#F94239] hover:opacity-75">
              <Image src="/assets/socialmedia-icons/instagram.png" alt="Instagram" width={40} height={40} className="md:w-12 md:h-12" />
            </a>
            <a href="https://x.com/brightvision_qa?t=s2oulYgHhvETFYJZJyyoeA&s=09" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-[#F94239] hover:opacity-75">
              <Image src="/assets/socialmedia-icons/x.png" alt="X" width={40} height={40} className="md:w-12 md:h-12" />
            </a>
            <a href="https://wa.me/97466646448" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-[#F94239] hover:opacity-75">
              <Image src="/assets/socialmedia-icons/whatsapp.png" alt="WhatsApp" width={40} height={40} className="md:w-12 md:h-12" />
            </a>
          </div>
        </div>

        {/* Bottom Section: Contact Info in Three Columns */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-[#F94239] text-sm md:text-base">
            
            {/* Right Column: Email */}
            <div className="text-center md:text-right">
              <p className="font-medium">
                الايميل: <a href="mailto:info@thebrightvision.qa" className="font-normal hover:underline">info@thebrightvision.qa</a>
              </p>
            </div>

            {/* Center Column: Phone Numbers */}
            <div className="text-center">
              <p className="font-medium">
                رقم التواصل: 
                <a href="tel:+97466646448" className="font-normal hover:underline" dir="ltr">+974 6664 6448</a>
              </p>
            </div>

            {/* Left Column: Address */}
            <div className="text-center md:text-left">
              <p className="font-medium">
                العنوان: <span className="font-normal"> قطــــــر، الدوحــــــة، السد، شارع الـمرقاب الجديد، مبنى 50، الدور 1، مكتــــــب 4</span>
              </p>
            </div>
          </div>
          
          {/* Copyright and Logo */}
          <div className="flex flex-col md:flex-row justify-center items-center mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-100 relative">
            {/* Logo positioned on the right for RTL */}
            <div className="absolute right-0 hidden md:block">
              <Image 
                src="/assets/logo.png" 
                alt="The Bright Vision Logo" 
                width={120} 
                height={48} 
                quality={100}
                className="h-auto w-auto max-h-[48px] lg:max-h-[64px]"
              />
            </div>
            
            {/* Centered Copyright Text */}
            <div className="text-[16px] md:text-[18px] text-[#24135F] font-medium text-center w-full">
              جميع الحقوق محفوظة © The Bright Vision 2025
            </div>
            
            {/* Logo for mobile - centered below text */}
            <div className="mt-4 md:hidden">
              <Image 
                src="/assets/logo.png" 
                alt="The Bright Vision Logo" 
                width={120} 
                height={48} 
                quality={100}
                className="h-auto w-auto max-h-[48px]"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
 