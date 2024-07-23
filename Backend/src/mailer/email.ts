import "dotenv/config";
import { format } from "path";
import mailer from 'nodemailer';
import ejs from 'ejs';

// Create reusable transporter object
const createTransporter = () => {
  return mailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
};

// Render ejs template
const renderTemplate = async (templatePath: string, data: object): Promise<string> => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, data, (err, template) => {
      if (err) {
        return reject(err);
      }
      resolve(template);
    });
  });
};

// Send email
const sendEmail = async (to: string, subject: string, html: string) => {
  const transporter = createTransporter();
  const info = await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject,
    html,
  });
  console.log('Message sent: %s', info.messageId);
  console.log(info.accepted);
};

export const main = async (user: { email: string, username: string }) => {
  try {
    const templatePath = './src/mailer/main.ejs';
    const template = await renderTemplate(templatePath, { user: user.username });
    await sendEmail(user.email, 'Account Registration Confirmation', template);
  } catch (err) {
    console.log('Error: ', err);
  }
};

export const reset = async (email: string, link: string) => {
  try {
    const templatePath = './src/mailer/Reset.ejs';
    const template = await renderTemplate(templatePath, { link });
    await sendEmail(email, 'Reset Password Confirmation', template);
  } catch (err) {
    console.log('Error: ', err);
  }
};
