import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type TPayment ={
    payment_id:number,
    booking_id:number,
    amount:number,
    payment_status:string,
    payment_date:Date,
    payment_method:string,
    transaction_id:string
}

export const paymentsAPI = createApi({
  reducerPath: "paymentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://car-server-busc.onrender.com",
  }),
  tagTypes: ["getPayments"],
  endpoints: (builder) => ({
    getPayments: builder.query<TPayment[], void>({
      query: () => "payments",
      providesTags: ["getPayments"],
    }),
    createPayment: builder.mutation<TPayment, Partial<TPayment>>({
      query: (newPayment) => ({
        url: "checkout-session",
        method: "POST",
        body: newPayment,
      }),
      invalidatesTags: ["getPayments"],
    }),
    updatePayment: builder.mutation<TPayment, Partial<TPayment>>({
      query: ({ payment_id, ...rest }) => ({
        url: `payment/${payment_id}`,
        method: "PUT",
        body: rest,
      }),
    })
})
})
