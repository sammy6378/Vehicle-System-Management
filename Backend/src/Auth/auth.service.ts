import { users,authentication } from "../drizzle/schema";
import db from "../drizzle/db";
import { sql } from "drizzle-orm";
import bycrpt from 'bcrypt'
// service to sign up a user
export const createService = async (user:any):Promise<string | null>=>{
    await db.insert(users).values(user)
    return "user created successfully"
}

// service to authorize a user
export const usersignservice = async (email: string) => {
    return await db.query.users.findFirst({
        columns: {
            user_id: true,
            password: true,
            user_name: true
        },
        where: sql`${users.email} = ${email}`
    });
};

// login user by inserting the data in authentication table
export const registerAuthService = async (user: any): Promise<string | null> => {
    const hashedPassword = await bycrpt.hash(user.password, 10);
    const userToInsert = {
        user_id: user.user_id,
        user_name: user.user_name,
        password: hashedPassword
    };

    await db.insert(authentication).values(userToInsert);
    return "Login successful";
};

// check if data exists in database
export const checkAuthService = async (userid:number) => {
    return await db.query.authentication.findFirst({
        columns: {
            user_id: true
        },
        where: sql`${authentication.user_id} = ${userid}`
    });
};
