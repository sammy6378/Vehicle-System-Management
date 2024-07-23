
import defaultP from '../../assets/default.jpeg'
import '../../App.scss'

  import { useState } from 'react';
  import { useSelector } from 'react-redux';
  import { RootState } from '../../store/Store';
  import { FaUser, FaCog, FaSignOutAlt,FaBell } from 'react-icons/fa';
  import { Link } from 'react-router-dom';
import { TUser } from '../../services/service';
import { useConfirmLogout } from '../pages/LogoutHook';





export default function Nav() {

    const { openModal, ConfirmLogoutModal } = useConfirmLogout();

      const authState = useSelector((state: RootState) => state.auth);
      const user = authState.user as TUser | null;
      const {user_name} = user as TUser;
    const [dropdownOpen, setDropdownOpen] = useState(false);

    
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

    const showMenu = () =>{
      const menu = document.querySelector('.bar');
      menu?.classList.toggle('navMenu');
    }
  
    return (
      <>
        <div className="navbar bg-teal-900 shadow px-4">
          <div className="flex-1">
          <button onClick={showMenu} type="button" className="inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
            </button>
            <a className="text-xl cursor-pointer text-cyan-400">👋Welcome back {user_name}</a>
         
          </div>
          <div className="flex-none relative">
            <img
              src={defaultP}
              alt=""
              className="rounded-full h-10 w-10 cursor-pointer"
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="absolute right-4 top-8 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <Link to="/profileForm" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <FaUser className="mr-2" /> Profile
                </Link>
                <Link to="/notifications" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <FaBell className=' mr-2' />Notifications
                </Link>
                <Link to="/settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <FaCog className="mr-2" /> Settings
                </Link>
                <div className='flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer'>
                  <a className='flex items-center' href="#" onClick={openModal}>
                  <FaSignOutAlt className="mr-2" />  Logout
                  </a>
                  <ConfirmLogoutModal />
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
  