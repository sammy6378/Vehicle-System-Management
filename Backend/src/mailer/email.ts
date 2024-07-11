
import "dotenv/config"
import { format } from "path";
var mailer = require('nodemailer')
let ejs = require('ejs')

 export const main = async (user:{email:string, username:string}) =>{

 const transporter = mailer.createTransport({
        host:'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass:  process.env.PASS
        }
    });

    const templatePath = './src/mailer/main.ejs';
   
    ejs.renderFile(templatePath,{ user:user.username}, async function <T>(err: T,template: T){
        if(err){
            console.log('error: ',err);
        }else{
            const info = await transporter.sendMail({
                from: process.env.EMAIL,
                to: user.email,
                subject: 'Account Registration Confirmation',
                html: template
            })
            console.log('Message sent: %s', info.messageId)
            console.log(info.accepted);
        }
    })
   
 }

 