'use client';
import { useState } from 'react';

export default function BookPage() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    callTime: '',
    additionalDetails: ''
  });

  const services = [
    {
      id: 'social-media',
      title: 'إدارة منصــات التواصــل الاجتماعــــي',
      items: [
        'إدارة حسابات انستغرام، فيسبوك، لينكد ان، سناب شات وغيرها',
        'صناعـــــــة الـمحتـــــــوى والجدولــــــة اليوميـــــة',
        'كتـــــــابـــــــة الكــــــــــابشنـــــــــات باحترافيــــــــــة',
        'التفاعـــــــل مع الجمهــــــــور وتحليـــــــــل الأداء'
      ]
    },
    {
      id: 'design-identity',
      title: 'التصميــــم والهويــــــة البـــــصريـــــة',
      items: [
        'تصميم الشعار والهوية البصرية',
        'تطويــــر الـملفـــــــات التعريفيــة',
        'تحريــــــــك الشعـــــــــارات',
        'إعـــــــــادة ابتكــــــــــار الهويـــــــــات'
      ]
    },
    {
      id: 'consulting',
      title: 'الاستشـــارات والتخطيـــط الاستراتيـــــجي',
      items: [
        'استشــــــــارة العلامة التجارية وتطوير الهويــة',
        'تحليــــــــــل الــــــــــســـــــوق والــــــــمنافسيــــــن',
        'بناء استراتيجيات تسويقية وإطلاق المنتجات'
      ]
    },
    {
      id: 'digital-ads',
      title: 'الإعلانات الرقمية والتسويق الــممول',
      items: [
        'إدارة حمــــــــلات جوجــــــــــل وميتــــــــــا',
        'الحملات عبر تيك توك وسناب شـــــــــات',
        'التسويق عبـــــــر الـمؤثريـــــن',
        'إعداد الـميزانيات وتحقيق أفضل عائد على الاستثمار'
      ]
    },
    {
      id: 'web-development',
      title: 'تصميـــــــم وتطويــــر الـمواقع والتطبيقات',
      items: [
        'تصميــم مواقـــــــع تعريفيــــــة احترافيــــــــــة',
        'تطوير المتاجر الإلكترونية بأنظمتها المختلفة',
        'تصــــــميــــــــم متـــــــــاجــــــــر شوبيفــــــــــاي',
        'برمجــــــــة تطبيقـــــــات iOS وAndroid',
        'تحسيـــــــن تجربة الــــمستخدم UX/UI',
        'الصيانـــــــة الدوريـــــــة والدعــــــــم الفنــــي'
      ]
    },
    {
      id: 'media-production',
      title: 'الإنتـــاج الإعلامـــي والــــتصويــــر',
      items: [
        'تصويـــــــر فوتوغرافــــــي تجـــــاري وإعلانــــــــي',
        'فيديوهات سينمائية قصيـــــــــرة وإعلانيـــــة',
        'مونتاج احترافي باستخدام أحدث التقنيات',
        'فيديوهــــــــــات تعريفيــــــــــة وانيميشـــــــــن',
        'مؤثرات بصرية متقدمة (VFX – After Effects)',
        'فيديوهات مخصصة للشاشات الرقمية والليد'
      ]
    },
    {
      id: 'content-writing',
      title: 'كتابـــــــة الـــمحتـــــــوى والترجمـــــــة',
      items: [
        'كتابة الـمحتوى التسويقي والإعلاني',
        'محتوى الـمواقع ووسائل التواصــل',
        'بيــانــــــات صحفيـــــــــة ومقــــــــــالات',
        'ترجمــــــــة إبداعيـــة (عربي/إنجليزي)',
        'صياغـــــــة قصــــص العلامة التجارية'
      ]
    },
    {
      id: 'seo',
      title: 'تحسيــــــن محركــــــــات البحــــــــــث',
      items: [
        'تحسين بنية الموقع والكلمات المفتاحية',
        'محتــــــــوى متـــــوافـــــــــق مــــــــــع SEO',
        'تحسيـــــــــن ظهــــــــور الـموقــــــــع محليًا',
        'ربط وتحسيــــــــن جوجـــــــــل بزنــــــس',
        'تقاريــــــــر أداء وتحليـــــــلات شهريـــــــة'
      ]
    },
    {
      id: 'seasonal-campaigns',
      title: 'إدارة الحمــلات الـموسميــة الكبرى',
      items: [
        'وضــــــع فكرة الحملــــــة وتنفيذهـــــــا إبداعيًــــــا',
        'إدارة شاملـــــــة لجميــــــع مكونــــــــات الحملـــة',
        'تصميـــــــم الهويـــــــة الـموسميـــــــة والإعلانات',
        'استخدام المؤثرين والتسويق متعدد القنوات',
        'تقارير تحليل الأداء والتوصيات الـمستقبليــــة'
      ]
    },
    {
      id: '3d-design',
      title: 'التصميم ثلاثي الأبعاد والجولات الافتراضية',
      items: [
        'تــــــصميــــــــــم نـــــمــــــــاذج 3D Modeling',
        'إخــــــــراج واقعـــــــــي للصــور (Rendering)',
        'جولات افتراضية (Virtual Tours – VR)',
        'إعداد الـمخططـــــــات التنفيذيــــة والإنشائية'
      ]
    },
    {
      id: 'interior-design',
      title: 'التصميـــم الداخلــــي والديكــــور',
      items: [
        'تصميم المفهوم الداخلي وتخطيط المساحات',
        'اختيـــــار الألـــــــــوان والإضـــــــــاءة والـمــــــواد',
        'تصميم الأثاث والإكسســــوارات والستائـــــر',
        'ديكــــــــــور الـمناسبــــــــــات والـمعــــــــــارض',
        'تنفيــــــــذ الأسقــــــــــف، الجــــدران، والأرضيات'
      ]
    }
  ];

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Selected Services:', selectedServices);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-[#24135F] text-white">
      <div className="pt-40 pb-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          
          {/* Hero Section */}
          <section className="mb-16">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-white text-[50px] font-[500] leading-[1.3] mb-4 text-right w-full block">
                في ذا برايـــــت فيجن، نؤمن أن كل فكرة عظيمة تبدأ بخطوة.
              </h1>
              <h2 className="text-[#F94239] text-[50px] font-[500] leading-[1.3] mb-12 text-right w-full block" style={{paddingRight: '200px'}}>
                خبرنا عن مشروعك، وخلنا نساعدك نطوّره ونعزز حضــــوره...
              </h2>
            </div>
          </section>

          {/* Form Section */}
          <section>
        
            <h3 className="text-[#FFB808] text-[40px] font-[600] mb-8 text-right">
                حدد موعـــــد اتصـــــال او اجتمـــــاع وحنا حاضرين
              </h3>
          

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-white text-[20px] mb-3 text-right font-[500]">
                    الاســــم الكامــــــل <span className="text-[#F94239]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full px-4 py-4 bg-transparent border-2 border-[#F94239] rounded-[20px] text-white placeholder-white/60 focus:outline-none focus:border-[#FFB808] text-right text-[18px]"
                    placeholder="اكتــــب اسمـــك هنــــا"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-[20px] mb-3 text-right font-[500]">
                    البريــــد الإلكترونـــــي <span className="text-[#F94239]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-4 bg-transparent border-2 border-[#F94239] rounded-[20px] text-white placeholder-white/60 focus:outline-none focus:border-[#FFB808] text-right text-[18px]"
                    placeholder="بريدك الإلكتروني"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-[20px] mb-3 text-right font-[500]">
                  رقم الجـــــوال / الواتســـــــاب <span className="text-[#F94239]">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-4 bg-transparent border-2 border-[#F94239] rounded-[20px] text-white placeholder-white/60 focus:outline-none focus:border-[#FFB808] text-right text-[18px]"
                  placeholder="00000000000"
                />
              </div>

              {/* Services Selection */}
              <div className="mt-12">
                <h3 className="text-[#FFB808] text-[40px] font-[600] mb-8 text-right">
                  وش الخدمـــــــة اللي تحتاجهــــــــــا؟
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleServiceToggle(service.id)}
                      className="relative p-6 bg-transparent cursor-pointer transition-all duration-300 hover:bg-white/5"
                    >
                      {/* Checkbox */}
                      <div className="absolute top-6 right-6">
                        <div className={`w-6 h-6 border-2 border-[#F94239] rounded flex items-center justify-center ${
                          selectedServices.includes(service.id) ? 'bg-[#F94239]' : 'bg-transparent'
                        }`}>
                          {selectedServices.includes(service.id) && (
                            <span className="text-white text-[14px]">✓</span>
                          )}
                        </div>
                      </div>
                      
                      <h4 className="text-white text-[17px] font-[600] mb-4 text-right leading-[1.4] pr-10">
                        {service.title}
                      </h4>
                      <ul className="space-y-2">
                        {service.items.map((item, index) => (
                          <li key={index} className="text-white text-[14px] text-right leading-[1.5] flex items-start">
                            <span className="text-[#F94239] ml-2 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call Time */}
              <div className="mt-12">
                <label className="block text-white text-[20px] mb-3 text-right font-[500]">
                  أفضـــــل وقـــــت للمكالـمـة
                </label>
                <input
                  type="datetime-local"
                  value={formData.callTime}
                  onChange={(e) => handleInputChange('callTime', e.target.value)}
                  className="px-4 py-4 bg-transparent border-2 border-[#F94239] rounded-[20px] text-white focus:outline-none focus:border-[#FFB808] text-right text-[18px] max-w-md"
                />
                <p className="text-white/60 text-[16px] mt-2 text-right">(خانة اختيـــارية)</p>
              </div>

              {/* Additional Details */}
              <div className="mt-12">
                <label className="block text-white text-[20px] mb-3 text-right font-[500]">
                  إذا عندك تفاصيـــــــل إضافيــــــة أو فكــــــرة خاصـــــــة، خبرنا عنهـــــــا؟ <span className="text-[#F94239]">(خانة اختيـــارية)</span>
                </label>
                <textarea
                  rows="6"
                  value={formData.additionalDetails}
                  onChange={(e) => handleInputChange('additionalDetails', e.target.value)}
                  className="w-full px-4 py-4 bg-transparent border-2 border-[#F94239] rounded-[20px] text-white placeholder-white/60 focus:outline-none focus:border-[#FFB808] text-right text-[18px] resize-none"
                  placeholder="اكتب تفاصيلك هنا..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center mt-12">
                <button
                  type="submit"
                  className="bg-[#F94239] text-white px-16 py-4 rounded-full text-[22px] font-[600] hover:bg-[#d63529] transition-colors"
                >
                  ارســــــال الطلـــــــب
                </button>
              </div>

            </form>
          </section>

        </div>
      </div>
    </div>
  );
} 