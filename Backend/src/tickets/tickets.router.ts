import {getAllTickets,getTicketById,createNewTicket,updateTicketN,deleteTicketById} from './tickets.controller'

import { Hono } from 'hono'

export const ticketRouter = new Hono()

ticketRouter.get('/tickets', getAllTickets)
ticketRouter.get('/ticket/:id', getTicketById)
ticketRouter.post('/ticket', createNewTicket)
ticketRouter.put('/ticket/:id', updateTicketN)
ticketRouter.delete('/ticket/:id', deleteTicketById)
