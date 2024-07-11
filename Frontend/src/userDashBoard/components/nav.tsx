
import me from '../../assets/html.jpg'
import '../../App.scss'

  import { useState } from 'react';
  import { useSelector } from 'react-redux';
  import { RootState } from '../../store/Store';
  
  import { useDispatch } from 'react-redux';
  import { logout } from '../../forms/Auth/Authslice';
  import {FaAlignJustify } from 'react-icons/fa';
  import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
  import { Link } from 'react-router-dom';
import { TUser } from '../../services/service';


  
  export default function Nav() {


      const dispatch = useDispatch();
      const handleLogout = () => {
          dispatch(logout());
      };

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
        <div className="navbar bg-teal-900 shadow px-6">
          <div className="flex-1">
            <FaAlignJustify onClick={showMenu} className="md:hidden sm:block cursor-pointer mx-2" />
          
            <a className="text-xl cursor-pointer text-cyan-400">👋Welcome back {user_name}</a>
         
          </div>
          <div className="flex-none relative">
            <img
              src={me}
              alt=""
              className="rounded-full h-10 w-10 cursor-pointer"
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="absolute right-4 top-8 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <Link to="/profileForm" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <FaUser className="mr-2" /> Profile
                </Link>
                <Link to="/settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <FaCog className="mr-2" /> Settings
                </Link>
                <Link to="/login" onClick={handleLogout} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <FaSignOutAlt className="mr-2" /> Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
  