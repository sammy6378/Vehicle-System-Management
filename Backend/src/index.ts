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


app.use('/*', cors())
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


const Stripe = new stripe(process.env.STRIPE_SECRET as string);
  
  interface TIVehicleSpecifications {
    model: string;
    features: string;
    image:string;
    price: number;
  }
  
  interface CheckoutRequestBody {
    vehicle: TIVehicleSpecifications;
  }
  
  app.post('/checkout-session', async (c) => {
    const body = await c.req.json<CheckoutRequestBody>();
    const { vehicle } = body;
  
    const lineItems = {
      name: vehicle.model,
      description: vehicle.features,
      image:vehicle.image,
      amount: vehicle.price * 100, 
      currency: 'usd',
      quantity: 1,
    };
  
    try {
      const session = await Stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [lineItems],
        mode: 'payment',
        success_url: 'http://localhost:5173/success',
        cancel_url: 'http://localhost:5173/cancel',
      });
  
      return c.json({
        sessionId: session.id,
      });
    } catch (error) {
      console.error('Error creating checkout session:', error);
      return c.json({ error: 'Internal Server Error' }, 500);
    }
  });
  
serve({
    fetch: app.fetch,
    port: Number(process.env.PORT)
  })