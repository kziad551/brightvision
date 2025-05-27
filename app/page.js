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
    icon: "/assets/servicesIcons/Glyph.png",
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

const clients = [ // Assuming these paths are correct
  "/assets/clientslogos/logo in circle RGB white (1).png",
  "/assets/clientslogos/lathat el forn logo png.png",
  "/assets/clientslogos/5.png",
  "/assets/clientslogos/white logo png.png",
  "/assets/clientslogos/Layer 1.png",
  "/assets/clientslogos/mia bello white logo png.png",
  "/assets/clientslogos/logo in circle RGB white.png",
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
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 md:pt-32 bg-white">
        <div className="container mx-auto text-center z-10">
          <h1 className="text-[70px] sm:text-[90px] md:text-[100px] lg:text-[120px] leading-[1.1] font-bold text-[#F94239] mb-8 max-w-[1200px] mx-auto">
            نحــــوّل الحُلـــم لعلامــــة
            <br />
            تَبقــــــــى وتَتـــــــرُك أثـــــــر
          </h1>
        </div>
        <div className="absolute bottom-12 left-0 right-0 z-10 px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center max-w-[1200px] mx-auto text-center sm:text-right">
            <Link href="#" className="text-[20px] md:text-[24px] font-normal text-[#F94239] mb-2 sm:mb-0">بصمتـــــك تسبقـــــك</Link>
            <Link href="#" className="text-[20px] md:text-[24px] font-normal text-[#F94239]">الـمحتوى عندنـــا، ماهو شغـــل.. هو شغــــف</Link>
          </div>
          <div className="w-full max-w-[1200px] mx-auto border-t border-[#F94239] mt-4"></div>
        </div>
      </section>

{/* ───── About Us – matches Figma ───── */}
<section className="relative bg-[#24135F] text-white py-24 md:py-32 overflow-hidden">

  {/* right-edge outline  */}
  <img
    src="/assets/aboutus-rightedge.png"
    alt=""
    className="pointer-events-none select-none
               absolute right-0 top-1/2
               w-[25vw] max-w-[260px] -translate-y-1/2"
  />

  <div className="container mx-auto relative z-10">

    {/* section title (right-aligned like other headers) */}
    <h2 className="text-[#F94239] text-[48px] md:text-[64px] lg:text-[80px]
                   font-medium mb-12 md:mb-16 text-right">
      عنــــا
    </h2>

    {/* centred paragraph block */}
    <div className="mx-auto text-center max-w-3xl space-y-6
                    text-[24px] md:text-[24px] leading-[1.3]">

      <p>تأسست شركة ذا برايت فيجن في عام&nbsp;2019.</p>
      <p>ونمت بسرعة لتصبح من أبرز شركات التسويق والإعلان في الشرق الأوسط.</p>
      <p>يقع مقرنا الرئيسي في قطر، ونعمل على التوسع في دول الخليج ولبنان ومصر.</p>

      <p className="font-semibold">منذ البداية، كان هدفنا واضحاً:</p>
      <p className="leading-[1.3]">نساعد العلامات التجارية على التميز من خلال أفكار إبداعية
         واستراتيجيات ذكية تحقق نتائج حقيقية.</p>
    </div>

    <div className="mt-12 text-center">
      <Link href="/about" className="text-[#F94239] text-[20px] md:text-[24px] hover:underline">
        عرض المزيد ...
      </Link>
    </div>
  </div>
</section>


{/* ───── Services Section – matches Figma ───── */}
<section className="relative bg-[#24135F] py-24 md:py-32 overflow-hidden">
  <div className="container mx-auto relative z-10">

    {/* Header ( title  + pill-button ) */}
    <div className="flex flex-col sm:flex-row justify-between items-center mb-12 md:mb-16">
      <h2 className="text-[#F94239] font-medium text-[48px] md:text-[64px] lg:text-[80px]">
        خدمــاتنــــــا
      </h2>

      <Link
        href="/services"
        className="mt-6 sm:mt-0 bg-transparent border-2 border-[#F94239]
                   text-[#F94239] hover:bg-[#F94239] hover:text-white
                   transition rounded-full px-10 py-3 text-[18px] md:text-[20px]"
      >
        كل الخدمات
      </Link>
    </div>

    {/* ─── Red blob with service cards ─── */}
    <div className="relative">

      {/* background blob image  */}
      <img
        src="/assets/servicesBackround.png"
        alt="Services background"
        className="block w-full pointer-events-none select-none"
        /* keeps aspect-ratio and scales responsively */
      />

      {/* grid on top of blob ( position absolute ) */}
      <div
        className="
          absolute inset-0
          flex items-center justify-center
          px-6 md:px-12 lg:px-20
        "
      >
 {/* grid inside the blob …                                 */}
<div className="grid gap-y-12 gap-x-10
                grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

  {services.map(({ icon, title, desc }) => (
    <div
    key={title}
    className="w-[340px] flex items-start gap-4 rtl:gap-4"
  >
      {/* icon bubble */}
      <div className="shrink-0 w-[56px] h-[56px] rounded-full bg-white
                      flex items-center justify-center shadow-lg">
        <Image src={icon} alt={title} width={28} height={28} />
      </div>

      {/* text */}
      <div className="text-right">
        <h3 className="text-[#24135F] text-[20px]  mb-1 leading-tight">
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
</section>

      {/* Works Section - Dynamic from API */}
      <section className="py-24 md:py-32 px-4 bg-[#24135F]">
        <div className="container mx-auto max-w-6xl">
          
          {/* Header with title and button */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 md:mb-16">
            <h2 className="text-[#F94239] font-medium text-[48px] md:text-[64px] lg:text-[80px]">
              أعمــالنــــا
            </h2>
            
            <Link
              href="/works"
              className="mt-6 sm:mt-0 bg-transparent border-2 border-[#F94239]
                         text-[#F94239] hover:bg-[#F94239] hover:text-white
                         transition rounded-full px-10 py-3 text-[18px] md:text-[20px]"
            >
              كل الأعمــال
            </Link>
          </div>

          {/* Projects Grid */}
          {worksLoading ? (
            <div className="text-center py-16">
              <div className="text-white text-2xl">جاري التحميل...</div>
            </div>
          ) : works.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      sizes="(max-width: 768px) 100vw, 50vw"
                      onError={(e) => {
                        e.target.src = '/assets/placeholder.jpg';
                      }}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-6 pb-8">
                        <h3 className="text-[24px] font-[600] mb-2">
                          {project.title.rendered || 'مشروع بدون عنوان'}
                        </h3>
                        <p className="text-[18px] text-[#FFB808]">
                          {getCategoryName(project)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-white text-[24px]">لا توجد أعمال متاحة حالياً</p>
            </div>
          )}
        </div>
      </section>

{/* ───── Clients Section ───── */}
<section className="bg-[#24135F] py-24 md:py-32">
  <div className="container mx-auto text-center">

    {/* Section title centred like Figma */}
    <h2 className="text-[#F94239] font-medium
                   text-[48px] md:text-[64px] lg:text-[80px] mb-16">
      عملاؤنــــا
    </h2>

    {/* Auto-scrolling logo strip */}
    <div className="relative overflow-hidden w-full">
      <div className="flex items-center gap-20 animate-scroll-logos">
        {/* Render logos multiple times for seamless loop */}
        {[...clients, ...clients, ...clients].map((src, i) => (
          <div key={i} className="flex-shrink-0">
            <Image
              src={src}
              alt="logo"
              height={80}
              width={120}
              className="object-contain grayscale-0 h-20 w-auto"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

    </div>
  );
}