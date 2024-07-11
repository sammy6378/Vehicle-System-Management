
import { getAllController,getController,createController,deleteController,updateController } from "../generics/gen.controller";
import { getVehicles,getVehicle,createVehicle,updateVehicle,deleteVehicle } from "./vehicle.service";


export const getAllVehicles = getAllController(getVehicles)
export const getVehicleById = getController(getVehicle)
export const createNewVehicle = createController(createVehicle)
export const deleteVehicleById = deleteController(getVehicle, deleteVehicle)
export const updateVehicleN = updateController(getVehicle,updateVehicle)