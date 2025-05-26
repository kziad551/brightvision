import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white py-6 px-8 fixed top-0 right-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/assets/logo.png" alt="ذا برايت فيجن" width={120} height={48} priority />
          </Link>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center space-x-8 rtl:space-x-reverse"> {/* Adjusted spacing */}
          <Link href="/" className="text-[18px] font-medium text-[#F94239] hover:opacity-80">الصفحة الرئيسية</Link>
          <Link href="/about" className="text-[18px] font-medium text-[#24135F] hover:text-[#F94239]">عنا</Link>
          <Link href="/services" className="text-[18px] font-medium text-[#24135F] hover:text-[#F94239]">خدماتنا</Link>
          <Link href="/works" className="text-[18px] font-medium text-[#24135F] hover:text-[#F94239]">أعمالنا</Link>
          <Link href="/contact" className="text-[18px] font-medium text-[#24135F] hover:text-[#F94239]">اتصل بنا</Link>
          <Link href="/book" className="text-[18px] font-medium text-white bg-[#F94239] px-6 py-2 rounded-full hover:opacity-80">احجز موعد</Link>
        </div>
      </div>
    </nav>
  );
}