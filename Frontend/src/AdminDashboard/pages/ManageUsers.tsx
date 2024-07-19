import { authService } from "../../services/service";
import { adminservices } from "../service";
import { useState } from "react";

const UserManagement = () => {
  const { data: getUsers} = authService.useGetUsersQuery();
  const [updateUserStatus] = adminservices.useUpdateStateMutation();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [users, setUsers] = useState(getUsers || []);

  const onSubmit = async (userId: number, status: 'active' | 'disabled') => {
    const userUpdate = {
      user_id: userId,
      status: status
    };
    
    try {
      await updateUserStatus(userUpdate).unwrap();
    
      setUsers(users.map(user => user.user_id === userId ? { ...user, status: status } : user));
    } catch (error: any) {
      if (error.data && error.data.error) {
        setErrorMessage(error.data.error);
      } else {
        setErrorMessage("An unexpected error occurred");
      }
      console.error("Unable to update account status:", error);
    }
  };

  return (
    <div className="p-6 overflow-x-auto">
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      <table className="min-w-full table-auto border">
        <thead className="bg-base-300">
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">User_Name</th>
            <th className="py-2 px-4 border-b">Contact_Phone</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Activate</th>
            <th className="py-2 px-4 border-b">Disable</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(user => (
            <tr key={user.user_id} className="text-slate-300">
              <td className="py-2 px-4 border-b">{user.full_name}</td>
              <td className="py-2 px-4 border-b text-ellipsis overflow-hidden whitespace-nowrap">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.user_name}</td>
              <td className="py-2 px-4 border-b">{user.contact_phone}</td>
              <td className="py-2 px-4 border-b">{user.address}</td>
              <td className="py-2 px-4 border-b">{user.role}</td>
              <td className="py-2 px-4 border-b">
                <button onClick={() => onSubmit(user.user_id, 'active')} className="text-green-500 hover:underline">
                  {user.status === 'enabled' ? 'Enabled' : 'Enable'}
                </button>
              </td>
              <td className="py-2 px-4 border-b">
                <button onClick={() => onSubmit(user.user_id, 'disabled')} className="text-red-500 hover:underline">
                  {user.status === 'disabled' ? 'Disabled' : 'Disable'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
