import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TUser } from '../../services/service';
import { RootState } from '../../store/Store';
import { useGetUsersQuery } from '../../services/service';
import { authService } from '../../services/service';

export default function ProfilePage() {
  const { data: loggedUser } = useGetUsersQuery();
  const { data: profileData } = authService.useGetProfileQuery();

  const authState = useSelector((state: RootState) => state.auth);
  const user = authState.user as TUser | null;
  
  if (!user) {
    return null; // or return some placeholder component
  }
  const { user_id: UId } = user as TUser;

  const userProfile = loggedUser?.find((user) => user.user_id === UId);
  const userAdditionalProfile = profileData?.find((profile) => profile.user_id === UId);

  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="sm:flex sm:items-center px-6 py-4">
          <img 
            className="block mx-auto sm:mx-0 sm:shrink-0 h-20 w-20 rounded-full sm:rounded-lg" 
            src={userAdditionalProfile?.image || "https://via.placeholder.com/50"}
            alt="Profile" 
          />
          <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p className="text-xl leading-tight">{userProfile?.full_name}</p>
            <p className="text-sm leading-tight text-gray-600">{userProfile?.email}</p>
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
                <p className="mt-1 text-sm text-gray-900">{userProfile?.full_name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Email</p>
                <p className="mt-1 text-sm text-gray-900">{userProfile?.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Phone</p>
                <p className="mt-1 text-sm text-gray-900">{userProfile?.contact_phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Address</p>
                <p className="mt-1 text-sm text-gray-900">{userProfile?.address}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Bio</p>
                <p className="mt-1 text-sm text-gray-900">{userAdditionalProfile?.bio}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Joined Date</p>
                <p className="mt-1 text-sm text-gray-900">{userProfile?.created_at}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Facebook</p>
                <a href={userAdditionalProfile?.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <img src="https://i.pinimg.com/564x/70/da/29/70da29e0cd3e98f2ba4bb67bd0bde726.jpg" alt="Facebook" className="h-6 w-6 mr-2" />
                  <p className="text-sm text-gray-900">{userAdditionalProfile?.facebook}</p>
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Instagram</p>
                <a href={userAdditionalProfile?.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <img src="https://i.pinimg.com/564x/19/42/d5/1942d5deb0f788e6228054cd92767ff6.jpg" alt="Instagram" className="h-6 w-6 mr-2" />
                  <p className="text-sm text-gray-900">{userAdditionalProfile?.instagram}</p>
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Twitter</p>
                <a href={userAdditionalProfile?.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <img src="https://i.pinimg.com/564x/39/8c/25/398c25a4436e5b8ca72f141084cdc66e.jpg" alt="Twitter" className="h-6 w-6 mr-2" />
                  <p className="text-sm text-gray-900">{userAdditionalProfile?.twitter}</p>
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <p className="text-sm font-medium text-gray-600">Location</p>
                <iframe 
                  src={userAdditionalProfile?.location} 
                  width="100%" 
                  height="300" 
                  className="border rounded-lg bg-white" 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
