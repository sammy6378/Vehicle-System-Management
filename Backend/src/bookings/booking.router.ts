import {getAllBookings,getBookingById,createNewBooking,updateBookingN,deleteBookingById} from './booking.controller'
import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { Bookings } from '../validators'

export const bookingRouter = new Hono()

bookingRouter.get('/bookings', getAllBookings)
bookingRouter.get('/booking/:id', getBookingById)
bookingRouter.post('/booking', zValidator('json', Bookings, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createNewBooking)
bookingRouter.put('/booking/:id', updateBookingN)
bookingRouter.delete('/booking/:id', deleteBookingById)
