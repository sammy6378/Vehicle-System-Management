import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export interface TAuth {
    email:string;
    password:string
}
export interface TAuthResponse {
    token: string;
    user: TUser;
}

export type TUser ={
    user_id:number;
    full_name: string;
    email: string;
    user_name: string;
    password: string;
    contact_phone: string;
    address: string;
    created_at: string;
    updated_at: string;
}

export type TRegister = {
    full_name: string;
    email: string;
    user_name: string;
    password: string;
    contact_phone: string;
    address: string;
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
}

// register service
export const authService =createApi({
    reducerPath: 'authApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000'}),
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
    getLocation:builder.query<Tlocation[],void>({
        query: () => 'locations',
    }),
    createBooking:builder.mutation<TBooking[],Partial<TBooking>>({
        query: (newBooking) => ({
            url: 'booking',
            method: 'POST',
            body: newBooking
        })
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
 } = authService;