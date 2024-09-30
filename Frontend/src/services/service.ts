import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { TReset } from "../userDashBoard/pages/ChangePassword";


export interface TAuth {
    email:string;
    password:string
}
export interface TAuthResponse {
    token: string;
    user: TUser;
    user_id:number,
    user_name:string,
    role:string,
    status:string
}

export type TUser ={
    user_id:number;
    full_name: string;
    email: string;
    user_name: string;
    password: string;
    contact_phone: string;
    address: string;
    role:string;
    status:string;
    created_at: string;
    updated_at: string;
}

export type TRegister = {
    full_name: string;
    email: string;
    user_name: string;
    password: string;
    contact_phone: string;
}

export type TVehicleSpec = {
        vehiclespec_id: number;
        manufacturer: string;
        model: string;
        year: number;
        status:string;
        price: number;
        price_type:string;
        type:string;
        location:string;
        time: string;
        transmission: string;
        mileage: string;
        fuel_type: string;
        image: string;
        engine_capacity: string;
        seating_capacity: string;
        color: string;
        features: string;
}

export type tProfile ={
    bio: string;
    user_id:number;
    location: string;
    facebook: string;
    instagram: string;
    twitter: string;
    image: string | null;
}


export type Tlocation ={
    location_id:number,
    name:string,
    address:string,
}

export type TBooking ={
    booking_id: number;
    user_id: number;
    vehiclespec_id: number;
    location_id:number;
    booking_date: string;
    return_date:string;
    total_amount:number;
    booking_period:string;
    booking_status:string;
}

export type TVehicle ={
    vehicle_id: number;
    vehiclespec_id: number;
    availability:boolean,
    rental_rate: number;
}

export type TTickects={
    user_id:number;
    subject:string;
    description:string;
}

export type  TFleet ={
    fleet_id:number;
    vehiclespec_id:number;
    acquisition_date:string;
    depreciation_rate:string;
    current_value: string;
    maintenance_cost: string;
    status: string;
}

export type TForgot ={
    email:string;
}
// register service
export const authService =createApi({
reducerPath: 'authApi',
baseQuery:fetchBaseQuery({baseUrl:'https://car-server-busc.onrender.com'}),
endpoints: (builder) => ({
getUsers: builder.query<TUser[],void>({
    query: () => 'users',
}),

authUser: builder.mutation<TAuthResponse,Partial<TAuth>>({
    query: (newUser) => ({
        url: 'login',
        method: 'POST',
        body: newUser
    })
}),

registerUser: builder.mutation<TRegister[],Partial<TRegister>>({
    query: (newUser) => ({
        url: 'register',
        method: 'POST',
        body: newUser
    })
}),

getVehicleSpec:builder.query<TVehicleSpec[],void>({
    query: () => 'vehiclespecs',
}),
profileUser:builder.query<tProfile,void>({
query: (id) => `profile/${id}`,
}),
createProfile:builder.mutation<tProfile[],Partial<tProfile>>({
query: (newProfile) => ({
    url: 'profile',
    method: 'POST',
    body: newProfile
})
}),
getProfile:builder.query<tProfile[],void>({
    query: () => 'profiles'
}),
getLocation:builder.query<Tlocation[],void>({
query: () => 'locations',
}),
createBooking:builder.mutation<TBooking[],Partial<TBooking>>({
query: (newBooking) => ({
    url: 'booking',
    method: 'POST',
    body: newBooking
})
}),
createPayment:builder.mutation<TBooking[],Partial<TBooking>>({
query: (newPayment) => ({
    url: 'checkout-session',
    method: 'POST',
    body: newPayment
})
}),
getBookings:builder.query<TBooking[],void>({
query: () => 'bookings',
}),
getVehicles:builder.query<TVehicle[],void>({
query:() => 'vehicles'
}),
createTicket:builder.mutation<TTickects[],Partial<TTickects>>({
    query: (newTicket) => ({
        url:"ticket",
        method: "POST",
        body: newTicket,
    })
}),
getTickets:builder.query<TTickects[],void>({
    query: () => 'tickets',
}),
getFleets:builder.query<TFleet[],void>({
    query: () => 'fleets',
}),
forgotPassword:builder.mutation<TForgot,Partial<TForgot>>({
    query: (email) => ({
        url: 'forgot-password',
        method: 'POST',
        body: email
    }),
}),
resetPassword:builder.mutation<TReset,Partial<TReset>>({
    query: ({password,token}) => ({
        url: 'reset-password',
        method: 'POST',
        body: {password,token}
    }),
})

}) 
})



export const { 
useGetUsersQuery,
useAuthUserMutation,
useRegisterUserMutation, 
useGetVehicleSpecQuery,
useCreateProfileMutation,
useGetLocationQuery,
useCreateBookingMutation,
} = authService;