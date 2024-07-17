
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface deleteResponse {
    msg: string;
}

export type TBranch ={
    location_id:number;
    name:string;
    address:string;
    contact_phone:string;
}

export const adminservices =createApi({
    reducerPath: 'adminservice',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000'}),
    endpoints: (builder) => ({
        getBranches: builder.query<TBranch[],void>({
            query: () => 'locations',
        })
    })
});