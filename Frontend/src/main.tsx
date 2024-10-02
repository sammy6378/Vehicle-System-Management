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
import VehicleDetail from ".././src/userDashBoard/pages/vehicleDetail";
import Payment from './userDashBoard/pages/payments/payment.tsx'
import Success from './userDashBoard/pages/payments/success.tsx'
import Cancel from './userDashBoard/pages/payments/cancel.tsx'
import LayoutAdmin from './AdminDashboard/components/LayoutAdmin.tsx'
import Dashboard from './AdminDashboard/pages/AdminDash.tsx'
import VehicleManagement from './AdminDashboard/pages/ManageVehicles.tsx'
import UserManagement from './AdminDashboard/pages/ManageUsers.tsx'
import Branches from './AdminDashboard/pages/Branches.tsx'
import Reports from './AdminDashboard/pages/Reports.tsx'
import Edit from './AdminDashboard/pages/EditData.tsx'
import CreateTicketForm from './userDashBoard/pages/CreateTicket.tsx'
import NotificationPage from './userDashBoard/pages/Notifications.tsx'
import SupportTickets from './AdminDashboard/pages/Tickets.tsx'
import FleetManagement from './AdminDashboard/pages/ManageFleet.tsx'
import FleetDetail from './AdminDashboard/pages/FleetDetails.tsx'
import ResetEmail from './userDashBoard/pages/VerifyEmail.tsx'
import ResetPassword from './userDashBoard/pages/ChangePassword.tsx'
import Form from './forms/component/form.tsx'


const router = createBrowserRouter([

  // landing page
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },

  {
    path: '/register',
    element: <Form><Register /></Form>,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Form><Login /></Form>,
    errorElement: <Error />,
  },

  // user dashboard
  {
    path: '/dashboard',
    element:  <ProtectedRoute requiredRole="user"><Layout><Dash /></Layout></ProtectedRoute>,
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
    element:  <Layout><NotificationPage/></Layout>,
    errorElement: <Error />,
  },
  {
    path: '/support-tickets',
    element:  <Layout><CreateTicketForm/></Layout>,
    errorElement: <Error />,
  },

  {
    path: 'contact',
    element: <Layout><Contact /></Layout>,
    errorElement: <Error />,
  },
  {
    path: 'contact-us',
    element: <Contact />,
    errorElement: <Error />,
  },
  {
    path: 'forgot-password',
    element: <ResetEmail />,
    errorElement: <Error />,
  },
  {
    path: 'reset-password',
    element: <ResetPassword />,
    errorElement: <Error />,
  },
  {
    path: '/settings',
    element:  <Layout><SettingsPage /></Layout>,
    errorElement: <Error />,
  },

  // admin dashboard
{
path: '/admin-dashboard',
element:  <ProtectedRoute requiredRole="admin"><LayoutAdmin><Dashboard /></LayoutAdmin></ProtectedRoute>,
errorElement: <Error />,
},
{
path: '/vehicle-management',
element:  <LayoutAdmin><VehicleManagement /></LayoutAdmin>,
},
{
path: '/user-management',
element:  <LayoutAdmin><UserManagement /></LayoutAdmin>,
},
{
path: '/branch-management',
element:  <LayoutAdmin><Branches /></LayoutAdmin>,
},
{
path: '/reports',
element:  <LayoutAdmin><Reports /></LayoutAdmin>,
},
{
path: '/vehicle/:id/edit-vehicle',
element:  <LayoutAdmin><Edit /></LayoutAdmin>,
},
{
  path: '/reply-tickets',
  element:  <LayoutAdmin><SupportTickets /></LayoutAdmin>,
},
{
  path: '/fleet-management',
  element:  <LayoutAdmin><FleetManagement /></LayoutAdmin>,
},
{
  path: '/vehicle/:id/manage-fleet',
  element: <LayoutAdmin><FleetDetail /></LayoutAdmin>,
}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)