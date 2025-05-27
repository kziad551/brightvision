export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#24135F] text-white">
      {/* Main Content */}
      <div className="pt-40 pb-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          
          {/* Hero Section */}
          <section className="mb-20 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-white text-[120px] font-[500] leading-[1.2] mb-4">
                ابــــــدأ مشروعــــــــك
              </h1>
              <h2 className="text-[#F94239] text-[120px] font-[500] leading-[1.2] mb-16">
                معنــــــــــا اليــــــــــوم
              </h2>
              
              <p className="text-white text-[24px] leading-[1.8] mb-8 text-right max-w-4xl mx-auto">
                نحــــن في ذا برايت فيجن، نؤمـــــن بأن التواصــــــل هو الخطـــــوة الأولـــــى نحـــــــو النجــــــاح.
              </p>
              <p className="text-white text-[24px] leading-[1.8] mb-16 text-right max-w-4xl mx-auto">
                إذا كان لديك فكرة أو مشروع وتبحث عن شريك يساعدك في تحقيقه، <span className="text-[#F94239]">فنحن هنا لخدمتك.</span>
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Left Column - Contact Details */}
              <div className="text-right space-y-12">
                
                {/* Working Hours */}
                <div>
                  <h3 className="text-[#FFB808] text-[40px] font-[600] mb-6">
                    ساعات العمل:
                  </h3>
                  <p className="text-white text-[24px] leading-[1.6]">
                    الأحــــــد – الخميـــــس: 9:00 صباحًـــــا – 6:00 مســــــاءً <span className="text-[#F94239]">(بتوقيــــت الدوحـــــة)</span>
                  </p>
                </div>

                {/* Location */}
                <div>
                  <h3 className="text-[#FFB808] text-[40px] font-[600] mb-6">
                    موقعنــــــــــا
                  </h3>
                  <p className="text-white text-[24px] leading-[1.6]">
                    قطــــــر، الدوحــــــة، السد، شارع الـمرقاب الجديد، مبنى 50، الدور 1، مكتــــــب 4
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-[#FFB808] text-[40px] font-[600] mb-6">
                    البريــــــد الإلكترونــــــي:
                  </h3>
                  <a 
                    href="mailto:info@thebrightvision.qa" 
                    className="text-white text-[24px] leading-[1.6] hover:text-[#F94239] transition-colors"
                  >
                    info@thebrightvision.qa
                  </a>
                </div>
              </div>

              {/* Right Column - Map */}
              <div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.8234567890123!2d51.5010464!3d25.273629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x19a61338009f4a32!2s7GF2%2BFC%20Doha%20Qatar!5e0!3m2!1sen!2sqa!4v1234567890123!5m2!1sen!2sqa"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقع ذا برايت فيجن"
                  ></iframe>
                </div>
                
                {/* Map Link */}
                <div className="mt-4 text-center">
                  <a
                    href="https://www.google.com/maps/dir//7GF2%2BFC+Doha+Qatar/@25.273629,51.5010464,17.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e45c534ffdce87f:0x19a61338009f4a32!2m2!1d51.5010625!2d25.2736875?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#F94239] text-white px-8 py-3 rounded-full text-[18px] font-[500] hover:bg-[#d63529] transition-colors"
                  >
                    احصل على الاتجاهات
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="mb-20">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 md:p-12">
              <h3 className="text-[#FFB808] text-[40px] font-[600] mb-8 text-right">
                تواصل معنا
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-[18px] mb-2 text-right">الاسم</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#F94239] text-right"
                      placeholder="اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-[18px] mb-2 text-right">البريد الإلكتروني</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#F94239] text-right"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-[18px] mb-2 text-right">رقم الهاتف</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#F94239] text-right"
                    placeholder="+974 XXXX XXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-[18px] mb-2 text-right">الرسالة</label>
                  <textarea
                    rows="6"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#F94239] text-right resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#F94239] text-white px-12 py-4 rounded-full text-[20px] font-[500] hover:bg-[#d63529] transition-colors"
                  >
                    إرسال الرسالة
                  </button>
                </div>
              </form>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
} 