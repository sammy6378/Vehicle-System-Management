
import { eq } from "drizzle-orm"
import db from "../drizzle/db"
import { vehicle } from "../drizzle/schema"

// get all vehicles 
export const getVehicles = async ( )=>{
    return await db.query.vehicle.findMany()
}

// get vehicle by id
export const getVehicle = async ( id:number)=>{
    return await db.query.vehicle.findFirst({
    where:eq(vehicle.vehicle_id,id)})
}

// create vehicle record
export const createVehicle = async (res:any)=>{
    await db.insert(vehicle).values(res)
    return "vehicle created successfully"
}

// delete vehicle  record
export const deleteVehicle = async (id:number):Promise<boolean>=>{
    await db.delete(vehicle).where(eq(vehicle.vehicle_id,id))
    return true
}

// update vehicle
export const updateVehicle = async (id:number, res:any): Promise<string | undefined>=>{
    await db.update(vehicle).set(res).where(eq(vehicle.vehicle_id,id))
    return "Vehicle updated successfully"
}