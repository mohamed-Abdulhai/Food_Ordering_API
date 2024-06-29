import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import { emailTemplate } from './emailTemplate.js';

export const sendEmail = async (email) => {
  try {
    console.log('send email');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const token = jwt.sign({ email: email }, process.env.SECRET_KEY);

    const htmlContent = emailTemplate(token);
    if (typeof htmlContent !== 'string') {
      throw new Error('emailTemplate function must return a string');
    }

    const info = await transporter.sendMail({
      from: `"flavorium" <${process.env.EMAIL}>`, // sender address
      to: email, // list of receivers
      subject: 'Confirm Your Email Address', // Subject line
      html: htmlContent,
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
