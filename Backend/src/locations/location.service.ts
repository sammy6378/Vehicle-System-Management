
import { eq } from "drizzle-orm"
import db from "../drizzle/db"
import { locations } from "../drizzle/schema"

// get all locations
export const getLocations = async ( )=>{
    return await db.query.locations.findMany()
}

// get location by id
export const getLocation = async ( id:number)=>{
    return await db.query.locations.findFirst({
    where:eq(locations.location_id,id)})
}

// create location record
export const createLocation = async (res:any)=>{
    await db.insert(locations).values(res)
    return "Location record created successfully"
}

// delete location record
export const deleteLocation = async (id:number):Promise<boolean>=>{
    await db.delete(locations).where(eq(locations.location_id,id))
    return true
}

// update vehicle specifacations
export const updateLocation = async (id:number, res:any): Promise<string | undefined>=>{
    await db.update(locations).set(res).where(eq(locations.location_id,id))
    return "Location record updated successfully"
}