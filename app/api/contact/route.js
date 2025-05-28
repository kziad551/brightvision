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

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Explicit host
      port: 465,             // Secure port
      secure: true,          // Use SSL/TLS
      auth: {
        user: process.env.CONTACT_EMAIL_USER,
        pass: process.env.CONTACT_EMAIL_PASS,
      },
    });

    // Updated mailOptions
    await transporter.sendMail({
      from: `"${name}" <${process.env.CONTACT_EMAIL_USER}>`, // Send from your authenticated email, but show sender's name
      replyTo: email, // Set the actual sender's email as reply-to
      to: process.env.CONTACT_EMAIL_USER, // Send to your configured email address
      subject: `رسالة جديدة من ${name}`,
      text: `
الاسم: ${name}
البريد الإلكتروني: ${email}
رقم الهاتف: ${phone || 'غير مُحدَّد'}

الرسالة:
${message}
      `,
      html: `<div dir="rtl">
        <p><b>الاسم:</b> ${name}</p>
        <p><b>البريد الإلكتروني:</b> ${email}</p>
        <p><b>رقم الهاتف:</b> ${phone || 'غير مُحدَّد'}</p>
        <br/>
        <p><b>الرسالة:</b></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      </div>`
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Mailer error:', err); // Keep detailed logging
    return Response.json(
      { error: 'فشل إرسال الرسالة. حاول مرة أخرى.', details: err.message || String(err) },
      { status: 500 }
    );
  }
} 