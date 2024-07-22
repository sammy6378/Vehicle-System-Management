import { Link } from "react-router-dom";
import '../../App.scss'
import { useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  return (
    <nav className="bg-gray-800 border-r border-slate-600 h-screen w-64 flex flex-col bar">
      <div className="flex space-x-2 mt-3 pl-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
  
      <nav className="flex flex-col mt-6 space-y-3">
      <Link to="/admin-dashboard" className={`text-gray-300 dark:hover:bg-gray-600 hover:text-white px-4 py-2 flex items-center ${location.pathname === '/admin-dashboard' ? 'bg-blue-500' : ''}`}>
          <span className="material-icons">dashboard</span>
          <span className="ml-2">Dashboard</span>
        </Link>
        <Link to="/vehicle-management" className={`text-gray-300 dark:hover:bg-gray-600 hover:text-white px-4 py-2 flex items-center mb-4 ${location.pathname === '/vehicle-management' ? 'bg-blue-500' : ''}`}>
          <span className="material-icons">directions_car</span>
          <span className="ml-2">Manage Vehicles</span>
        </Link>
        <Link to="/user-management" className={`text-gray-300 dark:hover:bg-gray-600 hover:text-white px-4 py-2 flex items-center mb-4 ${location.pathname === '/user-management' ? 'bg-blue-500' : ''}`}>
          <span className="material-icons">people</span>
          <span className="ml-2">Manage Users</span>
        </Link>
        <Link to="/reports" className={`text-gray-300 dark:hover:bg-gray-600 hover:text-white px-4 py-2 flex items-center mb-4 ${location.pathname === '/reports' ? 'bg-blue-500' : ''}`}>
          <span className="material-icons">bar_chart</span>
          <span className="ml-2">Reports</span>
        </Link>
        <Link to="/branch-management" className={`text-gray-300 dark:hover:bg-gray-600 hover:text-white px-4 py-2 flex items-center mb-4 ${location.pathname === '/branch-management' ? 'bg-blue-500' : ''}`}>
          <span className="material-icons">location_on</span>
          <span className="ml-2">Locations & Branches</span>
        </Link>
        <Link to="/reply-tickets" className="text-gray-300 dark:hover:bg-gray-600 hover:text-white px-4 py-2 flex items-center">
          <span className="material-icons">support</span>
          <span className="ml-2">Customer Support</span>
        </Link>
        <Link to="/fleet-management" className="text-gray-300 dark:hover:bg-gray-600 hover:text-white px-4 py-2 flex items-center">
          <span className="material-icons">commute</span>
          <span className="ml-2">Fleet Management</span>
        </Link>
      </nav>
      <div className="pl-1 mt-6">
        <Link to="/Login" className="text-orange-500 hover:bg-slate-700 hover:text-white px-4 py-2 flex items-center">
          <span className="material-icons">exit_to_app</span>
          <span className="ml-2 ">Log Out</span>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
