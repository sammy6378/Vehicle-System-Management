import { Context } from "hono";
import { statusUserService } from "./admin.service";
import { getUser } from "../users/users.service";



//disable user
export const changerUserStatus = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) return c.json({ error: "Invalid ID" }, 400);

    try {
        const { status } = await c.req.json();
        if (!status) return c.json({ error: "Invalid status" }, 400);

        const user = await getUser(id);
        if (!user) return c.json({ error: "User not found" }, 404);

        const res = await statusUserService(id, status);
        if (!res) return c.json({ error: "User status not updated" }, 404);

        return c.json(res, 201);
    } catch (error: any) {
        console.error("Error in changerUserStatus:", error);
        return c.json({ error: error?.message || "Internal Server Error" }, 500);
    }
}
