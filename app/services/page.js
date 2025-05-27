import Image from 'next/image';

const allServices = [
  {
    icon: "/assets/servicesIcons/socialmanage.png",
    title: "إدارة منصـــــات التواصـــــل الاجتماعــــي",
    items: [
      "إدارة حسابات انستغرام، فيسبوك، لينكد ان، سناب شــــــات وغيــــــرها",
      "صناعــــة المحتوى والجدولة اليومية"
    ]
  },
  {
    icon: "/assets/servicesIcons/id.png",
    title: "تصميــــــــم الهويــــــــــة البصريـــــــة",
    items: [
      "تصميم الشعار والهوية البصرية",
      "تطويــــــر الـملفات التعريفيــــة",
      "تــحريــــــــــك الــــشعــــــــــارات"
    ]
  },
  {
    icon: "/assets/servicesIcons/consultant.png",
    title: "الاستشـارات والتخطيط الاستراتيجـي",
    items: [
      "استشارات العلامة التجارية وتطوير الهوية",
      "تــحليـــــــل الســــــــــوق والــــمنافسيــــــــــن",
      "بنـــاء استراتيجيات النمو وإطلاق المنتجات"
    ]
  },
  {
    icon: "/assets/servicesIcons/ads.png",
    title: "الإعلانــــات الرقميـــة والتسويــق الممـــول",
    items: [
      "إدارة حمــــلات جوجــــــل وميتــــــــا",
      "الحملات عبر تيك توك وسناب شات",
      "التسويــــــــــق عبــــــــــر الـمؤثريــــــــن"
    ]
  },
  {
    icon: "/assets/servicesIcons/web.png",
    title: "تصميم وتطويـر المواقع والتطبيقـات",
    items: [
      "تصميــــــم مواقــــع تعريفيـــــة احترافيــــــة",
      "تطوير المتاجر الإلكترونية بأنظمتها المختلفة",
      "تــصميــــــــــم مــتاجــــــــــر شــوبيفـــــــــاي"
    ]
  },
  {
    icon: "/assets/servicesIcons/production.png",
    title: "الإنتـــــاج الإعلامــي والـــــتصويـــــر",
    items: [
      "تصويــــــــــر فوتوغرافـــــي تجـــــــاري وإعلانــــي",
      "فيديوهـــــات سينمائيـــــة قصيـــــرة وإعلانية",
      "مونتاج احترافي باستخدام أحدث التقنيات"
    ]
  },
  {
    icon: "/assets/servicesIcons/design.png",
    title: "التصميــــم الداخلـي والديكــــــــور",
    items: [
      "تصميم المفهوم الداخلي وتخطيط المساحات",
      "اختيـــــــــار الألــــوان والإضـــــــــاءة والـمـــــواد",
      "تصميم الأثاث والإكسســــــوارات والستائر",
      "ديكــــــــــور الـمناسبـــــــــات والـمعــــــــارض",
      "تنفيـــــذ الأسقـــــف، الجــــدران، والأرضيات"
    ]
  },
  {
    icon: "/assets/servicesIcons/seo.png",
    title: "تحسيــــــن محركــــــــــات البحــــــث",
    items: [
      "تحسين بنية الموقع والكلمات المفتاحية",
      "محتــــــوى متوافــــــــق مـــــــــع SEO",
      "تحسيـــــــن ظهـــــــور الـموقع محليًا",
      "ربط وتحسيــــــن جوجــــــل بزنــس",
      "تقاريــــــر أداء وتحليلات شهريــــــة"
    ]
  },
  {
    icon: "/assets/servicesIcons/managetours.png",
    title: "إدارة الحمـلات الـموسميـة الكبـرى",
    items: [
      "وضع فكرة الحملــــــة وتنفيذهــــــا إبداعيًـــــــا",
      "إدارة شاملــــــة لجميع مكونـــات الحملــــــة",
      "تصميــــــم الهوية الـموسميـة والإعلانـــــات",
      "استخدام المؤثرين والتسويق متعدد القنوات",
      "تقارير تحليل الأداء والتوصيات الـمستقبلية"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#24135F] text-white">
      {/* Main Content */}
      <div className="pt-32 pb-16">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          
          {/* خدماتنا Section */}
          <section className="mb-20 relative">
            {/* Background Icon */}
            <div className="absolute top-0 right-0 opacity-10 z-0">
              <Image 
                src="/assets/servicesicon.png" 
                alt="خدماتنا" 
                width={220} 
                height={220}
                className="object-contain"
              />
            </div>
            
            <div className="relative z-10">
              <h1 className="text-[#FFB808] text-[80px] font-[500] mb-16 text-right">
                خدمــاتنــــــا
              </h1>
            </div>
          </section>
        </div>

        {/* Full Width Services with Background */}
        <div className="relative w-full">
          {/* Background blob image - Full Width */}
          <img
            src="/assets/servicesBackround.png"
            alt="Services background"
            className="w-full h-auto pointer-events-none select-none"
          />

          {/* Services Grid on top of blob */}
          <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8 lg:px-16">
            <div className="container mx-auto max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {allServices.map((service, idx) => (
                  <div key={idx} className="flex items-start gap-4 text-right">
                    {/* Icon bubble */}
                    <div className="shrink-0 w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center shadow-lg">
                      <Image src={service.icon} alt={service.title} width={38} height={38} />
                    </div>
                    
                    {/* Text content */}
                    <div className="flex-1">
                      <h3 className="text-[#24135F] text-[20px] font-[600] mb-3 leading-tight">
                        {service.title}
                      </h3>
                      <div className="space-y-2">
                        {service.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-white text-[16px] leading-[1.4]">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 