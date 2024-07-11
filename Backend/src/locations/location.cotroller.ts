
import { getAllController,getController,createController,deleteController,updateController } from "../generics/gen.controller";
import { getLocations,getLocation,createLocation,updateLocation,deleteLocation } from "./location.service";


export const getAllLocations = getAllController(getLocations)
export const getLocationById = getController(getLocation)
export const createNewLocation = createController(createLocation)
export const deleteLocationById = deleteController(getLocation, deleteLocation)
export const updateLocationN = updateController(getLocation,updateLocation)