import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { login, register } from './auth.controller'
import { registerUserSchema,loginUserSchema } from '../validators'


export const authRouter = new Hono();

authRouter.post('/register', zValidator('json', registerUserSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), register)

authRouter.post('/login', zValidator('json', loginUserSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}),login)