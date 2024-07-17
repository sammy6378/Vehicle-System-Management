
import { authService } from "../../services/service";

const UserManagement = () => {

  const {data:getUsers} = authService.useGetUsersQuery();

  return (
    <div className="p-6 overflow-x-auto">
      <table className="min-w-full table-auto border">
        <thead className="bg-base-300">
          <tr>
            <th className="py-2 px-4 border-b">Id</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">User_Name</th>
            <th className="py-2 px-4 border-b">Contact_Phone</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Disable</th>
          </tr>
        </thead>
        <tbody>
          {getUsers?.map(user => (
            <tr key={user.user_id}>
              <td className="py-2 px-4 border-b">{user.user_id}</td>
              <td className="py-2 px-4 border-b">{user.full_name}</td>
              <td className="py-2 px-4 border-b text-ellipsis overflow-hidden whitespace-nowrap">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.user_name}</td>
              <td className="py-2 px-4 border-b">{user.contact_phone}</td>
              <td className="py-2 px-4 border-b">{user.address}</td>
              <td className="py-2 px-4 border-b">{user.role}</td>
              <td className="py-2 px-4 border-b">
                <button className="text-red-500 hover:underline">Disable</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
