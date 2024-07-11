
import { eq } from "drizzle-orm"
import db from "../drizzle/db"
import { fleetManagement } from "../drizzle/schema"

// get all fleet managements
export const getFleets = async ( )=>{
    return await db.query.fleetManagement.findMany()
}

// get fleet by id
export const getFleet = async ( id:number)=>{
    return await db.query.fleetManagement.findFirst({
    where:eq(fleetManagement.fleet_id,id)})
}

// create fleet management
export const createFleet = async (res:any)=>{
    await db.insert(fleetManagement).values(res)
    return "fleet management created successfully"
}

// delete vehicle  specifaction record
export const deleteFleet = async (id:number):Promise<boolean>=>{
    await db.delete(fleetManagement).where(eq(fleetManagement.fleet_id,id))
    return true
}

// update vehicle specifacations
export const updateFleet = async (id:number, res:any): Promise<string | undefined>=>{
    await db.update(fleetManagement).set(res).where(eq(fleetManagement.fleet_id,id))
    return "fleet management updated successfully"
}