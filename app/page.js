'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ClientsSlider from "../components/ClientsSlider";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const services = [
  {
    icon: "/assets/servicesIcons/consultant.png", // Keep existing icons, ensure they are suitable for white display
    title: "الاستشارات والتخطيط الاستراتيجي",
    desc: "استشارات العلامة التجارية وتطوير الهوية وتحليل السوق والمنافسين وبناء استراتيجيات النمو وإطلاق الخدمات",
  },
  {
    icon: "/assets/servicesIcons/production.png",
    title: "الإنتاج الإعلامي والتصوير",
    desc: "تصوير فوتوغرافي، إنتاج وإخراج فيديوهات، سبوتات، قصص وطابية مواقع إعلانات باستخدام أحدث التقنيات",
  },
  {
    icon: "/assets/servicesIcons/id.png",
    title: "تصميم الهوية البصرية",
    desc: "تصميم الشعارات والهويات البصرية وتطوير العلامات التجارية وتحريك الشعارات",
  },
  {
    icon: "/assets/servicesIcons/web.png",
    title: "تصميم وتطوير المواقع والتطبيقات",
    desc: "تطوير مواقع إلكترونية وتطبيقات بأنظمتها المختلفة تصميم متاجر - مواقع - برمجة مخصصة",
  },
  {
    icon: "/assets/servicesIcons/ads.png",
    title: "الإعلانات الرقمية والتسويق الممول",
    desc: "إدارة حملات جوجل وفيسبوك والحملات على تيك توك وسناب شات التسويق عبر المؤثرين",
  },
  {
    icon: "/assets/servicesIcons/socialmanage.png",
    title: "إدارة منصات التواصل الاجتماعي",
    desc: "إدارة حسابات استراتيجيات السوشيال ميديا، ابتكار أفكار، صناعة المحتوى والردود اليومية",
  },
];

const clients = [
  "/assets/clientslogos/961 white.png",
  "/assets/clientslogos/aen mohamed.png",
  "/assets/clientslogos/calla.png",
  "/assets/clientslogos/cube.png",
  "/assets/clientslogos/dahab.png",
  "/assets/clientslogos/Ehjz.png",
  "/assets/clientslogos/get me flower.png",
  "/assets/clientslogos/ht.png",
  "/assets/clientslogos/ichika.png",
  "/assets/clientslogos/kato.png",
  "/assets/clientslogos/lathat el forn logo png.png",
  "/assets/clientslogos/logos-04.png",
  "/assets/clientslogos/LOUNGY.png",
  "/assets/clientslogos/Miss Fatima 1.png",
  "/assets/clientslogos/pause logo-01.png",
  "/assets/clientslogos/secret sky.png",
  "/assets/clientslogos/street.png",
  "/assets/clientslogos/the partener.png",
  "/assets/clientslogos/toupal.png",
  "/assets/clientslogos/JUBARA.png",
  "/assets/clientslogos/الفريه.png",
  "/assets/clientslogos/MAJLS.png",
  "/assets/clientslogos/MALLY.png",
  "/assets/clientslogos/E.png",
  "/assets/clientslogos/ذاكريتيف.png",
  "/assets/clientslogos/splinded.png",
  "/assets/clientslogos/شزيين.png",
  "/assets/clientslogos/فيلاج.png",
  "/assets/clientslogos/ليل.png",
  "/assets/clientslogos/منسج.png",
  "/assets/clientslogos/BUBBLES.png",
  "/assets/clientslogos/NANA_S.png"
];

export default function Home() {
  const [works, setWorks] = useState([]);
  const [worksLoading, setWorksLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        // Use our cached API route
        const response = await fetch('/api/works', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.message || 'Failed to fetch works');
        }
        
        // Filter for Line 1 and Line 2 only
        const filteredProjects = data.filter(project => {
          const lineNumber = parseInt((project.project_meta || 'line 1').replace('line ', ''));
          return lineNumber === 1 || lineNumber === 2;
        });
        
        setWorks(filteredProjects);
        
      } catch (err) {
        console.error('Works API fetch failed:', err);
        setWorks([]);
      } finally {
        setWorksLoading(false);
      }
    };

    fetchWorks();
  }, []); // Empty dependency array - only run once

  const getCategoryName = (project) => {
    if (project._embedded && project._embedded['wp:term'] && project._embedded['wp:term'][0] && project._embedded['wp:term'][0][0]) {
      return project._embedded['wp:term'][0][0].name;
    }
    return 'غير محدد';
  };

  const handleProjectClick = (projectId) => {
    router.push(`/works/${projectId}`);
  };

  return (
    <div className="min-h-screen font-handicraft"> {/* Apply custom font globally if not on body */}
      {/* Hero Section - Assuming Navbar height is approx 80-96px, adjust pt-20 or use min-h-screen with padding */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 md:pt-24 lg:pt-32 bg-white">
        
        {/* Desktop Flipicons - Left and Right - HIDDEN FOR NOW */}
        {/* <div className="hidden md:block absolute left-8 lg:left-16 xl:left-24 top-1/2 transform -translate-y-1/2 z-10">
          <Image
            src="/flipicon.png"
            alt="Flip Icon"
            width={80}
            height={80}
            className="animate-flip-rotate lg:w-[100px] lg:h-[100px]"
          />
        </div>
        
        <div className="hidden md:block absolute right-8 lg:right-16 xl:right-24 top-1/2 transform -translate-y-1/2 z-10">
          <Image
            src="/flipicon.png"
            alt="Flip Icon"
            width={80}
            height={80}
            className="animate-flip-rotate lg:w-[100px] lg:h-[100px]"
          />
        </div> */}

        <div className="container mx-auto text-center z-10 relative">
          
          {/* Mobile Flipicon - Top - HIDDEN FOR NOW */}
          {/* <div className="block md:hidden mb-8">
        <Image
              src="/flipicon.png"
              alt="Flip Icon"
              width={60}
              height={60}
              className="animate-flip-rotate mx-auto"
            />
          </div> */}
          
          {/* Hero Text */}
          <div className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] leading-[1.3] font-bold text-[#F94239] mb-8 max-w-[1200px] mx-auto">
            نحــــوّل الحُلـــم لعلامــــة
            <br />
            <span className="block mt-4 md:mt-6 lg:mt-8">تَبقــــــــى وتَتـــــــرُك أثـــــــر</span>
          </div>
          
          {/* Mobile Flipicon - Bottom - HIDDEN FOR NOW */}
          {/* <div className="block md:hidden mt-8">
            <Image
              src="/flipicon.png"
              alt="Flip Icon"
              width={60}
              height={60}
              className="animate-flip-rotate mx-auto"
            />
          </div> */}
        </div>
        
        <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-10 px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center max-w-[1200px] mx-auto text-center sm:text-right gap-4 sm:gap-0">
            <Link href="#" className="text-[16px] md:text-[20px] lg:text-[24px] font-normal text-[#F94239] order-2 sm:order-1">بصمتـــــك تسبقـــــك</Link>
            <Link href="#" className="text-[16px] md:text-[20px] lg:text-[24px] font-normal text-[#F94239] order-1 sm:order-2">الـمحتوى عندنـــا، ماهو شغـــل.. هو شغــــف</Link>
          </div>
          <div className="w-full max-w-[1200px] mx-auto border-t border-[#F94239] mt-4"></div>
        </div>
      </section>

{/* ───── About Us – matches Figma ───── */}
<section className="relative bg-[#24135F] text-white py-16 md:py-24 lg:py-32 overflow-hidden">

  {/* right-edge outline  */}
  <img
    src="/assets/aboutus-rightedge.png"
    alt=""
    className="pointer-events-none select-none
               absolute right-0 top-1/2
               w-[30vw] md:w-[25vw] max-w-[260px] -translate-y-1/2 opacity-50 md:opacity-100"
  />

  <div className="container mx-auto relative z-10 px-4">

    {/* section title (right-aligned like other headers) */}
    <h2 className="text-[#F94239] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px]
                   font-medium mb-8 md:mb-12 lg:mb-16 text-right">
      عنــــا
    </h2>

    {/* centred paragraph block */}
    <div className="mx-auto text-center max-w-3xl space-y-4 md:space-y-6
                    text-[18px] md:text-[22px] lg:text-[24px] leading-[1.6] md:leading-[1.4] lg:leading-[1.3]">

      <p>تأسست شركة ذا برايت فيجن في عام&nbsp;2019.</p>
      <p>ونمت بسرعة لتصبح من أبرز شركات التسويق والإعلان في الشرق الأوسط.</p>
      <p>يقع مقرنا الرئيسي في قطر، ونعمل على التوسع في دول الخليج ولبنان ومصر.</p>

      <p className="font-semibold">منذ البداية، كان هدفنا واضحاً:</p>
      <p className="leading-[1.7] md:leading-[1.5] lg:leading-[1.3]">نساعد العلامات التجارية على التميز من خلال أفكار إبداعية
         واستراتيجيات ذكية تحقق نتائج حقيقية.</p>
    </div>

    <div className="mt-8 md:mt-12 text-center">
      <Link href="/about" className="text-[#F94239] text-[18px] md:text-[20px] lg:text-[24px] hover:underline">
        عرض المزيد ...
      </Link>
    </div>
  </div>
</section>


{/* ───── Services Section – matches Figma ───── */}
<section className="relative bg-[#24135F] py-16 md:py-24 lg:py-32 overflow-hidden">
  <div className="container mx-auto relative z-10 px-4">

    {/* Header ( title  + pill-button ) */}
    <div className="flex flex-col sm:flex-row justify-between items-center mb-8 md:mb-12 lg:mb-16 gap-6 sm:gap-4">
      <h2 className="text-[#F94239] font-medium text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] order-2 sm:order-1">
        خدمــاتنــــــا
      </h2>

      <Link
        href="/services"
        className="order-1 sm:order-2 bg-transparent border-2 border-[#F94239]
                   text-[#F94239] hover:bg-[#F94239] hover:text-white
                   transition rounded-full px-6 md:px-10 py-2 md:py-3 text-[16px] md:text-[18px] lg:text-[20px]"
      >
        كل الخدمات
      </Link>
    </div>

    {/* Mobile/Tablet Services - Box Layout */}
    <div className="block lg:hidden">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {services.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="bg-[#F94239] rounded-lg p-4 md:p-6 text-center"
          >
            {/* icon */}
            <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full bg-white
                            flex items-center justify-center shadow-lg mx-auto mb-3 md:mb-4">
              <Image src={icon} alt={title} width={20} height={20} className="md:w-[24px] md:h-[24px]" />
            </div>

            {/* text */}
            <div className="text-center">
              <h3 className="text-white text-[14px] md:text-[16px] mb-2 leading-tight font-medium">
                {title}
              </h3>

              <p className="text-white text-[11px] md:text-[13px] leading-relaxed opacity-90">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Desktop Services - Original Blob Layout */}
    <div className="hidden lg:block">
      <div className="relative">
        {/* background blob image  */}
        <img
          src="/assets/servicesBackround.png"
          alt="Services background"
          className="block w-full pointer-events-none select-none"
        />

        {/* grid on top of blob ( position absolute ) */}
        <div className="absolute inset-0 flex items-center justify-center px-12 xl:px-20">
          <div className="grid gap-y-12 gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
            {services.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="w-full max-w-[340px] mx-auto flex items-start gap-4 rtl:gap-4"
              >
                {/* icon bubble */}
                <div className="shrink-0 w-[56px] h-[56px] rounded-full bg-white
                                flex items-center justify-center shadow-lg">
                  <Image src={icon} alt={title} width={28} height={28} />
                </div>

                {/* text */}
                <div className="text-right">
                  <h3 className="text-[#24135F] text-[20px] mb-1 leading-tight">
                    {title}
                  </h3>

                  <p className="text-white text-[15px] leading-relaxed opacity-90">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Works Section - Dynamic from API */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-[#24135F]">
        <div className="container mx-auto max-w-6xl">
          
          {/* Header with title and button */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 md:mb-12 lg:mb-16 gap-6 sm:gap-4">
            <h2 className="text-[#F94239] font-medium text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] order-2 sm:order-1">
              أعمــالنــــا
            </h2>
            
            <Link
              href="/works"
              className="order-1 sm:order-2 bg-transparent border-2 border-[#F94239]
                         text-[#F94239] hover:bg-[#F94239] hover:text-white
                         transition rounded-full px-6 md:px-10 py-2 md:py-3 text-[16px] md:text-[18px] lg:text-[20px]"
            >
              كل الأعمــال
            </Link>
          </div>

          {/* Projects Grid - 2 per row on mobile/tablet, 2 per row on desktop */}
          {worksLoading ? (
            <div className="text-center py-12 md:py-16">
              <div className="text-white text-xl md:text-2xl">جاري التحميل...</div>
            </div>
          ) : works.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {works.map((project, index) => (
                <div
                  key={project.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => handleProjectClick(project.id)}
                >
                  {/* Project Image */}
                  <div className="relative w-full aspect-square bg-[#24135F]">
          <Image
                      src={project.featured_image_url || '/assets/placeholder.jpg'}
                      alt={project.title.rendered || 'مشروع'}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 50vw"
                      onError={(e) => {
                        e.target.src = '/assets/placeholder.jpg';
                      }}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2 md:px-4 lg:px-6 pb-4 md:pb-6 lg:pb-8">
                        <h3 className="text-[14px] md:text-[18px] lg:text-[24px] font-[600] mb-1 md:mb-2">
                          {project.title.rendered || 'مشروع بدون عنوان'}
                        </h3>
                        <p className="text-[12px] md:text-[14px] lg:text-[18px] text-[#FFB808]">
                          {getCategoryName(project)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 md:py-16">
              <p className="text-white text-xl md:text-[24px]">لا توجد أعمال متاحة حالياً</p>
            </div>
          )}
        </div>
      </section>

{/* ───── Clients Section ───── */}
<section className="bg-[#24135F] py-16 md:py-24 lg:py-32">
  <div className="container mx-auto text-center px-4">

    {/* Section title centred like Figma */}
    <h2 className="text-[#F94239] font-medium
                   text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] mb-12 md:mb-16">
      عملاؤنــــا
    </h2>

    {/* Client Slider Component */}
    <ClientsSlider clients={clients} />

  </div>
</section>

    </div>
  );
}