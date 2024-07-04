import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//    host: "smtp.ethereal.email",
//    port: 587,
//    secure: false, // Use `true` for port 465, `false` for all other ports
//    auth: {
//       user: "jesus.terry@ethereal.email",
//       pass: "1C4H4GbBudgVTWD3WG",
//    },
// });
const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
      user: process.env.GMAIL_USER, // Tu dirección de correo electrónico
      pass: process.env.GMAIL_PASS, // Tu contraseña de correo electrónico o app-specific password
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
