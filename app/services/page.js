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
      <div className="pt-48 pb-16">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          
          {/* Page Title */}
          <section className="mb-16 text-center lg:text-right relative">
            <h1 className="text-[#FFB808] text-[40px] md:text-[60px] lg:text-[80px] font-[500] leading-[1.2] mb-8">
              خدمــاتنــــــا
            </h1>
            
            {/* Services Icon */}
            <div className="absolute -bottom-4 right-0 lg:right-16 opacity-20">
              <Image 
                src="/assets/servicesicon.png" 
                alt="خدماتنا" 
                width={180} 
                height={180}
                className="object-contain w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]"
              />
            </div>
          </section>

          {/* Mobile/Tablet Services - Box Layout */}
          <div className="block lg:hidden">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {allServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-[#F94239] rounded-lg p-4 md:p-6 text-center"
                >
                  {/* icon */}
                  <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full bg-white
                                  flex items-center justify-center shadow-lg mx-auto mb-3 md:mb-4">
                    <Image src={service.icon} alt={service.title} width={20} height={20} className="md:w-[24px] md:h-[24px]" />
                  </div>

                  {/* text */}
                  <div className="text-center">
                    <h3 className="text-white text-[14px] md:text-[16px] mb-2 leading-tight font-medium">
                      {service.title}
                    </h3>

                    <div className="space-y-1 md:space-y-2">
                      {service.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-1 md:gap-2 justify-center">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                          <p className="text-white text-[10px] md:text-[12px] leading-[1.4] text-center">
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

        {/* Desktop Services - Full Width with Background */}
        <div className="hidden lg:block relative w-full">
          {/* Background blob image - Full Width */}
          <img
            src="/assets/servicesBackround.png"
            alt="Services background"
            className="w-full h-auto pointer-events-none select-none"
          />

          {/* Services Grid on top of blob */}
          <div className="absolute inset-0 flex items-center justify-center py-12 lg:py-16 xl:py-20">
            <div className="container mx-auto px-8 lg:px-12 xl:px-20 2xl:px-32">
              <div className="grid grid-cols-3 gap-x-4 lg:gap-x-6 xl:gap-x-8 gap-y-6 lg:gap-y-8">
                {allServices.map((service, idx) => (
                  <div key={idx} className="flex items-start gap-2 lg:gap-3 xl:gap-4 text-right">
                    {/* Icon bubble */}
                    <div className="shrink-0 w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] xl:w-[56px] xl:h-[56px] rounded-full bg-white flex items-center justify-center shadow-lg">
                      <Image 
                        src={service.icon} 
                        alt={service.title} 
                        width={28} 
                        height={28} 
                        className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] xl:w-[28px] xl:h-[28px]"
                      />
                    </div>
                    
                    {/* Text content */}
                    <div className="flex-1">
                      <h3 className="text-[#24135F] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-[600] mb-2 lg:mb-3 leading-tight">
                        {service.title}
                      </h3>
                      <div className="space-y-1 lg:space-y-1.5 xl:space-y-2">
                        {service.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-start gap-1.5 lg:gap-2">
                            <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-white rounded-full mt-1 lg:mt-1.5 xl:mt-2 flex-shrink-0"></div>
                            <p className="text-white text-[11px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] leading-[1.3] lg:leading-[1.4]">
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