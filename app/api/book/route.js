import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const { fullName, email, phone, callTime, additionalDetails, selectedServices } = await req.json();
    
    if (!fullName || !email || !phone || !callTime || !selectedServices || selectedServices.length === 0) {
      return Response.json({ error: 'جميع الحقول المطلوبة يجب ملؤها.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.CONTACT_EMAIL_USER,
        pass: process.env.CONTACT_EMAIL_PASS,
      },
    });

    // Services mapping for better email formatting
    const servicesMap = {
      'social-media': 'إدارة منصــات التواصــل الاجتماعــــي',
      'design-identity': 'التصميــــم والهويــــــة البـــــصريـــــة',
      'consulting': 'الاستشـــارات والتخطيـــط الاستراتيـــــجي',
      'digital-ads': 'الإعلانات الرقمية والتسويق الــممول',
      'web-development': 'تصميـــــــم وتطويــــر الـمواقع والتطبيقات',
      'media-production': 'الإنتـــاج الإعلامـــي والــــتصويــــر',
      'content-writing': 'كتابـــــــة الـــمحتـــــــوى والترجمـــــــة',
      'seo': 'تحسيــــــن محركــــــــات البحــــــــــث',
      'seasonal-campaigns': 'إدارة الحمــلات الـموسميــة الكبرى',
      '3d-design': 'التصميم ثلاثي الأبعاد والجولات الافتراضية',
      'interior-design': 'التصميـــم الداخلــــي والديكــــور'
    };

    // Format selected services for email
    const selectedServiceTitles = selectedServices.map(serviceId => 
      servicesMap[serviceId] || serviceId
    );

    // Format call time
    const formattedCallTime = callTime ? 
      new Date(callTime).toLocaleString('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }) : 'غير محدد';

    await transporter.sendMail({
      from: `"${fullName}" <${process.env.CONTACT_EMAIL_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL_USER,
      subject: `طلب حجز موعد جديد من ${fullName}`,
      text: `
الاسم الكامل: ${fullName}
البريد الإلكتروني: ${email}
رقم الجوال/الواتساب: ${phone}

وش الخدمـــــــة اللي تحتاجهــــــــــا؟
${selectedServiceTitles.map(service => `• ${service}`).join('\n')}

أفضـــــل وقـــــت للمكالـمـة: ${formattedCallTime}

تفاصيل إضافية:
${additionalDetails || 'لا توجد تفاصيل إضافية'}
      `,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #F94239; border-bottom: 2px solid #F94239; padding-bottom: 10px;">
            طلب حجز موعد جديد
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #24135F; margin-top: 0;">معلومات العميل:</h3>
            <p><strong>الاسم الكامل:</strong> ${fullName}</p>
            <p><strong>البريد الإلكتروني:</strong> ${email}</p>
            <p><strong>رقم الجوال/الواتساب:</strong> ${phone}</p>
          </div>

          <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FFB808;">
            <h3 style="color: #FFB808; margin-top: 0;">وش الخدمـــــــة اللي تحتاجهــــــــــا؟</h3>
            <ul style="list-style-type: none; padding-right: 0;">
              ${selectedServiceTitles.map(service => `<li style="margin: 8px 0; padding: 5px; background-color: #F94239; color: white; border-radius: 4px;">• ${service}</li>`).join('')}
            </ul>
          </div>

          <div style="background-color: #e7f3ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #007bff;">
            <h3 style="color: #007bff; margin-top: 0;">أفضـــــل وقـــــت للمكالـمـة:</h3>
            <p style="font-size: 18px; font-weight: bold;">${formattedCallTime}</p>
          </div>

          ${additionalDetails ? `
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #24135F; margin-top: 0;">تفاصيل إضافية:</h3>
            <p style="white-space: pre-line;">${additionalDetails}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding: 15px; background-color: #24135F; color: white; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-size: 16px;">تم إرسال هذا الطلب من موقع ذا برايت فيجن</p>
          </div>
        </div>
      `
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Booking mailer error:', err);
    return Response.json(
      { error: 'فشل إرسال الطلب. حاول مرة أخرى.', details: err.message || String(err) },
      { status: 500 }
    );
  }
} 