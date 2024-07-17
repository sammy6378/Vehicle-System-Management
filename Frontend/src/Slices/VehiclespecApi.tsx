
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { TVehicleSpec } from "../services/service"

export const VehcileSpecApi =createApi({
    reducerPath: 'VehcileSpecApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000'}),
    endpoints: (builder) => ({

    getVehicleSpec:builder.query<TVehicleSpec[],void>({
        query: () => 'vehiclespecs',
    }),
    createVehicleSpec: builder.mutation<TVehicleSpec,Partial<TVehicleSpec>>({
        query: (newVehicleSpec) => ({
            url: 'vehiclespecs',
            method: 'POST',
            body: newVehicleSpec
        })
    }),
    updateVehicleSpec: builder.mutation<TVehicleSpec,Partial<TVehicleSpec>>({
        query: ({ vehiclespec_id,...vehicleSpec}) => ({
            url: `vehiclespecs/${vehiclespec_id}`,
            method: 'PUT',
            body: vehicleSpec
        })
    }),
    deleteVehicleSpec: builder.mutation<void,number>({
        query: (vehiclespec_id) => ({
            url: `vehiclespecs/${vehiclespec_id}`,
            method: 'DELETE'
        })
    })

    }) 
    })
    
    
   