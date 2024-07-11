import { adminRoleAuth, bothAuth } from '../middleware/auth'
import {getAllVehicles,getVehicleById,createNewVehicle,updateVehicleN,deleteVehicleById} from './vehicle.controller'

import { Hono } from 'hono'

export const vehicleSpecRouter = new Hono()

vehicleSpecRouter.get('/vehiclespecs', getAllVehicles)
vehicleSpecRouter.get('/vehiclespec/:id',bothAuth, getVehicleById)
vehicleSpecRouter.post('/vehiclespec', createNewVehicle)
vehicleSpecRouter.put('/vehiclespec/:id', updateVehicleN)
vehicleSpecRouter.delete('/vehiclespec/:id', deleteVehicleById)
