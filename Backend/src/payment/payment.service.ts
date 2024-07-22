
import { eq } from "drizzle-orm"
import db, { stripes } from "../drizzle/db"
import { bookings, payments, TIPayments, vehicle } from "../drizzle/schema"


// get all payements
export const getpayments = async ( )=>{
    return await db.query.payments.findMany()
}

// get payement by id
export const getPayment = async ( id:number)=>{
    return await db.query.payments.findFirst({
    where:eq(payments.payment_id,id)})
}

// create payment
// export const createPayment = async (res:any)=>{
//     await db.insert(payments).values(res)
//     return "Payment created successfully"
// }

export const createPayment = () => {
    return {
      async createCheckoutSession(bookingId: number, amount: number){
        const session = await stripes.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items: [
            {
              price_data: {
                currency: "usd",
                product_data: {
                  name: "Car Rental Payment"
                },
                unit_amount: amount * 100, // Stripe expects amount in cents
              },
              quantity: 1,
            },
          ],
          mode: "payment",
          success_url: `http://localhost:5173/success`,
          cancel_url: `http://localhost:5173/cancel`,
          metadata: {
            bookingId: bookingId.toString(),
          },
        });
  
        return session;
      },
  
      async handleSuccessfulPayment(sessionId: string) {
        const session = await stripes.checkout.sessions.retrieve(sessionId);
        const bookingId = parseInt(session.metadata!.bookingId);
  
        // Handle possible null value for session.amount_total
        const amountTotal = session.amount_total;
        if (amountTotal === null) {
          throw new Error("session.amount_total is null");
        }
  
        // Update booking status
        await db
          .update(bookings)
          .set({ booking_status: "Approved" })
          .where(eq(bookings.booking_id, bookingId));
  
        // Create payment record
        await db
          .insert(payments) 
          .values({
            booking_id: bookingId,
            amount: amountTotal / 100,
            payment_status: "Approved",
            payment_method: session.payment_method_types[0],
            transaction_id: session.payment_intent as unknown as number ,
            payment_date:new Date() 
          })
          .returning();
      },
    };
  };
  

// // delete payment
export const deletePayment = async (id:number):Promise<boolean>=>{
    await db.delete(payments).where(eq(payments.payment_id,id))
    return true
}

// update payment details
export const updatePayment = async (id: number, payment: TIPayments) => {
    await db
      .update(payments)
      .set(payment)
      .where(eq(payments.payment_id, id));
    return payment;
  };