import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
   },
});

export async function POST(req) {
   try {
      const data = await req.json();
      const { email } = data;

      // Configurar el correo electrónico
      const mailOptions = {
         from: process.env.GMAIL_USER,
         to: process.env.HC_MAIL,
         subject: '⭐⭐Nueva suscripción⭐⭐',
         text: `Un nuevo usuario se ha suscrito con el correo:
          ${email}`,
      };

      // Enviar el correo
      await transporter.sendMail(mailOptions);
      return new Response(JSON.stringify({ message: 'Correo enviado con éxito' }), {
         status: 200,
         headers: {
            'Content-Type': 'application/json',
         },
      });
   } catch (error) {
      console.error('Error al enviar el correo:', error);
      return new Response(JSON.stringify({ message: 'Error al enviar el correo' }), {
         status: 500,
         headers: {
            'Content-Type': 'application/json',
         },
      });
   }
}
