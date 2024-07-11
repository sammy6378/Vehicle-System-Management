
import { getAllController,getController,createController,deleteController,updateController } from "../generics/gen.controller";
import { getBooking,getBookings,createBooking,deleteBooking,updateBooking } from "./booking.service";


export const getAllBookings = getAllController(getBookings)
export const getBookingById = getController(getBooking)
export const createNewBooking = createController(createBooking)
export const deleteBookingById = deleteController(getBooking, deleteBooking)
export const updateBookingN = updateController(getBooking,updateBooking)