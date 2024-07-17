

import { VehcileSpecApi } from "../../Slices/VehiclespecApi";
import { Link} from "react-router-dom";

const VehicleManagement = () => {

  const {data:getVehicles} = VehcileSpecApi.useGetVehicleSpecQuery();

  return (
    <div className="p-6 overflow-x-auto">
      <table className="min-w-full table-auto border">
        <thead className="bg-base-300">
          <tr>
            <th className="py-2 px-4 border-b">Manufacturer</th>
            <th className="py-2 px-4 border-b">Model</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Location</th>
            <th className="py-2 px-4 border-b">Transmission</th>
            <th className="py-2 px-4 border-b">Mileage</th>
            <th className="py-2 px-4 border-b">Fuel T</th>
            <th className="py-2 px-4 border-b">Edit</th>
            <th className="py-2 px-4 border-b">Delete</th>
          </tr>
        </thead>
        <tbody>
          {getVehicles?.map(vehicle => (
            <tr key={vehicle.vehiclespec_id}>
              <td className="py-2 px-4 border-b">{vehicle.manufacturer}</td>
              <td className="py-2 px-4 border-b">{vehicle.model}</td>
              <td className="py-2 px-4 border-b">{vehicle.price}</td>
              <td className="py-2 px-4 border-b">{vehicle.location}</td>
              <td className="py-2 px-4 border-b">{vehicle.transmission}</td>
              <td className="py-2 px-4 border-b">{vehicle.mileage}</td>
              <td className="py-2 px-4 border-b">{vehicle.fuel_type}</td>
              <td className="py-2 px-4 border-b">
                <Link to={`/vehicle/${vehicle.vehiclespec_id}/edit-vehicle`} className="text-blue-500 hover:underline">Edit</Link>
              </td>
              <td className="py-2 px-4 border-b">
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VehicleManagement;
