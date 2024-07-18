
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { TVehicleSpec } from "../services/service"

export const VehcileSpecApi =createApi({
    reducerPath: 'VehcileSpecApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000'}),
    endpoints: (builder) => ({

    getVehicleSpec:builder.query<TVehicleSpec[],void>({
        query: () => 'vehiclespecs',
        providesTags: ['getVehicleSpec'],
    }),
    createVehicleSpec: builder.mutation<TVehicleSpec,Partial<TVehicleSpec>>({
        query: (newVehicleSpec) => ({
            url: 'vehiclespec',
            method: 'POST',
            body: newVehicleSpec,
            providesTags: ['createVehicleSpec'],
        }),
        invalidatesTags: ['getVehicleSpec'],
    }),
    updateVehicleSpec: builder.mutation<TVehicleSpec,Partial<TVehicleSpec>>({
        query: ({ vehiclespec_id,...vehicleSpec}) => ({
            url: `vehiclespec/${vehiclespec_id}`,
            method: 'PUT',
            body: vehicleSpec,
            providesTags: ['updateVehicleSpec'],
        }),
        invalidatesTags: ['getVehicleSpec'],
    }),
    deleteVehicleSpec: builder.mutation<void,number>({
        query: (vehiclespec_id) => ({
            url: `vehiclespec/${vehiclespec_id}`,
            method: 'DELETE',
            providesTags: ['deleteVehicleSpec'],
        }),
        invalidatesTags: ['getVehicleSpec'],
    })

    }) 
    })
    
    
   