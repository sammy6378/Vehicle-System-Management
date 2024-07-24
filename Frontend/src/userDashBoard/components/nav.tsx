
import '../../App.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import { FaUser, FaCog, FaSignOutAlt, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TUser } from '../../services/service';
import { useConfirmLogout } from '../pages/LogoutHook';

export default function Nav() {
  const { openModal, ConfirmLogoutModal } = useConfirmLogout();
  const authState = useSelector((state: RootState) => state.auth);
  const user = authState.user as TUser | null;
  const { user_name } = user as TUser;
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const showMenu = () => {
    const menu = document.querySelector('.bar');
    menu?.classList.toggle('navMenu');
  };

  return (
<nav className="z-50 w-full bg-gray-800 border-b border-gray-500 dark:bg-gray-800 dark:border-gray-700">
<div className="px-4 py-3 lg:px-5 lg:pl-5">
  <div className="flex items-center justify-between w-full">
    <div className="flex items-center justify-start rtl:justify-end">
      <button onClick={showMenu} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>
      <a href="#" className="flex">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Lexus Logo" />
        <span className="text-white self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"> <a className="text-xl cursor-pointer text-cyan-400 ml-4">Hey👋 {user_name}</a></span>
      </a>
    </div>
    <div className="flex items-center">
      <div className="flex items-center ms-3 relative">
        <button onClick={toggleDropdown} type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded={dropdownVisible} aria-controls="dropdown-user">
          <span className="sr-only">Open user menu</span>
          <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/50" alt="user photo" />
        </button>
        {dropdownVisible && (
           <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg z-10">
           <Link to="/profileForm" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
             <FaUser className="mr-2" /> Profile
           </Link>
           <Link to="/notifications" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
             <FaBell className="mr-2" /> Notifications
           </Link>
           <Link to="/settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
             <FaCog className="mr-2" /> Settings
           </Link>
           <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
             <a className="flex items-center" href="#" onClick={openModal}>
               <FaSignOutAlt className="mr-2" /> Logout
             </a>
             <ConfirmLogoutModal />
           </div>
         </div>
        )}
      </div>
    </div>
  </div>
</div>
</nav>
  );
}
