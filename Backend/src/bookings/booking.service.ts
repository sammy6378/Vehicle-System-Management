
import { eq } from "drizzle-orm"
import db from "../drizzle/db"
import { bookings, TIBookings, TSBookings } from "../drizzle/schema"

// get all bookings
export const getBookings = async ( )=>{
    return await db.query.bookings.findMany()
}

// get bookings by id
export const getBooking = async ( id:number)=>{
    return await db.query.bookings.findFirst({
    where:eq(bookings.booking_id,id),
    with:{
        vehicleSpec:{
            columns:{
                model:true,
                image:true,
            }
        },
        users:{
            columns:{
                email:true,
                full_name:true,
            }
        }
    }

})
}

// create bookings
export const createBooking = async (res: any): Promise<string> => {
   await db.insert(bookings).values(res)
    return 'bookings created successfully'; 
};

// delete booking by id
export const deleteBooking = async (id:number):Promise<boolean>=>{
    await db.delete(bookings).where(eq(bookings.booking_id,id))
    return true
}

// update booking record
export const updateBooking = async (id:number, res:any): Promise<string | undefined>=>{
    await db.update(bookings).set(res).where(eq(bookings.booking_id,id))
    return "Booking updated successfully"
}