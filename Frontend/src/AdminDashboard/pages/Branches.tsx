
import { adminservices } from "../service";

const Branches = () => {

  const {data:getBranches} = adminservices.useGetBranchesQuery();

  return (
    <div className="p-6 overflow-x-auto">
      <table className="min-w-full table-auto border">
        <thead className="bg-base-300 text-left">
          <tr>
            <th className="py-2 px-4 border-b">Location_id</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Contact_Phone</th>
            <th className="py-2 px-4 border-b">Edit Branch</th>
          </tr>
        </thead>
        <tbody>
          {getBranches?.map(branch => (
            <tr key={branch.location_id}>
              <td className="py-2 px-4 border-b">{branch.location_id}</td>
              <td className="py-2 px-4 border-b">{branch.name}</td>
              <td className="py-2 px-4 border-b text-ellipsis overflow-hidden whitespace-nowrap">{branch.address}</td>
              <td className="py-2 px-4 border-b">{branch.contact_phone}</td>
              <td className="py-2 px-4 border-b">
                <button className="text-blue-500 hover:underline">Edit Branch</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form>
        
      </form>
    </div>
  );
}

export default Branches;
