
import { getAllController,getController,createController,deleteController,updateController } from "../generics/gen.controller";
import { getTickets,getTicket,createTicket,updateTicket,deleteTicket } from "./tickets.service";


export const getAllTickets = getAllController(getTickets)
export const getTicketById = getController(getTicket)
export const createNewTicket = createController(createTicket)
export const deleteTicketById = deleteController(getTicket, deleteTicket)
export const updateTicketN = updateController(getTicket,updateTicket)