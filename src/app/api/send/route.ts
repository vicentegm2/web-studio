import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const recipientEmail = 'vicente280228@gmail.com';

export async function POST(request: Request) {
  const { subject, message } = await request.json();

  try {
    // Verificar que la API key esté configurada
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY no está configurada');
      return NextResponse.json(
        { error: 'Configuración de correo no disponible' },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [recipientEmail],
      subject: `[Portfolio] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #243A73;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background-color: #f4f4f4;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .message-box {
                background-color: white;
                padding: 20px;
                border-radius: 8px;
                margin-top: 20px;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                font-size: 12px;
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Nuevo mensaje desde tu portfolio</h1>
              </div>
              <div class="content">
                <p><strong>Asunto:</strong> ${subject}</p>
                <div class="message-box">
                  <p><strong>Mensaje:</strong></p>
                  <p>${message.replace(/\n/g, '<br>')}</p>
                </div>
                <div class="footer">
                  <p>Este mensaje fue enviado desde el formulario de contacto de tu portfolio web.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Error al enviar correo:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log('Correo enviado exitosamente:', data);
    return NextResponse.json({ message: 'Correo enviado exitosamente', data }, { status: 200 });

  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    return NextResponse.json({ error: 'Error al procesar la solicitud' }, { status: 500 });
  }
}
