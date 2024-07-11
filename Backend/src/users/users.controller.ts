
import { getAllController,getController,createController,deleteController,updateController } from "../generics/gen.controller";
import { getUser,getUsers, createUser,deleteUser,updateUser } from "./users.service";


export const getAllUsers = getAllController(getUsers)
export const getUserById = getController(getUser)
export const createNewUser = createController(createUser)
export const deleteUserById = deleteController(getUser, deleteUser)
export const updateUserN = updateController(getUser,updateUser)