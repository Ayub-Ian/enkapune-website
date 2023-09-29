
import ReservationTemplate from '@/components/emails/ReservationTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    const data = await request.json();
  try {
    const res = await resend.emails.send({
      from: 'admin@enkapune.co.ke',
      to: ['admin@enkapune.co.ke'],
      subject: `RESERVATION: ${data.roomType} ${data.package} - ${data.fullname}`,
      react: ReservationTemplate({data: data}),
    });

    if (!(res.statusCode >= 200 && res.statusCode <= 299)) {
        return NextResponse.json({ error: res.name, message: res.message }, { status: res.statusCode });
      }

    return NextResponse.json({data: res});
  } catch (error) {
    return NextResponse.json( {error} );
  }
}