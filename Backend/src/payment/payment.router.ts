
import {getAllPayment,getPaymentById,createPayments,updatePaymentN,deletePaymentById} from './payment.controller'

import { Hono } from 'hono'

export const paymentRouter = new Hono()

paymentRouter.get('/payments', getAllPayment)
paymentRouter.get('/payment/:id', getPaymentById)
paymentRouter.post('/checkout-session', 
    createPayments.createCheckoutSession);
paymentRouter.put('/payment/:id', updatePaymentN)
paymentRouter.delete('/payment/:id', deletePaymentById)
