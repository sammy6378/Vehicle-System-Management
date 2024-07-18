import { useState } from 'react';
import { User, CreditCard, Users, Lock, Bell } from 'lucide-react';

import ProfilePage from './profile';

const settingsNav = [
  { name: 'Account Details', icon: User, section: 'account' },
  { name: 'Billing Information', icon: CreditCard, section: 'billing' },
  { name: 'Social Networks', icon: Users, section: 'social' },
  { name: 'Change Password', icon: Lock, section: 'password' },
  { name: 'Delete Account', icon: Bell, section: 'Delete' },
];

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('account');

  return (
    <div className="flex min-h-screen bg-gray-100 p-6">
      <div className="w-1/4 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Settings Nav</h2>
        <ul>
          {settingsNav.map((item) => (
            <li
              key={item.section}
              className={`mb-4 px-4 py-2 text-sm font-medium rounded flex items-center cursor-pointer ${
                activeSection === item.section ? 'bg-blue-500 text-white' : 'hover:bg-gray-700 hover:text-white'
              }`}
              onClick={() => setActiveSection(item.section)}
            >
              <item.icon className="mr-3" />
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 p-6 bg-white shadow-lg rounded-lg ml-4">
        {activeSection === 'account' && <AccountDetails />}
        {activeSection === 'billing' && <BillingInformation />}
        {activeSection === 'social' && <SocialNetworks />}
        {activeSection === 'password' && <ChangePassword />}
        {activeSection === 'Delete' && <Notifications />}
      </div>
    </div>
  );
}

function AccountDetails() {
  return (
    <ProfilePage />
  );
}

function BillingInformation() {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">Billing Information</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Add form fields for billing information */}
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name *</label>
          <input type="text" className="w-full p-2 rounded bg-white text-black border" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name *</label>
          <input type="text" className="w-full p-2 rounded bg-white text-black border" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name *</label>
          <input type="text" className="w-full p-2 rounded bg-white text-black border" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Account Name *</label>
          <input type="text" className="w-full p-2 rounded bg-white text-black border" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address *</label>
          <input type="email" className="w-full p-2 rounded bg-white text-black border" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
          <input type="tel" className="w-full p-2 rounded bg-white text-black border" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Country *</label>
          <input type="text" className="w-full p-2 rounded bg-white text-black border" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">City *</label>
          <input type="text" className="w-full p-2 rounded bg-white text-black border" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">State *</label>
          <input type="text" className="w-full p-2 rounded bg-white text-black border" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Zip *</label>
          <input type="text" className="w-full p-2 rounded bg-white text-black border" />
        </div>
      </div>
    </div>
  );
}

function SocialNetworks() {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">Social Networks</h2>
      <div className="mt-4 flex justify-center space-x-4 shadow-lg py-3">
          <a href="#" className="text-blue-500 px-3 py-2 text-3xl rounded-md bg-slate-100"><i className="fa fa-facebook-f"></i></a>
          <a href="#" className="text-blue-400 px-3 py-2 text-3xl rounded-md bg-slate-100"><i className="fa fa-twitter"></i></a>
          <a href="#" className="text-blue-600 px-3 py-2 text-3xl rounded-md bg-slate-100"><i className="fa fa-linkedin"></i></a>
          <a href="#" className="text-red-600 px-3 py-2 text-3xl rounded-md bg-slate-100"><i className="fa fa-youtube"></i></a>
        </div>
    </div>
  );
}

function ChangePassword() {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">Change Password</h2>
      <div className='flex flex-col gap-y-4'>
      <div>
          <label className="block text-sm font-medium text-gray-700">Old Password *</label>
          <input type="text" placeholder='old Password' className="w-full p-2 rounded bg-white text-black border focus:outline focus:ring-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">New Password *</label>
          <input type="text" placeholder='New Password' className="w-full p-2 rounded bg-white text-black border focus:outline focus:ring-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password *</label>
          <input type="text" placeholder='Confirm Password' className="w-full p-2 rounded bg-white text-black border focus:outline focus:ring-2" />
        </div>
    </div>
    <button type="submit" className="w-1/6 mt-5 bg-blue-500 text-white px-3 py-2 rounded-lg">Save Password</button>
    </div>
  );
}

function Notifications() {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">Delete Account</h2>
      <div className="min-h-screen pt-6 flex items-start justify-center">
      <div className="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster">
  <div className="flex flex-col p-8 bg-red-200 shadow-md hover:shodow-lg rounded">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 rounded p-3 border border-red-800 text-gray-100 bg-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div className="flex flex-col ml-3">
          <div className="font-medium leading-none text-red-500">Delete Your Acccount ?</div>
          <p className="text-sm text-gray-500 leading-none mt-1">By deleting your account you will lose your all data </p>
        </div>
      </div>
      <button className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded">Delete</button>
    </div>
  </div>
</div>
</div>
    </div>
  );
}
