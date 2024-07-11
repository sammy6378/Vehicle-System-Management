import 'dotenv/config'
import { createService,usersignservice } from './auth.service';
import { Context } from "hono";
import { sign } from "hono/jwt";
import bycrpt from 'bcrypt'
import { main } from '../mailer/email';
import { loginUserSchema } from '../validators';
import { checkAuthService,registerAuthService } from './auth.service';

// authenitacation settings register
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
          await main({ email: user.email, username: user.user_name });
            return c.json({msg:service},200)
        }
    }catch(error:any){
        return c.json({error:error.message},400)
    }
}



// login settings
export const login = async (c: Context) => {
    try {
        const { email, password } = await c.req.json();
        
        // Check if user exists in users table
        const userService = await usersignservice(email);
        if (!userService) {
            return c.text("User not found", 404);
        }

        const { user_id, password: userPassword, user_name } = userService;

        // Compare passwords
        const check = await bycrpt.compare(password, userPassword);
        if (!check) {
            return c.text("Password incorrect", 400);
        }

        // Check if user is already in the authentication table
        const authService = await checkAuthService(user_id);
        if (!authService) {
            await registerAuthService({ user_id, user_name, password });
        }

        // Generate token
        const payload = {
            user_name: userService.user_name
        }
    
        let secret = process.env.JWT_SECRET as string;
        const token = await sign(payload, secret);
        return c.json({ token, user: { ...userService } }, 200);

    } catch (error: any) {
        return c.json({ error: error.message }, 400);
    }
};
