import { TVehicle, TVehicleSpec, useGetVehicleSpecQuery } from "../../services/service";
import { FaCar, FaCogs, FaRoad, FaStar } from 'react-icons/fa';
import { HashLoader } from 'react-spinners';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authService } from "../../services/service";

function CarDash() {
  const { data: VehicleSpec } = useGetVehicleSpecQuery();
  const { data:vehicles } = authService.useGetVehiclesQuery();

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [vehicleType, setVehicleType] = useState("all");
  const [priceRange, setPriceRange] = useState('');
  const [newOrUsed, setNewOrUsed] = useState("all");

  

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const combineData = () => {
    if (!VehicleSpec || !vehicles) return [];

    return VehicleSpec.map((spec: TVehicleSpec) => {
      const vehicle = vehicles.find((v: TVehicle) => v.vehiclespec_id === spec.vehiclespec_id);
      return { ...spec, ...vehicle };
    });
  };

  const filteredVehicles = combineData().filter((vehicle) => {
    const isPriceMatch = () => {
      if (priceRange === "all") return true;
      if (priceRange === "<20000") return vehicle.price < 20000;
      if (priceRange === ">20000 <60000") return vehicle.price > 20000 && vehicle.price < 60000;
      if (priceRange === ">60000") return vehicle.price > 60000;
      return true;
    };
    return (
      (vehicleType === "all" || vehicle.type === vehicleType) &&
      isPriceMatch() &&
      (newOrUsed === "all" || vehicle.status.toLowerCase() === newOrUsed.toLowerCase()) &&
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <section className="py-4 bg-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto p-4">
            <h2 className="text-2xl my-3 font-bold text-slate">BROWSE OUR TOP LISTING</h2>

            <div className="mt-6 flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-4">
              <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 p-2 rounded border border-gray-300 bg-slate-900"
              />
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="flex-1 p-2 rounded border border-gray-300 bg-slate-900"
              >
                <option value="all">All Types</option>
                <option value="motorcycle">Bike</option>
                <option value="bicycle">Bicycle</option>
                <option value="car">Car</option>
              </select>
              <select
                value={newOrUsed}
                onChange={(e) => setNewOrUsed(e.target.value)}
                className="flex-1 p-2 rounded border border-gray-300 bg-slate-900"
              >
                <option value="all">All</option>
                <option value="new">New</option>
                <option value="used">Used</option>
              </select>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="flex-1 p-2 rounded border border-gray-300 bg-slate-900"
              >
                <option value="all">All Prices</option>
                <option value="<20000">below 20000</option>
                <option value=">20000 <60000">20000 &gt; 60000</option>
                <option value=">60000"> &gt; 60000</option>
              </select>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {loading ? (
                <div className='grid col-span-4 justify-center align-middle h-screen'>
                  <HashLoader color="#17ed84" />
                </div>
              ) : (
                filteredVehicles?.map((vehicle) => (
                  <div key={vehicle.vehiclespec_id} className="vehicle-card bg-white pb-4 rounded-lg text-left">
                    <Link to={`/vehicle/${vehicle.vehiclespec_id}`}>
                      <div className="relative overflow-hidden">
                        <img src={vehicle.image} alt="Vehicle" className="w-full h-40 object-cover rounded-t-lg cursor-pointer transition-all duration-300 hover:scale-110" />
                        <div className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded ${vehicle.availability ? 'bg-green-500' : 'bg-red-500'}`}>
                          {vehicle.availability ? 'Available' : 'Booked'}
                        </div>
                        <div className="absolute top-2 right-2 bg-gray-900 text-white text-xs px-2 py-1 rounded flex items-center">
                          <FaStar className="w-3 h-4 mr-1 text-orange-400" />
                        </div>
                      </div>
                    </Link>

                    <div className="mt-4 px-4 ">
                      <h3 className="text-lg font-semibold text-gray-900">{vehicle.price}/day- <span className="text-sm text-gray-600">{vehicle.price_type}</span></h3>
                      <h4 className="text-sm text-gray-500 mt-1">{vehicle.model}</h4>
                      <p className="text-sm text-gray-400">{vehicle.location} • {vehicle.time}</p>
                    </div>
                    <hr />
                    <div className="mt-4 flex items-center justify-between px-4 ">
                      <div className="flex items-center space-x-1 text-gray-500">
                        <span className="flex items-center text-xs"><FaCogs className="w-4 h-4 mr-1" /> {vehicle.transmission}</span>
                        <span className="flex items-center text-xs"><FaRoad className="w-4 h-4 mr-1" /> {vehicle.mileage}</span>
                        <span className="flex items-center text-xs"><FaCar className="w-4 h-4 mr-1" /> {vehicle.fuel_type}</span>
                      </div>
                    </div>
                    <hr />
                    <div className="mt-4 flex items-center justify-between px-4 ">
                      <Link to={`/vehicle/${vehicle.vehiclespec_id}`} className="bg-gray-500 px-4 text-white py-2 rounded text-sm">Details</Link>
                      <Link to={`/vehicle/${vehicle.vehiclespec_id}/payments`} className="text-sm text-white font-medium bg-blue-600 px-4 py-2 rounded">Book Now</Link>
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

export default CarDash;
