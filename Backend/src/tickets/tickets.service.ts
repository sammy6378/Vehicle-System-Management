
// get all customerSupportTickets

import { eq } from "drizzle-orm"
import db from "../drizzle/db"
import { customerSupportTickets } from "../drizzle/schema"

// get all tickets
export const getTickets = async ( )=>{
    return await db.query.customerSupportTickets.findMany()
}

// get ticket by id
export const getTicket = async ( id:number)=>{
    return await db.query.customerSupportTickets.findFirst({
    where:eq(customerSupportTickets.ticket_id,id)})
}

// create ticket record
export const createTicket = async (res:any)=>{
    await db.insert(customerSupportTickets).values(res)
    return "Ticket created successfully"
}

// delete customer ticket
export const deleteTicket = async (id:number):Promise<boolean>=>{
    await db.delete(customerSupportTickets).where(eq(customerSupportTickets.ticket_id,id))
    return true
}

// update customer tickets
export const updateTicket = async (id:number, res:any): Promise<string | undefined>=>{
    await db.update(customerSupportTickets).set(res).where(eq(customerSupportTickets.ticket_id,id))
    return "Ticket updated successfully"
}