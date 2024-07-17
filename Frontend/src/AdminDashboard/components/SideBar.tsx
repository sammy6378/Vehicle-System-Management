import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="bg-gray-900 border-r border-slate-600 h-screen w-64 flex flex-col">
      <div className="flex space-x-2 mt-3 pl-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
  
      <nav className="flex flex-col mt-6 space-y-3">
      <Link to="/admin-dashboard" className="text-gray-300 dark:hover:bg-gray-600 hover:text-white px-4 py-2 flex items-center">
          <span className="material-icons">dashboard</span>
          <span className="ml-2">Dashboard</span>
        </Link>
        <Link to="/vehicle-management" className="text-gray-300 dark:hover:bg-gray-600 hover:text-white px-4 py-2 flex items-center">
          <span className="material-icons">directions_car</span>
          <span className="ml-2">Manage Vehicles</span>
        </Link>
        <Link to="/user-management" className="text-gray-300 dark:hover:bg-gray-600 hover:text-white px-4 py-2 flex items-center">
          <span className="material-icons">people</span>
          <span className="ml-2">Manage Users</span>
        </Link>
        <Link to="/reports" className="text-gray-300 dark:hover:bg-gray-600 hover:text-white px-4 py-2 flex items-center">
          <span className="material-icons">bar_chart</span>
          <span className="ml-2">Reports</span>
        </Link>
        <Link to="/branch-management" className="text-gray-300 dark:hover:bg-gray-600 hover:text-white px-4 py-2 flex items-center">
          <span className="material-icons">location_on</span>
          <span className="ml-2">Locations & Branches</span>
        </Link>
        <a href="#" className="text-gray-300 dark:hover:bg-gray-600 hover:text-white px-4 py-2 flex items-center">
          <span className="material-icons">support</span>
          <span className="ml-2">Customer Support</span>
        </a>
        <a href="#" className="text-gray-300 dark:hover:bg-gray-600 hover:text-white px-4 py-2 flex items-center">
          <span className="material-icons">commute</span>
          <span className="ml-2">Fleet Management</span>
        </a>
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
