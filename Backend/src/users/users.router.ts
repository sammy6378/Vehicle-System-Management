
import { zValidator } from '@hono/zod-validator'
import {getAllUsers,getUserById,createNewUser,deleteUserById,updateUserN, resetPasswordN, forgotPassword} from './users.controller'

import { Hono } from 'hono'
import { User } from '../validators'


export const usersRouter = new Hono()

usersRouter.get('/users', getAllUsers)
usersRouter.get('/user/:id', getUserById)
usersRouter.post('/user', zValidator('json', User, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
 }), createNewUser)
usersRouter.put('/user/:id', updateUserN)
usersRouter.delete('/user/:id', deleteUserById)
usersRouter.post('/reset-password',resetPasswordN)
usersRouter.post('/forgot-password',forgotPassword)

