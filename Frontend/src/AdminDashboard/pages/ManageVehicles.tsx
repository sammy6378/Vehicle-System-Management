

import { PulseLoader } from "react-spinners";
import { VehcileSpecApi } from "../../Slices/VehiclespecApi";
import { Link} from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";


const VehicleManagement = () => {

  const {data:getVehicles,isLoading,refetch} = VehcileSpecApi.useGetVehicleSpecQuery();
  const [deleteVehicles] = VehcileSpecApi.useDeleteVehicleSpecMutation();

  const deleteVehicle = async (id:number) =>{
    if(window.confirm("Are you sure you want to delete this vehicle?")){
     await deleteVehicles(id);
     toast.success("Vehicle deleted successfully!");
     refetch();
    }else{
      toast.error("Operation cancelled!");
    }
   
  }


  return (
    <div className="p-6 overflow-x-auto">
      <ToastContainer />
      <table className="min-w-full table-auto border border-slate-700 rounded-xl">
        <thead className="bg-base-100">
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
        {isLoading?(<div className="flex justify-center py-2"><PulseLoader color="#19f519" /></div>):(
        <tbody>
          {getVehicles?.map(vehicle => (
            <tr key={vehicle.vehiclespec_id} className="text-slate-300">
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
                <button onClick={() => deleteVehicle(vehicle.vehiclespec_id)} className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        )}
      </table>
    </div>
  );
}

export default VehicleManagement;


