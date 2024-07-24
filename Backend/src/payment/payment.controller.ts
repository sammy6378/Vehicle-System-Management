
import { getAllController,getController,createController,deleteController,updateController } from "../generics/gen.controller";
import { getpayments,getPayment,createPayment,updatePayment,deletePayment } from "./payment.service";
import stripe from "stripe";
import { Context } from "hono";
import { stripes } from "../drizzle/db";

export const getAllPayment = getAllController(getpayments)
export const getPaymentById = getController(getPayment)
// export const createNewPayment = createController(createPayment)
export const deletePaymentById = deleteController(getPayment, deletePayment)
export const updatePaymentN = updateController(getPayment,updatePayment)

const paymentService = createPayment();

export const createPayments = {
  async createCheckoutSession(c: Context) {
    try {
      const { bookingId, amount } = await c.req.json();
      
      // Log the received values for debugging
      console.log("Received bookingId:", bookingId);
      console.log("Received amount:", amount);
      
      // Validate amount
      if (isNaN(amount) || amount <= 0) {
        throw new Error("Invalid amount value");
      }

      const session = await paymentService.createCheckoutSession(bookingId, amount);

      return c.json({ sessionId: session.id, checkoutUrl: session.url });
    } catch (error) {
      console.error("Error creating checkout session:", error);
      return c.json({ success: false, error: "Failed to create checkout session" }, 500);
    }
  },

  async handleWebhook(c: Context) {
    const sig = c.req.header("stripe-signature");
    const rawBody = await c.req.raw.text();

    try {
      const event = stripes.webhooks.constructEvent(rawBody, sig!, process.env.STRIPE_WEBHOOK_SECRET!);

      if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        await paymentService.handleSuccessfulPayment(session.id);
      }

      return c.json({ received: true });
    } catch (err) {
      console.error(err);
      return c.json({ error: "Webhook error" }, 400);
    }
  },
};
