import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#24135F] text-white">
      {/* Main Content */}
      <div className="pt-32 pb-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          
          {/* من نحن Section */}
          <section className="mb-20 relative">
            {/* Background Icon */}
            <div className="absolute top-0 right-0 opacity-20 z-0">
              <Image 
                src="/assets/aboutusLogos/1.png" 
                alt="من نحن" 
                width={200} 
                height={200}
                className="object-contain"
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-[#FFB808] text-[40px] md:text-[60px] lg:text-[80px] font-[500] mb-8 md:mb-12 text-right">
                من نحــــــن
              </h2>
              
              <div className="text-[16px] md:text-[20px] lg:text-[24px] leading-[1.8] text-right space-y-6 md:space-y-8">
                <p>
                  تأسست شركــــة ذا برايت فيجن في عام 2019، ونمــــــت بسرعــــــة لتصبح من أبرز شركـــــات التسويــــق والإعـــــلان في الشــــرق الأوســـــط.
                </p>
                <p>
                  يقع مقرنـــــا الرئيســـــي في قطـــــــر، ونعمل على التوســــــع في دول الخليـــــــج ولبنــــــان ومصـــــــر.
                </p>
                <p>
                  <span className="text-[#C43642] font-semibold">منذ البدايــــــة، كان هدفنـــــــا واضحـــــــــاً:</span>
                  <br />
                  نسعـــى للعلامــــــــات التجاريــــــة على التميـــــز مـــن خــــــلال أفكــــــــار إبداعيـــــــة واستراتيجيـــــــات ذكيــــــــة تحقــــــق نتائــــــج حقيقيـــــة.
                </p>
                <p>
                  في ذا برايت فيجن، نحن أكثر من مجـــرد شركة تسويــــــق. نحن فريق من الخبراء في مجالات التسويق، الإستراتيجية، التصميم، المحتوى، والإنتاج الإعلامي. نملك خبرة تتجاوز 8 سنوات، ونعمل بشغف على تحويل الأفكار إلى مشاريع ناجحة تواكب سرعة العالم الرقمي اليوم.
                </p>
                <p>
                  سواء كنــــت تطلق مشروعــــــاً جديداً، أو تطور علامتــــــك التجارية، أو تبحث عن توسع حقيقي، نحن الشريك المناسب لصنع هذا التحول.
                </p>
              </div>
            </div>
          </section>

          {/* رسالتنا Section */}
          <section className="mb-20 relative">
            {/* Background Icon */}
            <div className="absolute top-0 right-0 opacity-20 z-0">
              <Image 
                src="/assets/aboutusLogos/2.png" 
                alt="رسالتنا" 
                width={200} 
                height={200}
                className="object-contain"
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-[#FFB808] text-[40px] md:text-[60px] lg:text-[80px] font-[500] mb-8 md:mb-12 text-right">
                رسالتنـــــــــا
              </h2>
              
              <div className="text-[16px] md:text-[20px] lg:text-[24px] leading-[1.8] text-right space-y-6 md:space-y-8">
                <p>
                  رسالتنــــــا فـــــــــي ذا برايت فيجن هـــــي مساعـــــدة الشركـــــــات على النمـــــــو والتحــــــول إلــــى علامـــــــات تجاريــــــة قويـــــــة ومؤثــــــــرة، مـــــن خــــلال أفكــــــــــار إبداعيــــــــــة وحلــــــول تســويقيــــــــــة مدروســـــــــة. نحن لا نقــــدم خدمـــــات فقط، نحن نصنع نتائج.
                </p>
                <p>
                  نصمم المحتوى، نبني الحملــــــات، ونضع خطط تسويقية تحقق الأهداف. نركز دائمـاً على بناء علاقة حقيقيـــــة مع عملائنـــــا، لنحقق معاً نجاحـــــاً طويل الـمدى.
                </p>
              </div>
            </div>
          </section>

          {/* رؤيتنا Section */}
          <section className="mb-20 relative">
            {/* Background Icon */}
            <div className="absolute top-0 right-0 opacity-20 z-0">
              <Image 
                src="/assets/aboutusLogos/3.png" 
                alt="رؤيتنا" 
                width={200} 
                height={200}
                className="object-contain"
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-[#FFB808] text-[40px] md:text-[60px] lg:text-[80px] font-[500] mb-8 md:mb-12 text-right">
                رؤيتــنــــــــــا
              </h2>
              
              <div className="text-[16px] md:text-[20px] lg:text-[24px] leading-[1.8] text-right space-y-6 md:space-y-8">
                <p>
                  نطمح لأن نكون الشركة الرائدة في التسويق والإبداع في الشرق الأوسط، وأن يرتبــط اسم ذا برايت فيجن دائمــــــاً بالجودة، والابتكـــــــــار، والنتائج الـملموسة.
                </p>
                <p>
                  رؤيتنا المستقبلية هي أن نبني علامات تجاريـــة لا تواكب الســــــوق فقط، بل تسبــــق التوقعــــــات وتلهـــــم غيرهــــــــا.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
} 