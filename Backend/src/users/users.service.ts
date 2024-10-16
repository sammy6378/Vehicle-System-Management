
import bycrpt from 'bcrypt'
import jwt from 'jsonwebtoken'


// get all users
import { eq } from "drizzle-orm"
import db from "../drizzle/db"
import { authentication, users } from "../drizzle/schema"

// get all users
export const getUsers = async ( )=>{
    return await db.query.users.findMany()
}

// get user by id
export const getUser = async ( id:number)=>{
    return await db.query.users.findFirst({
    where:eq(users.user_id,id)
})
}

// create user
export const createUser = async (res:any)=>{
    await db.insert(users).values(res)
    return "User created successfully"
}

// delete user
export const deleteUser = async (id:number):Promise<boolean>=>{
    await db.delete(users).where(eq(users.user_id,id))
    return true
}

// update user
export const updateUser = async (id:number, res:any): Promise<string | undefined>=>{
    await db.update(users).set(res).where(eq(users.user_id,id))
    return "User updated successfully"
}

// reset password
// export const resetPassword = async (email: string, password: string) => {
//     const hashedPassword = await bycrpt.hash(password, 10);
    
//     // First, get the user based on the email
//     const user = await db
//     .query.users.findFirst({
//       where: eq(users.email, email),
//     });
  
//     if (!user) {
//       throw new Error('User not found');
//     }
  
//     // Update the password in the authentication table
//     await db
//       .update(authentication)
//       .set({ password: hashedPassword })
//       .where(eq(authentication.user_id, user.user_id));
  
//     return "Password reset successfully";
//   };


const JWT_SECRET = process.env.JWT_SECRET as string;
// Function to reset password using the token
export const resetPassword = async (token: string, newPassword: string) => {
  try {
    // Verify the token
    const decoded: any = jwt.verify(token, JWT_SECRET);

    // Get the user from the token payload
    const userId = decoded.userId;
    const user = await db.query.users.findFirst({
      where: eq(users.user_id, userId),
    });

    if (!user) {
      throw new Error('Invalid token or user not found.');
    }

    // Hash the new password
    const hashedPassword = await bycrpt.hash(newPassword, 10);

    // Update the password in the authentication table
    await db
      .update(authentication)
      .set({ password: hashedPassword })
      .where(eq(authentication.user_id, userId));

    return "Password reset successfully.";
  } catch (error) {
    throw new Error('Invalid or expired token.');
  }
};