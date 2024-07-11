
import { getAllController,getController,createController,deleteController,updateController } from "../generics/gen.controller";
import { getFleets,getFleet,createFleet,updateFleet,deleteFleet } from "./fleet.service";


export const getAllFleets = getAllController(getFleets)
export const getFleetById = getController(getFleet)
export const createNewFleet = createController(createFleet)
export const deleteFleetById = deleteController(getFleet, deleteFleet)
export const updateFleetN = updateController(getFleet,updateFleet)