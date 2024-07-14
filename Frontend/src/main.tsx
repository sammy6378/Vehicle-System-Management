import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './userDashBoard/pages/Error.tsx'
import Contact from './userDashBoard/pages/contact'
import Projects from './userDashBoard/pages/myBookings.tsx'

import Layout from './userDashBoard/components/layout.tsx';
import Dash from './userDashBoard/pages/Dash'
import CarDash from './userDashBoard/pages/carStore.tsx'
import ProfilePage from './userDashBoard/pages/profile.tsx'
import SettingsPage from './userDashBoard/pages/Settings.tsx'
import ProfileForm from './userDashBoard/pages/ProfileForm.tsx'
import FavoriteVehicles from './userDashBoard/pages/myFavorites.tsx'
import BillingPage from './userDashBoard/pages/Billings.tsx'
import Login from './forms/Login/login.tsx'
import Register from './forms/register.tsx'
import {  store} from './store/Store.tsx'
import { Provider } from 'react-redux'
import ProtectedRoute from './forms/Auth/ProtectedRoute.tsx'
// import { PersistGate } from 'redux-persist/integration/react'
import ComingSoonPage from './userDashBoard/pages/comingSoon.tsx'
import VehicleDetail from ".././src/userDashBoard/pages/vehicleDetail";
import Payment from './userDashBoard/pages/payments/payment.tsx'
import Success from './userDashBoard/pages/payments/success.tsx'
import Cancel from './userDashBoard/pages/payments/cancel.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/dashboard',
    element:  <ProtectedRoute><Layout><Dash /></Layout></ProtectedRoute>,
    errorElement: <Error />,
  },
  {
    path: '/bookings',
    element:  <Layout><CarDash /></Layout>,
    errorElement: <Error />,
  },
  {
    path: '/vehicle/:id',
    element:  <Layout><VehicleDetail /></Layout>,
    errorElement: <Error />,
  },
  {
    path: '/mybookings',
    element:  <Layout><Projects /></Layout>,
    errorElement: <Error />,
  },
  {
    path: '/vehicle/:id/payments',
    element:  <Layout><Payment /></Layout>,
    errorElement: <Error />,
  },
  {
    path: '/vehicle/:id/booking_details',
    element:  <Layout><Payment /></Layout>,
    errorElement: <Error />,
  },
  {
    path: '/success',
    element: <Success />,
    errorElement: <Error />,
  },
  {
    path: '/cancel',
    element: <Cancel />,
    errorElement: <Error />,
  },
  {
    path: '/profile',
    element:  <Layout><ProfilePage /></Layout>,
    errorElement: <Error />,
  },
  {
    path: '/profileForm',
    element:  <Layout><ProfileForm /></Layout>,
    errorElement: <Error />,
  },
  {
    path: '/favorites',
    element:  <Layout><FavoriteVehicles/></Layout>,
    errorElement: <Error />,
  },
  {
    path: '/billings',
    element:  <Layout><BillingPage/></Layout>,
    errorElement: <Error />,
  },
  {
    path: '/notifications',
    element:  <Layout><ComingSoonPage/></Layout>,
    errorElement: <Error />,
  },

  {
    path: 'contact',
    element: <Layout><Contact /></Layout>,
    errorElement: <Error />,
  },
  {
    path: '/settings',
    element:  <Layout><SettingsPage /></Layout>,
    errorElement: <Error />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)