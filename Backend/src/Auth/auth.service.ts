import { users,authentication} from "../drizzle/schema";
import db from "../drizzle/db";
import { eq } from "drizzle-orm" 
import { loginUserSchema, registerUserSchema } from "../validators";

// service to register a user
export const createService = async (user:any):Promise<string | null>=>{
    registerUserSchema.parse(user);
    loginUserSchema.parse(user)

const existingUser = await db.select().from(users).where(eq(users.email, user.email)).execute();
if(existingUser.length > 0){
    throw new Error("User already exists");
}

    
    const newUser= await db.insert(users).values({
        user_name: user.user_name,
        email: user.email,
        full_name: user.full_name,
        contact_phone: user.contact_phone,
        address: user.address,
        role: user.role,
    }).returning({id:users.user_id}).execute();

    const userId = newUser[0].id;

    try{
        await db.insert(authentication).values({
            auth_id: userId,
            user_id: userId,
            password:user.password
        }).execute();
        return "user created successfully"
    }catch(error){
        await db.delete(users).where(eq(users.user_id,userId)).execute();
        throw new Error('Registration failed. Please try again.');
    }
}


// login settings
export const authLoginService = async (email: string) => {
    try {
        const userData = await db.select().from(users).where(eq(users.email, email)).execute();

        if (userData.length === 0) {
            throw new Error('User not found! Try Again');
        }

        const user = userData[0];

        const authData = await db.select().from(authentication).where(eq(authentication.user_id, user.user_id)).execute();

        if (authData.length === 0) {
            throw new Error('Invalid credentials! Try again');
        }
        const auth = authData[0];

        return {
            user_id: user.user_id,
            user_name: user.user_name,
            email: user.email,
            full_name: user.full_name,
            contact_phone: user.contact_phone,
            address: user.address,
            role: user.role,
            status:user.status,
            created_at: user.created_at,
            updated_at: user.updated_at,
            password: auth.password // password for verification
        };
    } catch (error) {
        throw error;
    }
};