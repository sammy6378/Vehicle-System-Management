
import { eq } from "drizzle-orm"
import db from "../drizzle/db"
import { vehicleSpecifications } from "../drizzle/schema"

// get all vehicles specifaction
export const getVehicles = async ( )=>{
    return await db.query.vehicleSpecifications.findMany()
}

// get vehicle by id
export const getVehicle = async ( id:number)=>{
    return await db.query.vehicleSpecifications.findFirst({
    where:eq(vehicleSpecifications.vehiclespec_id,id)})
}

// create vehicle specifaction
export const createVehicle = async (res:any)=>{
    await db.insert(vehicleSpecifications).values(res)
    return "vehicle specification created successfully"
}

// delete vehicle  specifaction record
export const deleteVehicle = async (id:number):Promise<boolean>=>{
    await db.delete(vehicleSpecifications).where(eq(vehicleSpecifications.vehiclespec_id,id))
    return true
}

// update vehicle specifacations
export const updateVehicle = async (id:number, res:any): Promise<string | undefined>=>{
    await db.update(vehicleSpecifications).set(res).where(eq(vehicleSpecifications.vehiclespec_id,id))
    return "Vehicle specifaction updated successfully"
}