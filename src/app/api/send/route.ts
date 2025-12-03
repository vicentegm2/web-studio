import { NextResponse } from 'next/server';

// En un escenario real, usarías un servicio como Resend, SendGrid, o Nodemailer.
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
const recipientEmail = 'vicente280228@gmail.com';

export async function POST(request: Request) {
  const { subject, message } = await request.json();

  try {
    // --- SIMULACIÓN DE ENVÍO DE CORREO ---
    // En una aplicación real, aquí iría la lógica para enviar el correo.
    // Por ejemplo, con Resend:
    /*
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Debe ser un dominio verificado
      to: [recipientEmail],
      subject: subject,
      react: (
        <div>
          <h1>Nuevo mensaje desde tu portfolio</h1>
          <p>{message}</p>
        </div>
      ),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    */

    // Como esto es una simulación, simplemente registramos en la consola
    // y devolvemos una respuesta exitosa.
    console.log('--- Nuevo Mensaje Recibido (Simulación) ---');
    console.log(`Asunto: ${subject}`);
    console.log(`Mensaje: ${message}`);
    console.log('-------------------------------------------');

    // Respondemos como si el correo se hubiera enviado con éxito.
    return NextResponse.json({ message: 'Correo enviado (simulado) exitosamente' }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al procesar la solicitud' }, { status: 500 });
  }
}
