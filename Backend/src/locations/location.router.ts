
import {getAllLocations,getLocationById,createNewLocation,updateLocationN,deleteLocationById} from './location.cotroller'

import { Hono } from 'hono'

export const locationRouter = new Hono()

locationRouter.get('/locations', getAllLocations)
locationRouter.get('/location/:id', getLocationById)
locationRouter.post('/location', createNewLocation)
locationRouter.put('/location/:id', updateLocationN)
locationRouter.delete('/location/:id', deleteLocationById)
