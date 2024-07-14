import { zValidator } from '@hono/zod-validator'
import { adminRoleAuth, bothAuth } from '../middleware/auth'
import {getAllVehicles,getVehicleById,createNewVehicle,updateVehicleN,deleteVehicleById} from './vehicle.controller'

import { Hono } from 'hono'
import { vehicleSpec } from '../validators'

export const vehicleSpecRouter = new Hono()

vehicleSpecRouter.get('/vehiclespecs', getAllVehicles)
vehicleSpecRouter.get('/vehiclespec/:id',bothAuth, getVehicleById)
vehicleSpecRouter.post('/vehiclespec', zValidator('json',vehicleSpec,(result,c) =>{
    if (!result.success) {
        return c.json(result.error, 400)
    }
}),createNewVehicle)
vehicleSpecRouter.put('/vehiclespec/:id', updateVehicleN)
vehicleSpecRouter.delete('/vehiclespec/:id', deleteVehicleById)
