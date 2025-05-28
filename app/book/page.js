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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

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

  // Generate available dates (Sunday to Thursday only)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 30; i++) { // Next 30 days
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // 0 = Sunday, 1 = Monday, ..., 4 = Thursday
      const dayOfWeek = date.getDay();
      if (dayOfWeek >= 0 && dayOfWeek <= 4) { // Sunday to Thursday
        dates.push(date);
      }
    }
    return dates;
  };

  // Generate available times (10 AM to 5 PM, hourly)
  const getAvailableTimes = () => {
    const times = [];
    for (let hour = 10; hour <= 17; hour++) {
      const time12 = hour > 12 ? `${hour - 12}:00 مساءً` : `${hour}:00 صباحاً`;
      const time24 = `${hour.toString().padStart(2, '0')}:00`;
      times.push({ display: time12, value: time24 });
    }
    return times;
  };

  const availableDates = getAvailableDates();
  const availableTimes = getAvailableTimes();

  const handleDateTimeChange = (type, value) => {
    const currentDateTime = formData.callTime ? new Date(formData.callTime) : new Date();
    
    if (type === 'date') {
      const newDate = new Date(value);
      newDate.setHours(currentDateTime.getHours(), currentDateTime.getMinutes());
      handleInputChange('callTime', newDate.toISOString().slice(0, 16));
    } else if (type === 'time') {
      const [hours, minutes] = value.split(':');
      const currentDate = formData.callTime ? new Date(formData.callTime) : new Date();
      currentDate.setHours(parseInt(hours), parseInt(minutes));
      handleInputChange('callTime', currentDate.toISOString().slice(0, 16));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          selectedServices: selectedServices
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          callTime: '',
          additionalDetails: ''
        });
        setSelectedServices([]);
      } else {
        setError(data.error || 'فشل إرسال الطلب. حاول مرة أخرى.');
      }
    } catch (error) {
      setError('فشل إرسال الطلب. حاول مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#24135F] text-white">
      <div className="pt-40 pb-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          
          {/* Hero Section */}
          <section className="mb-16">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-white text-[24px] md:text-[36px] lg:text-[50px] font-[500] leading-[1.3] mb-4 text-right w-full block">
                في ذا برايـــــت فيجن، نؤمن أن كل فكرة عظيمة تبدأ بخطوة.
              </h1>
              <h2 className="text-[#F94239] text-[24px] md:text-[36px] lg:text-[50px] font-[500] leading-[1.3] mb-12 text-right w-full block md:pr-[100px] lg:pr-[200px]">
                خبرنا عن مشروعك، وخلنا نساعدك نطوّره ونعزز حضــــوره...
              </h2>
            </div>
          </section>

          {/* Form Section */}
          <section>
        
            <h3 className="text-[#FFB808] text-[24px] md:text-[32px] lg:text-[40px] font-[600] mb-8 text-right">
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
                <h3 className="text-[#FFB808] text-[24px] md:text-[32px] lg:text-[40px] font-[600] mb-8 text-right">
                  وش الخدمـــــــة اللي تحتاجهــــــــــا؟
                </h3>
                
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleServiceToggle(service.id)}
                      className="relative p-4 md:p-6 bg-transparent cursor-pointer transition-all duration-300 hover:bg-white/5"
                    >
                      {/* Checkbox */}
                      <div className="absolute top-4 md:top-6 right-4 md:right-6">
                        <div className={`w-5 h-5 md:w-6 md:h-6 border-2 border-[#F94239] rounded flex items-center justify-center ${
                          selectedServices.includes(service.id) ? 'bg-[#F94239]' : 'bg-transparent'
                        }`}>
                          {selectedServices.includes(service.id) && (
                            <span className="text-white text-[12px] md:text-[14px]">✓</span>
                          )}
                        </div>
                      </div>
                      
                      <h4 className="text-white text-[14px] md:text-[16px] lg:text-[17px] font-[600] mb-3 md:mb-4 text-right leading-[1.4] pr-8 md:pr-10">
                        {service.title}
                      </h4>
                      <ul className="space-y-1 md:space-y-2">
                        {service.items.map((item, index) => (
                          <li key={index} className="text-white text-[11px] md:text-[13px] lg:text-[14px] text-right leading-[1.5] flex items-start">
                            <span className="text-[#F94239] ml-1 md:ml-2 mt-1">•</span>
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
                  أفضـــــل وقـــــت للمكالـمـة <span className="text-[#F94239]">*</span>
                </label>
                <div className="flex flex-col md:flex-row gap-4">
                  <select
                    value={formData.callTime ? new Date(formData.callTime).toISOString().split('T')[0] : ''}
                    onChange={(e) => handleDateTimeChange('date', e.target.value)}
                    className="w-full px-4 py-4 bg-[#24135F] border-2 border-[#F94239] rounded-[20px] text-white focus:outline-none focus:border-[#FFB808] text-right text-[18px]"
                    required
                  >
                    <option value="" className="bg-[#24135F] text-white">اختر التاريخ</option>
                    {availableDates.map((date) => (
                      <option key={date.toISOString().split('T')[0]} value={date.toISOString().split('T')[0]} className="bg-[#24135F] text-white">
                        {date.toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </option>
                    ))}
                  </select>
                  <select
                    value={formData.callTime ? new Date(formData.callTime).toISOString().split('T')[1].substring(0, 5) : ''}
                    onChange={(e) => handleDateTimeChange('time', e.target.value)}
                    className="w-full px-4 py-4 bg-[#24135F] border-2 border-[#F94239] rounded-[20px] text-white focus:outline-none focus:border-[#FFB808] text-right text-[18px]"
                    required
                  >
                    <option value="" className="bg-[#24135F] text-white">اختر الوقت</option>
                    {availableTimes.map((time) => (
                      <option key={time.value} value={time.value} className="bg-[#24135F] text-white">
                        {time.display}
                      </option>
                    ))}
                  </select>
                </div>
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
                  disabled={loading}
                  className="bg-[#F94239] text-white px-16 py-4 rounded-full text-[22px] font-[600] hover:bg-[#d63529] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'جاري الإرسال...' : 'ارســــــال الطلـــــــب'}
                </button>

                {/* Success and Error Messages - Moved under button */}
                {success && (
                  <div className="bg-green-500/20 border border-green-500 text-green-400 px-6 py-4 rounded-lg mt-6 text-center">
                    {success}
                  </div>
                )}
                {error && (
                  <div className="bg-red-500/20 border border-red-500 text-red-400 px-6 py-4 rounded-lg mt-6 text-center">
                    {error}
                  </div>
                )}
              </div>

            </form>
          </section>

        </div>
      </div>
    </div>
  );
} 