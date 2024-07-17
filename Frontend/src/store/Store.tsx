import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import { authService } from "../services/service";
import authSlice from "../forms/Auth/Authslice";
import { createTransform } from 'redux-persist';
import { paymentsAPI } from "../userDashBoard/pages/payments/paymentApi";
import { adminservices } from "../AdminDashboard/service";
import { VehcileSpecApi } from "../Slices/VehiclespecApi";


const tokenTransform = createTransform(
    (inboundState:any) => {
        return { token: inboundState.token };
      },
  (outboundState) => {
    return { token: outboundState.token }; // Restore the token
  },
  { whitelist: ['auth'] }
);

const persistConfig = {
    key: 'auth',
    storage,
    transforms: [tokenTransform]
};

const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
    reducer: {
        [authService.reducerPath]: authService.reducer,
        auth: persistedReducer,
        [paymentsAPI.reducerPath]: paymentsAPI.reducer,
        [adminservices.reducerPath]: adminservices.reducer,
        [VehcileSpecApi.reducerPath]: VehcileSpecApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(authService.middleware).concat(paymentsAPI.middleware).concat(adminservices.middleware).concat(VehcileSpecApi.middleware)
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
