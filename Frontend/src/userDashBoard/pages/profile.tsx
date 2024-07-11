import me from '../../assets/html.jpg'
import { Link } from 'react-router-dom';
export default function ProfilePage() {
  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="sm:flex sm:items-center px-6 py-4">
          <img 
            className="block mx-auto sm:mx-0 sm:shrink-0 h-20 w-20 rounded-full sm:rounded-lg" 
            src={me}
            alt="Profile" 
          />
          <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p className="text-xl leading-tight">Samuel Mwangi</p>
            <p className="text-sm leading-tight text-gray-600">Samuel202mwangi@gmail.com</p>
            <div className="mt-4">
              <Link to='/profileForm'>
              <button className="text-xs px-4 py-2 leading-none border rounded text-white bg-blue-500 hover:bg-blue-600">Edit Profile</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="px-6 py-4">
          <h2 className="text-lg font-medium text-gray-800">User Details</h2>
          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-600">Full Name</p>
                <p className="mt-1 text-sm text-gray-900">Samuel Mwangi</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Email</p>
                <p className="mt-1 text-sm text-gray-900">Samuel202mwangi@gmail.com</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Phone</p>
                <p className="mt-1 text-sm text-gray-900">+123 456 7890</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Address</p>
                <p className="mt-1 text-sm text-gray-900">1234 Street Name, City, Country</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Bio</p>
                <p className="mt-1 text-sm text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit.</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Joined Date</p>
                <p className="mt-1 text-sm text-gray-900">January 1, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}