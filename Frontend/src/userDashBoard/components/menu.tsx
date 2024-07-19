
import { Link,useLocation } from 'react-router-dom';
import { LayoutDashboard,CircleUserRound,Car,Heart,Contact,Sparkles,ReceiptText,LogOut, HelpCircle } from 'lucide-react';

export default function NavBar(){
  const location = useLocation();
    return(
        <nav className="w-72  p-4 border-r border-r-slate-600 bg-gray-800 h-screen overflow-y-hidden shadow-md text-white bar">
          <div className="flex space-x-2 my-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
      <ul className=' mt-4'>
        <li className={`mb-2 ${location.pathname === '/dashboard' ? 'bg-gray-700' : ''}`}><Link to='/dashboard' className="flex items-center px-4 py-2 text-xl font-medium hover:bg-gray-700 rounded"><LayoutDashboard className=' mr-3' /> DashBoard</Link></li>
        <li className={`mb-2 ${location.pathname === '/profile' ? 'bg-gray-700' : ''}`} data-tooltip-target="right-tooltip">
          <Link to='/profile' className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-700 rounded" >
          <CircleUserRound className=' mr-3' /> Profile
          </Link>
        </li>
        <li className={`mb-2 ${location.pathname === '/bookings' ? 'bg-gray-700' : ''}`}>
          <Link to='/bookings' className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-700 rounded">
          <Car className=' mr-3' /> Bookings
          </Link>
        </li>
          <li className={`mb-2 ${location.pathname === '/mybookings' ? 'bg-gray-700' : ''}`}>
            <Link to='/mybookings' className='flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-700 rounded'>
            <Heart className=' mr-3' /> My Bookings</Link>
          </li>
          <li className={`mb-2 ${location.pathname === '/favorites' ? 'bg-gray-700' : ''}`}>
            <Link to='/favorites' className='flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-700 rounded'>
            <Sparkles className=' mr-3' /> My Favorites</Link>
          </li>
          <li className={`mb-2 ${location.pathname === '/billings' ? 'bg-gray-700' : ''}`}>
            <Link to='/billings' className='flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-700 rounded'>
            <ReceiptText className=' mr-3'  /> My Billings</Link>
          </li>
        <li className={`mb-2 ${location.pathname === '/support-tickets' ? 'bg-gray-700' : ''}`}>
          <Link to='/support-tickets' className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-700 rounded">
          <HelpCircle className=' mr-3' /> Support Tickets
          </Link>
        </li>
        <li className={`mb-2 ${location.pathname === '/contact' ? 'bg-gray-700' : ''}`}><Link to = '/contact' className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-700 rounded">
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