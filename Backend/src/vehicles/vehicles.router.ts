import {getAllVehicles,getVehicleById,createNewVehicle,updateVehicleN,deleteVehicleById} from './vehicles.controller'

import { Hono } from 'hono'

export const vehiclesRouter = new Hono()

vehiclesRouter.get('/vehicles', getAllVehicles)
vehiclesRouter.get('/vehicle/:id', getVehicleById)
vehiclesRouter.post('/vehicle', createNewVehicle)
vehiclesRouter.put('/vehicle/:id', updateVehicleN)
vehiclesRouter.delete('/vehicle/:id', deleteVehicleById)
