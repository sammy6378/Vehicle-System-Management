
import { Context } from "hono";
import { getAllController,getController,createController,deleteController,updateController } from "../generics/gen.controller";
import { getUser,getUsers, createUser,deleteUser,updateUser } from "./users.service";
import { resetPassword } from "./users.service";
import bcrypt from 'bcrypt'
import{sign,verify} from "hono/jwt"
import {reset } from "../mailer/email";
import { eq } from "drizzle-orm"
import db from "../drizzle/db"
import { users } from "../drizzle/schema"


export const getAllUsers = getAllController(getUsers)
export const getUserById = getController(getUser)
export const createNewUser = createController(createUser)
export const deleteUserById = deleteController(getUser, deleteUser)
export const updateUserN = updateController(getUser,updateUser)

export const forgotPassword = async (c: Context) => {
    const { email } = await c.req.json();
    if (!email) {
      return c.json({ error: 'Email is required' }, 400);
    }
  
    try {
      const user = await db.query.users.findFirst({
        where: eq(users.email, email),
      });
  
      if (!user) {
        return c.json({ error: 'User not found' }, 404);
      }
  
      const secret = process.env.JWT_SECRET as string;
      const payload = {
        exp: Math.floor(Date.now() / 1000) + (60 * 180), // 3 hours expiration
    };
      const token = sign({ email },secret); // Token expires in 1 hour
      const resetUrl = `http://localhost:5173/reset-password?token=${token}`;
  
      await reset(email, resetUrl);
  
      return c.json({ message: 'Reset link sent. Please check your email.' }, 200);
    } catch (error: any) {
      return c.json({ error: error.message }, 500);
    }
  };


// reset password  settings
export const resetPasswordN = async (c: Context) => {
    const { token, password } = await c.req.json();
    if (!token || !password) {
      return c.json({ error: 'Invalid request data' }, 400);
    }
  
    try {
      const secret = process.env.JWT_SECRET as string;
      const decoded: any = verify(token, secret);
      const email = decoded.email;
  
      const userReset = await resetPassword(email, password);
  
      if (userReset === "Password reset successfully") {
        return c.json({ message: 'Password reset successfully.' }, 200);
      } else {
        throw new Error('Failed to reset password');
      }
    } catch (error: any) {
      return c.json({ error: error.message }, 500);
    }
  };