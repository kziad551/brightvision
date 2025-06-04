import nodemailer from 'nodemailer';

export const runtime = 'nodejs';         // <-- تشغيل داخل Node
export const dynamic = 'force-dynamic';  // يلغى التخزين المؤقت

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();
    if (!name || !email || !message) {
      // Using Response.json as suggested
      return Response.json({ error: 'جميع الحقول مطلوبة.' }, { status: 400 });
    }

    // More flexible SMTP configuration
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === 'true' || true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || process.env.CONTACT_EMAIL_USER,
        pass: process.env.SMTP_PASS || process.env.CONTACT_EMAIL_PASS,
      },
      // Additional configuration for better reliability
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter configuration
    await transporter.verify();

    const mailOptions = {
      from: `"ذا برايت فيجن - نموذج التواصل" <${process.env.SMTP_USER || process.env.CONTACT_EMAIL_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL_TO || process.env.SMTP_USER || process.env.CONTACT_EMAIL_USER,
      subject: `🔥 رسالة جديدة من ${name} - ذا برايت فيجن`,
      text: `
الاسم: ${name}
البريد الإلكتروني: ${email}
رقم الهاتف: ${phone || 'غير مُحدَّد'}

الرسالة:
${message}
      `,
      html: `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #24135F 0%, #F94239 100%); color: white; border-radius: 15px; overflow: hidden;">
        <div style="background: rgba(255,255,255,0.1); padding: 30px; text-align: center;">
          <h1 style="color: #FFB808; margin: 0; font-size: 28px;">رسالة جديدة من موقع ذا برايت فيجن</h1>
        </div>
        
        <div style="padding: 30px; background: rgba(255,255,255,0.05);">
          <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h3 style="color: #FFB808; margin-top: 0;">معلومات المرسل:</h3>
            <p style="margin: 10px 0;"><strong>الاسم:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>البريد الإلكتروني:</strong> <a href="mailto:${email}" style="color: #FFB808;">${email}</a></p>
            <p style="margin: 10px 0;"><strong>رقم الهاتف:</strong> ${phone ? `<a href="tel:${phone}" style="color: #FFB808;">${phone}</a>` : 'غير مُحدَّد'}</p>
          </div>
          
          <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px;">
            <h3 style="color: #FFB808; margin-top: 0;">الرسالة:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        
        <div style="padding: 20px; text-align: center; background: rgba(0,0,0,0.2);">
          <p style="margin: 0; font-size: 14px; opacity: 0.8;">تم إرسال هذه الرسالة من نموذج التواصل في موقع ذا برايت فيجن</p>
        </div>
      </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ 
      success: true, 
      message: 'تم إرسال رسالتك بنجاح! سنعود إليك قريباً.' 
    }, { status: 200 });

  } catch (err) {
    console.error('SMTP Error:', err);
    
    // Better error messages for debugging
    let errorMessage = 'فشل إرسال الرسالة. حاول مرة أخرى.';
    if (err.code === 'EAUTH') {
      errorMessage = 'خطأ في المصادقة. تحقق من بيانات البريد الإلكتروني.';
    } else if (err.code === 'ECONNECTION') {
      errorMessage = 'فشل الاتصال بخادم البريد الإلكتروني.';
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