import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { authService } from "../services/service";
import authSlice from "../forms/Auth/UserSlice";
import { createTransform } from 'redux-persist';
import { paymentsAPI } from "../userDashBoard/pages/payments/paymentApi";
import { adminservices } from "../AdminDashboard/service";
import { VehcileSpecApi } from "../Slices/VehiclespecApi";
import AdminSlice from "../forms/Auth/AdminSlice";

// Create a transform for persisting only the token
const tokenTransform = createTransform(
    (inboundState: { token: string }) => {
        return { token: inboundState.token };
      },
    (outboundState) => {
        return { token: outboundState.token }; // Restore the token
    },
    { whitelist: ['auth', 'adminAuth'] }
);

// Persist configuration for auth
const authPersistConfig = {
    key: 'auth',
    storage,
    transforms: [tokenTransform]
};

// Persist configuration for adminAuth
const adminAuthPersistConfig = {
    key: 'adminAuth',
    storage,
    transforms: [tokenTransform]
};

// Apply persistReducer to authSlice
const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);

// Apply persistReducer to AdminSlice
const persistedAdminAuthReducer = persistReducer(adminAuthPersistConfig, AdminSlice);

export const store = configureStore({
    reducer: {
        [authService.reducerPath]: authService.reducer,
        auth: persistedAuthReducer,
        adminAuth: persistedAdminAuthReducer,
        [paymentsAPI.reducerPath]: paymentsAPI.reducer,
        [adminservices.reducerPath]: adminservices.reducer,
        [VehcileSpecApi.reducerPath]: VehcileSpecApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
        .concat(authService.middleware)
        .concat(paymentsAPI.middleware)
        .concat(adminservices.middleware)
        .concat(VehcileSpecApi.middleware)
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
