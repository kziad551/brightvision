import nodemailer from 'nodemailer';

// Last updated: 2025-06-12 - Gmail SMTP hardcoded for production
/*
REQUIRED ENVIRONMENT VARIABLES (.env.local):

For Gmail:
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-gmail-app-password (16 characters from Google)
CONTACT_EMAIL_TO=info@thebrightvision.qa

For SendGrid:
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
CONTACT_EMAIL_TO=info@thebrightvision.qa

For Outlook/Hotmail:
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-outlook@outlook.com
SMTP_PASS=your-outlook-password
CONTACT_EMAIL_TO=info@thebrightvision.qa
*/

export const runtime = 'nodejs';         // <-- تشغيل داخل Node
export const dynamic = 'force-dynamic';  // يلغى التخزين المؤقت

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();
    if (!name || !email || !message) {
      // Using Response.json as suggested
      return Response.json({ error: 'جميع الحقول مطلوبة.' }, { status: 400 });
    }

    // Debug: Log environment variables (without exposing sensitive data)
    console.log('SMTP Configuration Check:');
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

    // More flexible SMTP configuration
    const transporter = nodemailer.createTransport(smtpConfig);

    // Verify transporter configuration
    console.log('Verifying SMTP connection...');
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    const mailOptions = {
      from: `"ذا برايت فيجن - نموذج التواصل" <kziad551@gmail.com>`,
      replyTo: email,
      to: 'kziad551@gmail.com',
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

    console.log('Sending email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);

    return Response.json({ 
      success: true, 
      message: 'تم إرسال رسالتك بنجاح! سنعود إليك قريباً.' 
    }, { status: 200 });

  } catch (err) {
    console.error('SMTP Error Details:', {
      message: err.message,
      code: err.code,
      command: err.command,
      response: err.response,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
    
    // Better error messages for debugging
    let errorMessage = 'فشل إرسال الرسالة. حاول مرة أخرى.';
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