import nodemailer from 'nodemailer';

// Last updated: 2025-06-12 - Gmail SMTP hardcoded for production

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const { fullName, email, phone, callTime, additionalDetails, selectedServices } = await req.json();
    
    if (!fullName || !email || !phone || !callTime || !selectedServices || selectedServices.length === 0) {
      return Response.json({ error: 'جميع الحقول المطلوبة يجب ملؤها.' }, { status: 400 });
    }

    // Debug: Log environment variables (without exposing sensitive data)
    console.log('SMTP Configuration Check for Booking:');
    console.log('SMTP_HOST:', process.env.SMTP_HOST || 'smtp.gmail.com');
    console.log('SMTP_PORT:', parseInt(process.env.SMTP_PORT) || 465);
    console.log('SMTP_USER exists:', !!process.env.SMTP_USER);
    console.log('SMTP_PASS exists:', !!process.env.SMTP_PASS);
    console.log('CONTACT_EMAIL_TO exists:', !!process.env.CONTACT_EMAIL_TO);
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('VERCEL_ENV:', process.env.VERCEL_ENV);
    
    // Additional debug for missing variables
    if (!process.env.SMTP_USER && !process.env.CONTACT_EMAIL_USER) {
      console.error('❌ NO SMTP_USER OR CONTACT_EMAIL_USER FOUND!');
    }
    if (!process.env.SMTP_PASS && !process.env.CONTACT_EMAIL_PASS) {
      console.error('❌ NO SMTP_PASS OR CONTACT_EMAIL_PASS FOUND!');
    }

    // Hardcoded SMTP configuration for production
    const smtpConfig = {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'kziad551@gmail.com',
        pass: 'qgphyzctabubgse',
      },
      tls: {
        rejectUnauthorized: false
      },
      debug: process.env.NODE_ENV === 'development',
      logger: process.env.NODE_ENV === 'development'
    };

    const transporter = nodemailer.createTransport(smtpConfig);

    // Verify transporter configuration
    console.log('Verifying SMTP connection for booking...');
    await transporter.verify();
    console.log('SMTP connection verified successfully for booking');

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

    const mailOptions = {
      from: `"ذا برايت فيجن - طلب حجز موعد" <kziad551@gmail.com>`,
      replyTo: email,
      to: 'kziad551@gmail.com',
      subject: `🔥 طلب حجز موعد جديد من ${fullName} - ذا برايت فيجن`,
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
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #24135F 0%, #F94239 100%); color: white; border-radius: 15px; overflow: hidden;">
          <div style="background: rgba(255,255,255,0.1); padding: 30px; text-align: center;">
            <h1 style="color: #FFB808; margin: 0; font-size: 28px;">طلب حجز موعد جديد من موقع ذا برايت فيجن</h1>
          </div>
          
          <div style="padding: 30px; background: rgba(255,255,255,0.05);">
            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
              <h3 style="color: #FFB808; margin-top: 0;">معلومات العميل:</h3>
              <p style="margin: 10px 0;"><strong>الاسم الكامل:</strong> ${fullName}</p>
              <p style="margin: 10px 0;"><strong>البريد الإلكتروني:</strong> <a href="mailto:${email}" style="color: #FFB808;">${email}</a></p>
              <p style="margin: 10px 0;"><strong>رقم الجوال/الواتساب:</strong> <a href="tel:${phone}" style="color: #FFB808;">${phone}</a></p>
            </div>

            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
              <h3 style="color: #FFB808; margin-top: 0;">وش الخدمـــــــة اللي تحتاجهــــــــــا؟</h3>
              <ul style="list-style-type: none; padding-right: 0; margin: 0;">
                ${selectedServiceTitles.map(service => `<li style="margin: 8px 0; padding: 10px; background-color: rgba(249, 66, 57, 0.8); border-radius: 8px; border-left: 4px solid #FFB808;">• ${service}</li>`).join('')}
              </ul>
            </div>

            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
              <h3 style="color: #FFB808; margin-top: 0;">أفضـــــل وقـــــت للمكالـمـة:</h3>
              <p style="font-size: 18px; font-weight: bold; color: #FFB808; background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; text-align: center;">${formattedCallTime}</p>
            </div>

            ${additionalDetails ? `
            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px;">
              <h3 style="color: #FFB808; margin-top: 0;">تفاصيل إضافية:</h3>
              <p style="line-height: 1.6; white-space: pre-wrap;">${additionalDetails}</p>
            </div>
            ` : ''}
          </div>
          
          <div style="padding: 20px; text-align: center; background: rgba(0,0,0,0.2);">
            <p style="margin: 0; font-size: 14px; opacity: 0.8;">تم إرسال هذا الطلب من نموذج حجز الموعد في موقع ذا برايت فيجن</p>
          </div>
        </div>
      `
    };

    console.log('Sending booking email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    const result = await transporter.sendMail(mailOptions);
    console.log('Booking email sent successfully:', result.messageId);

    return Response.json({ 
      success: true,
      message: 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً.'
    }, { status: 200 });

  } catch (err) {
    console.error('Booking SMTP Error Details:', {
      message: err.message,
      code: err.code,
      command: err.command,
      response: err.response,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
    
    // Better error messages for debugging
    let errorMessage = 'فشل إرسال الطلب. حاول مرة أخرى.';
    if (err.code === 'EAUTH') {
      errorMessage = 'خطأ في المصادقة. تحقق من بيانات البريد الإلكتروني.';
    } else if (err.code === 'ECONNECTION') {
      errorMessage = 'فشل الاتصال بخادم البريد الإلكتروني.';
    } else if (err.responseCode === 535) {
      errorMessage = 'خطأ في المصادقة. قد تحتاج إلى تمكين "كلمات المرور للتطبيقات" في Gmail.';
    }
    
    return Response.json(
      { 
        error: errorMessage, 
        details: process.env.NODE_ENV === 'development' ? err.message : undefined 
      },
      { status: 500 }
    );
  }
} 