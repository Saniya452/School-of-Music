import nodemailer from 'nodemailer';

export async function sendEmail({ email, emailType, userId }: { email: string; emailType: string; userId: string }) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,  // SMTP server
      port: Number(process.env.EMAIL_PORT), // Port (587 for TLS, 465 for SSL)
      secure: false, // True for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    const mailOptions = {
      from: `"Music School" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: emailType === 'verify' ? 'Verify Your Email' : 'Reset Your Password',
      text: `Please click on the link below to ${emailType === 'verify' ? 'verify your email' : 'reset your password'}: 
            http://localhost:3000/${emailType === 'verify' ? 'verify' : 'reset-password'}?token=${userId}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Email could not be sent');
  }
}





// import User from '@/models/userModel';
// import nodemailer from 'nodemailer';
// import bcryptjs from 'bcryptjs';
// import { verify } from 'crypto';

// export const sendEmail = async ({email, emailType, userId} : any ) => {
//     try {
//         //Implement the logic to send email
//        const hashedToken = await bcryptjs.hash(userId.toString(), 10) 

//         if (emailType === 'verify') {
//           await User.findByIdAndUpdate(userId, {
//             verifyToken: hashedToken, 
//             verifyTokenExpire: Date.now() + 3600000})
//             console.log('Sending verification email')
//         }
//         else if (emailType === 'reset') {
//           await User.findByIdAndUpdate (userId, {
//             forgetpasswordToken: hashedToken,
//             forgetpasswordTokenExpiry: Date.now() + 3600000})
//             console.log('Sending reset password email')
//         }
//         const transporter = nodemailer.createTransport({ //TODO add your email service
//             host: "smtp.mailersend.net",
//             port: 587,
//             secure: false, // true for port 465, false for other ports
//             auth: {
//               user: "MS_0XGFlS@trial-zr6ke4n365mlon12.mlsender.net", // should not be here ❌
//               pass: "mssp.9WFE1it.vywj2lpxrn147oqz.9wI8pdQ", // ❌
//             }, 
//           });

//         const mailOptions = {
//             from: 'sania@shaikh12.ai', 
//             to: email, 
//             subject: emailType === 'verify' ? 'Verify your email' : 'Reset your password', 
//             html: `<p> Click <a href = "${process.env.DOMAIN}/
//             verifyemail?token${hashedToken}">Here</a> to 
//             ${emailType === 'verify' ? "verify your email": "reset your password"}
//             or copy paste the link below in your browser. 
//             </br> ${process.env.DOMAIN}/verify your email?token ${hashedToken}  
//             </P>`,
//           }
//           const mailResponse = await transporter.sendMail(mailOptions)
//           return mailResponse

//     } catch (error: any) {
//         throw new Error("Error sending email");
                
//     }
// }