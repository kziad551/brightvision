import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#F94239] pt-16 pb-8 overflow-hidden">

      {/* upper band */}
      <div className="container mx-auto flex flex-col md:flex-row
                      justify-between items-start gap-12 md:gap-6 px-4">

        {/* ─── social icons – vertical left ─── */}
        <div className="flex flex-col gap-8">
          {[
            { href: '#', src: '/assets/socialmedia-icons/linkedin.png', alt: 'LinkedIn' },
            { href: '#', src: '/assets/socialmedia-icons/instagram.png', alt: 'Instagram' },
            { href: '#', src: '/assets/socialmedia-icons/x.png',         alt: 'X' },
            { href: '#', src: '/assets/socialmedia-icons/whatsapp.png',  alt: 'WhatsApp' },
          ].map(({ href, src, alt }) => (
            <Link key={alt} href={href} aria-label={alt}>
              <Image src={src} alt={alt} width={40} height={40} className="object-contain" />
            </Link>
          ))}
        </div>

        {/* ─── centre tagline + CTA ─── */}
        <div className="flex-1 flex flex-col items-center gap-6 text-center">
          <h3 className="text-[26px] md:text-[32px] font-medium leading-snug">
            نسمعك ونردّ بطيب خاطر
          </h3>

          <Link
            href="/contact"
            className="border border-[#F94239] rounded-full
                       py-3 px-10 text-[18px] hover:bg-[#F94239] hover:text-white
                       transition duration-300"
          >
            ابدأ مشروعك
          </Link>
        </div>

        {/* ─── big headline on the right ─── */}
        <h2 className="text-right font-medium leading-snug
                       text-[40px] md:text-[56px] lg:text-[64px]">
          خلنا<br />نصنع رؤيتك
        </h2>
      </div>

      {/* bottom strip */}
      <div className="border-t border-[#F94239]/20 mt-12 pt-6">
        <div className="container mx-auto flex flex-col md:flex-row
                        items-center justify-between gap-6 px-4 text-[#24135F] text-sm">

          {/* address + contact */}
          <div className="space-y-1 text-center md:text-right leading-relaxed">
            <p>العنوان: السد، المرقاب الجديد، مقابل الرقايب مول، مبنى&nbsp;50 الدور الأول مكتب&nbsp;4</p>
            <p>أرقام التواصل: +974&nbsp;6664&nbsp;6448  –  +974&nbsp;6610&nbsp;3661</p>
            <p>الإيميل: info@thebrightvision.qa</p>
          </div>

          {/* copyright */}
          <p className="text-[#F94239] text-xs font-bold">
            جميع الحقوق محفوظة © The&nbsp;Bright&nbsp;Vision&nbsp;2025
          </p>

          {/* logo */}
          <Image
            src="/assets/logo.png"
            alt="The Bright Vision"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
