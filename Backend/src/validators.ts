import { z } from "zod";

export const registerUserSchema = z.object({
    full_name:z.string(),
    email: z.string(),
    user_name: z.string(),
    password: z.string(),
    contact_phone: z.string(),
    address: z.string(),
    role: z.string().optional(),
})

export const loginUserSchema = z.object({
    email: z.string(),
    password:  z.string()
}) 