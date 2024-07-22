import { TFleet, TVehicle, TVehicleSpec, useGetVehicleSpecQuery } from "../../services/service";
import { FaCar, FaCogs, FaRoad} from 'react-icons/fa';
import { HashLoader } from 'react-spinners';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authService } from "../../services/service";
import { adminservices } from "../service";

function FleetManagement() {
  const { data: VehicleSpec } = useGetVehicleSpecQuery();
  const { data:vehicles } = authService.useGetVehiclesQuery();
  const {data:fleets} = adminservices.useGetFleetsQuery();

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const combineData = () => {
    if (!VehicleSpec || !vehicles || !fleets) return [];

    return VehicleSpec.map((spec: TVehicleSpec) => {
      const vehicle = vehicles.find((v: TVehicle) => v.vehiclespec_id === spec.vehiclespec_id);
      const fleet = fleets?.find((f:TFleet) => f.vehiclespec_id === spec.vehiclespec_id );
      return { ...spec, ...vehicle,...fleet };
    });
  };

  const filteredVehicles = combineData().filter((vehicle) => {
    return (
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
    )
  });

  return (
    <>
      <section className="py-4 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-2xl my-2 font-bold text-slate">Manage all Fleets</h2>

            <div className="mt-6 flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-4">
              <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 p-2 rounded border border-gray-600 bg-transparent text-black"
              />
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {loading ? (
                <div className='grid col-span-4 justify-center align-middle h-screen'>
                  <HashLoader color="#17ed84" />
                </div>
              ) : (
                filteredVehicles?.map((vehicle) => (
                  <div key={vehicle.vehiclespec_id} className="vehicle-card h-fit bg-white pb-4 rounded-lg text-left">
                    <Link to={`/vehicle/${vehicle.vehiclespec_id}/manage-fleet`}>
                      <div className="relative overflow-hidden">
                        <img src={vehicle.image} alt="Vehicle" className="w-full h-36 object-cover rounded-t-lg cursor-pointer transition-all duration-300 hover:scale-110" />
                        <div className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded ${vehicle.availability ? 'bg-green-500' : 'bg-red-500'}`}>
                          {vehicle.availability ? 'Available' : 'Booked'}
                        </div>
                        <div className={`absolute top-2 right-2 bg-gray-900 text-white text-xs px-2 py-1 rounded ${vehicle.status === 'Good'? 'bg-green-500' : 'bg-red-500'} flex items-center`}>
                        {vehicle.status === 'Good' ? 'Good' : 'Poor'}
                        </div>
                      </div>
                    </Link>

                    <div className="mt-2 px-2 ">
                      <h4 className="text-sm text-gray-500 mt-1">{vehicle.model}</h4>
                      <p className="text-sm text-gray-400">{vehicle.location} • {vehicle.time}</p>
                    </div>
                    <hr />
                    <div className="mt-4 flex items-center justify-between px-1">
                      <div className="flex items-center space-x-1 text-gray-500 text-nowrap">
                        <span className="flex items-center text-xs"><FaCogs className="w-4 h-4 mr-1" /> {vehicle.transmission}</span>
                        <span className="flex items-center text-xs"><FaRoad className="w-4 h-4 mr-1" /> {vehicle.mileage}</span>
                        <span className="flex items-center text-xs"><FaCar className="w-4 h-4 mr-1" /> {vehicle.fuel_type}</span>
                      </div>
                    </div>
                    <hr />
                    <div className="mt-4 flex items-center justify-between px-3 ">
                      <Link to={`/vehicle/${vehicle.vehiclespec_id}/manage-fleet`} className="bg-gray-500 px-4 text-white py-2 rounded text-sm">Check Status</Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FleetManagement;
