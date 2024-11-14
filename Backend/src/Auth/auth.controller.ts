// import 'dotenv/config'
// import { createService,usersignservice } from './auth.service';
// import { Context } from "hono";
// import { sign } from "hono/jwt";
// import bycrpt from 'bcrypt'
// import { main } from '../mailer/email';
// import { loginUserSchema } from '../validators';
// import { checkAuthService,registerAuthService } from './auth.service';

// // authenitacation settings register
// export const register = async (c:Context)=>{
//     try{
//           // fullname, email, password ,phone, address
//         //userId = await userService({ fullname: fullname,  phone: phone, address: address})

//         // if(userId) {
//             //authservrce = authService({ userId: userId, email: email, password: password})
//         // }
//         const user = await c.req.json()
//         const password = user.password;
//         const hashedPassword = await bycrpt.hash(password,10);
//         user.password = hashedPassword;

//         const service = await createService(user);
//         if(!service){
//             return c.text("user not created",404)
//         }else{
//           await main({ email: user.email, username: user.user_name });
//             return c.json({msg:service},200)
//         }
//     }catch(error:any){
//         return c.json({error:error.message},400)
//     }
// }



// // login settings
// export const login = async (c: Context) => {
//     try {
//         const { email, password } = await c.req.json();
// // verify auth table email, service will return all data
// // bycrypt compare password
// // get user via email = all user data
// // generate token user id,role 
// // return {
// //user {
// // },
// // token : token
// }//

      
        
//         // Check if user exists in users table
//         const userService = await usersignservice(email);
//         if (!userService) {
//             return c.text("User not found", 404);
//         }

//         const { user_id, password: userPassword, user_name } = userService;

//         // Compare passwords
//         const check = await bycrpt.compare(password, userPassword);
//         if (!check) {
//             return c.text("Password incorrect", 400);
//         }

//         // Check if user is already in the authentication table
//         const authService = await checkAuthService(user_id);
//         if (!authService) {
//             await registerAuthService({ user_id, user_name, password });
//         }

//         // Generate token
//         const payload = {
//             user_name: userService.user_name
//         }
    
//         let secret = process.env.JWT_SECRET as string;
//         const token = await sign(payload, secret);
//         return c.json({ token, user: { ...userService } }, 200);

//     } catch (error: any) {
//         return c.json({ error: error.message }, 400);
//     }
// };

import { Context } from "hono";
import { createService,authLoginService } from './auth.service';
import { main } from "../mailer/email";
import bcrypt from 'bcrypt'
import "dotenv/config" 
import{sign} from "hono/jwt"
import bycrpt from 'bcrypt'

// register
export const register = async (c:Context)=>{
    try{
        const user = await c.req.json()

        const password = user.password;
        const hashedPassword = await bycrpt.hash(password,10);
        user.password = hashedPassword;

        const service = await createService(user);
        
        if(!service){
            return c.text("user not created",404)
        }else{
          await main({ email: user.email, username: user.username });
            return c.json({msg:service},200)
        }
    }catch(error:any){
        return c.json({error:error.message},400)
    }
}


// login
export const login = async (c: Context) => {
    try {
        const { email, password } = await c.req.json();

        // Get user data from authLoginService
        const userExists = await authLoginService(email);

        if (userExists === null) {
            return c.json({ error: "user does not exist" }, 404);
        }

        // Destructure necessary fields from userExists
        const { user_id,user_name, role, password: userPassword,status } = userExists;

        // Check if the user is disabled
        if (status === "disabled") {
            return c.json({ error: "Account is disabled" }, 403);
        }

        const userMatch = await bcrypt.compare(password, userPassword);

        if (!userMatch) {
            return c.json({ error: "Invalid Credentials" }, 401);
        } else {
            const payload = {
                user_id,
                user_name,
                role,
                status,
                exp: Math.floor(Date.now() / 1000) + (60 * 180), // 3 hours expiration
            };

            const secret = process.env.JWT_SECRET as string;
            const token = await sign(payload, secret);

            // Return only the token, role, and user_id
            return c.json({ token, role, user_id,user_name,status }, 200);
        }
    } catch (error: any) {
        return c.json({ error: error.message }, 400);
    }
};

