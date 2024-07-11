import {getAllBookings,getBookingById,createNewBooking,updateBookingN,deleteBookingById} from './booking.controller'

import { Hono } from 'hono'

export const bookingRouter = new Hono()

bookingRouter.get('/bookings', getAllBookings)
bookingRouter.get('/booking/:id', getBookingById)
bookingRouter.post('/booking', createNewBooking)
bookingRouter.put('/booking/:id', updateBookingN)
bookingRouter.delete('/booking/:id', deleteBookingById)
