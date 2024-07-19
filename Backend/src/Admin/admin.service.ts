// services done by admin
import { TRUser, TStatus, users } from "../drizzle/schema";
import db from "../drizzle/db";
import { eq } from "drizzle-orm";

//disable user
export const statusUserService = async (id: number, newStatus: TStatus):Promise<TRUser| undefined>=> {
    return await db.update(users).set({ status: newStatus as any })
        .where(eq(users.user_id, id))
        .returning({ id: users.user_id})
        .execute();
}