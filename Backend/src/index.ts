import { Hono } from "hono";
import 'dotenv/config'
import { serve } from "@hono/node-server";
const app = new Hono();
import { usersRouter } from "./users/users.router";
import { vehiclesRouter } from "./vehicles/vehicles.router";
import { vehicleSpecRouter } from "./vehiclespec/vehicle.router";
import { ticketRouter } from "./tickets/tickets.router";
import { paymentRouter } from "./payment/payment.router";
import { locationRouter } from "./locations/location.router";
import { fleetRouter } from "./fleetmanage/fleet.router";
import { bookingRouter } from "./bookings/booking.router";
import { authRouter } from "./Auth/auth.router";
import { cors } from 'hono/cors'
import { profileRoutes } from "./profile/profile.router";
import {TIVehicle} from "./drizzle/schema";
import stripe from "stripe";


app.use('*', cors())
app.get('/',(c) =>{
    return c.text('Welcome to the Restraunt Management System')
})

app.route("/", usersRouter)
app.route('/',vehiclesRouter)
app.route('/',vehicleSpecRouter)
app.route('/',ticketRouter)
app.route('/',paymentRouter)
app.route('/',locationRouter)
app.route('/',fleetRouter)
app.route('/',bookingRouter)
app.route('/',authRouter)
app.route('/',profileRoutes)

  
serve({
    fetch: app.fetch,
    port: Number(process.env.PORT)
  })