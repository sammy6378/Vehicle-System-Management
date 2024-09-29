import { z } from "zod";

export const registerUserSchema = z.object({
    full_name:z.string(),
    email: z.string(),
    user_name: z.string(),
    contact_phone: z.string(),
    role: z.string().optional(),
})

export const loginUserSchema = z.object({
    password:  z.string()
}) 

export const Bookings = z.object({
    user_id:z.number(),
    vehiclespec_id: z.number(),
    location_id: z.number(),
    booking_date: z.string(),
    return_date: z.string(),
    booking_period:z.string(),
    total_amount: z.number(),
})

export const User = z.object({
    full_name:z.string(),
    email: z.string(),
    user_name: z.string(),
    password: z.string(),
    contact_phone: z.string(),
})

export const vehicleSpec = z.object({
    vehicle_type: z.string(),
    manufacturer:z.string(),
    model: z.string(),
    year: z.number(),
    status: z.string(),
    price: z.number(),
    price_type: z.string(),
    type: z.string(),
    location: z.string(),
    time: z.string(),
    transmission: z.string(),
    mileage: z.number(),
    fuel_type: z.string(),
    image: z.string(),
    engine_capacity: z.string(),
    seating_capacity: z.number(),
    color: z.string(),
})

