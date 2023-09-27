
// import ReservationTemplate from '@/components/emails/ReservationTemplate';
// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request) {
//     const data = await request.json();
//   try {
//     const res = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to: ['reservations@enkapune.co.ke'],
//       subject: `RESERVATION: ${data.roomType} ${data.package} - ${data.fullname}`,
//       react: ReservationTemplate({data: data}),
//     });

//     if (!(res.statusCode >= 200 && res.statusCode <= 299)) {
//         return NextResponse.json({ error: res.name, message: res.message }, { status: res.statusCode });
//       }

//     return NextResponse.json({data: res});
//   } catch (error) {
//     return NextResponse.json( {error} );
//   }
// }
import nodemailer from 'nodemailer';
//-----------------------------------------------------------------------------
export async function POST(request) {
  const transporter = nodemailer.createTransport({
    service: "mail.enkapune.co.ke.",
    port:256,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_SENDER,
    to: process.env.NODEMAILER_RECEIVER,
    subject: 'Test email',
    text: 'This is a test email',
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}