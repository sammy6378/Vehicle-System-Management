import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import { TUser } from '../../services/service';
import me from '../../assets/html.jpg'
import { useConfirmLogout } from '../../userDashBoard/pages/LogoutHook';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { openModal, ConfirmLogoutModal } = useConfirmLogout();
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const showMenu = () =>{
    const menu = document.querySelector('.bar');
    menu?.classList.toggle('navMenu');
  }
  
  const authState = useSelector((state: RootState) => state.auth);
  const adminAuthState = useSelector((state: RootState) => state.adminAuth);
  const user = authState.user as TUser | null;
  const admin = adminAuthState.admin as TUser | null;

  const { user_name, email } = admin ?? user ?? { user_name: '', email: '' };
  
  return (
    <nav className="z-50 w-full bg-gray-800 border-b border-gray-500 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button onClick={showMenu} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
            </button>
            <a href="https://flowbite.com" className="flex ms-2 md:me-24">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
              <span className="text-white self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Lexus</span>
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3 relative">
              <button onClick={toggleDropdown} type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded={dropdownVisible} aria-controls="dropdown-user">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src={me} alt="user photo" />
              </button>
              {dropdownVisible && (
                <div className="z-50 absolute right-0 top-9 mt-2 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                      {user_name}
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                      {email}
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                    </li>
                    <li>
                      <a href="#" onClick={openModal} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                      <ConfirmLogoutModal />
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
