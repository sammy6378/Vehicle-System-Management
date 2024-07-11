
import { Link,useLocation } from 'react-router-dom';
import { LayoutDashboard,CircleUserRound,Car,Heart,Bell,Settings,Contact,Sparkles,ReceiptText,LogOut } from 'lucide-react';

export default function NavBar(){
  const location = useLocation();
    return(
        <nav className="w-72  p-4 border-r border-r-slate-600 h-screen overflow-y-hidden bg-sky-500/50  shadow-md text-white bar">
          <div className="flex space-x-2 my-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
      <ul className=' mt-10'>
        <li className={`mb-4 ${location.pathname === '/dashboard' ? 'bg-gray-700' : ''}`}><Link to='/dashboard' className="flex items-center px-4 py-2 text-xl font-medium hover:bg-gray-700 rounded"><LayoutDashboard className=' mr-3' /> DashBoard</Link></li>
        <li className={`mb-4 ${location.pathname === '/profile' ? 'bg-gray-700' : ''}`} data-tooltip-target="right-tooltip">
          <Link to='/profile' className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-700 rounded" >
          <CircleUserRound className=' mr-3' /> Profile
          </Link>
        </li>
        <li className={`mb-4 ${location.pathname === '/bookings' ? 'bg-gray-700' : ''}`}>
          <Link to='/bookings' className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-700 rounded">
          <Car className=' mr-3' /> Bookings
          </Link>
        </li>
          <li className={`mb-4 ${location.pathname === '/mybookings' ? 'bg-gray-700' : ''}`}>
            <Link to='/mybookings' className='flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-700 rounded'>
            <Heart className=' mr-3' /> My Bookings</Link>
          </li>
          <li className={`mb-4 ${location.pathname === '/favorites' ? 'bg-gray-700' : ''}`}>
            <Link to='/favorites' className='flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-700 rounded'>
            <Sparkles className=' mr-3' /> My Favorites</Link>
          </li>
          <li className={`mb-4 ${location.pathname === '/billings' ? 'bg-gray-700' : ''}`}>
            <Link to='/billings' className='flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-700 rounded'>
            <ReceiptText className=' mr-3'  /> My Billings</Link>
          </li>
        <li className={`mb-4 ${location.pathname === '/notifications' ? 'bg-gray-700' : ''}`}>
          <Link to ='/notifications' className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-700 rounded">
          <Bell className=' mr-3' /> Notifications
          </Link>
        </li>
        <li className={`mb-4 ${location.pathname === '/settings' ? 'bg-gray-700' : ''}`}>
          <Link to='/settings' className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-700 rounded">
          <Settings className=' mr-3' /> Settings
          </Link>
        </li>
        <li className={`mb-4 ${location.pathname === '/contact' ? 'bg-gray-700' : ''}`}><Link to = '/contact' className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-700 rounded">
        <Contact className=' mr-3' /> Contact</Link></li>
        <li>
            <Link to='/Login' className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-700 rounded">
            <LogOut className=' mr-3' /> Log Out
            </Link>
        </li>
      </ul>
    </nav>
    )
}