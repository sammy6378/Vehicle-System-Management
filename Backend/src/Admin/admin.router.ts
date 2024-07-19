import { Hono } from "hono"
import { adminRoleAuth } from "../middleware/auth"
import { changerUserStatus } from "./admin.controller"

//disable user
export const adminRouter = new Hono()

adminRouter.put("/user-status/:id",changerUserStatus)