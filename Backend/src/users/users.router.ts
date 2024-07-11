
import {getAllUsers,getUserById,createNewUser,deleteUserById,updateUserN} from './users.controller'

import { Hono } from 'hono'

export const usersRouter = new Hono()

usersRouter.get('/users', getAllUsers)
usersRouter.get('/user/:id', getUserById)
usersRouter.post('/user', createNewUser)
usersRouter.put('/user/:id', updateUserN)
usersRouter.delete('/user/:id', deleteUserById)
