
import { getAllFleets,getFleetById,createNewFleet,updateFleetN,deleteFleetById} from './fleet.controller'

import { Hono } from 'hono'

export const fleetRouter = new Hono()

fleetRouter.get('/fleets', getAllFleets)
fleetRouter.get('/fleet/:id', getFleetById)
fleetRouter.post('/fleet', createNewFleet)
fleetRouter.put('/fleet/:id', updateFleetN)
fleetRouter.delete('/fleet/:id', deleteFleetById)
