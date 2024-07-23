
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { TUser } from "../services/service";

export interface deleteResponse {
    msg: string;
}

export type TBranch ={
    location_id:number;
    name:string;
    address:string;
    contact_phone:string;
}

export type TTickects={
    ticket_id:number;
    user_id:number;
    subject:string;
    description:string;
    status:string;
    email:string
}

export type TFleets ={
    fleet_id:number;
    vehiclespec_id:number;
    acquisition_date:string;
    depreciation_rate:string;
    current_value: string;
    maintenance_cost: string;
    status: string;
}


export const adminservices =createApi({
    reducerPath: 'adminservice',
    baseQuery:fetchBaseQuery({baseUrl:'https://car-server-busc.onrender.com'}),
    endpoints: (builder) => ({
        getBranches: builder.query<TBranch[],void>({
            query: () => 'locations',
        }),
        getUsers: builder.query<TUser[],void>({
            query: () => 'users',
        }),
        updateState:builder.mutation<TUser,Partial<TUser>>({
            query: (user) => ({
                url: `user-status/${user.user_id}`,
                method: 'PUT',
                body: user,
            }),
        }),
        getTickects: builder.query<TTickects[],void>({
            query: () => 'tickets',
        }),
        getFleets: builder.query<TFleets[],void>({
            query: () => 'fleets'
        })
        
    })
});
