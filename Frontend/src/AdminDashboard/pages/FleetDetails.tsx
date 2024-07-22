import { Link, useParams } from 'react-router-dom';
import { FaCar, FaCogs, FaRoad } from 'react-icons/fa';
import { useGetVehicleSpecQuery } from "../../services/service";
import { FaLocationPin } from 'react-icons/fa6';
import { authService } from "../../services/service";
import { adminservices } from "../service";
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const FleetDetail = () => {
  const { id } = useParams();
  const { data: vehicleSpecs } = useGetVehicleSpecQuery();
  const { data: vehicles } = authService.useGetVehiclesQuery();
  const { data: fleets } = adminservices.useGetFleetsQuery();

  const combinedVehicle = vehicleSpecs?.find(spec => spec.vehiclespec_id === Number(id));
  const vehicleDetails = vehicles?.find(vehicle => vehicle.vehiclespec_id === Number(id));
  const fleetDetails = fleets?.find(fleet => fleet.vehiclespec_id === Number(id));

  if (!combinedVehicle) {
    return <div>Loading...</div>;
  }

  const combinedData = { ...combinedVehicle, ...vehicleDetails, ...fleetDetails };

  const maintenanceData = {
    labels: ['Rental Rate', 'Current Value', 'Maintenance Cost', 'Depreciation Rate'],
    datasets: [
      {
        label: 'Maintenance Data',
        data: [
          combinedData.rental_rate,
          combinedData.current_value,
          combinedData.maintenance_cost,
          combinedData.depreciation_rate,
        ],
        backgroundColor: ['#4CAF50', '#FFCE56', '#FF6384', '#36A2EB'],
        borderColor: ['#388E3C', '#FFB300', '#D32F2F', '#1976D2'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-slate-50 p-6 rounded-lg shadow-lg">
        <Link to='/fleet-management'>
          <button className='btn btn-primary my-1'>Back</button>
        </Link>
        <div className="my-3">
          <h2 className="text-4xl font-bold text-gray-900">{combinedData.model}</h2>
          <p className="text-lg text-gray-600">{combinedData.price}/- <span className="text-sm">{combinedData.price_type}</span></p>
          <p className="text-sm text-gray-500 mt-1 flex align-middle"><FaLocationPin /> {combinedData.location} • {combinedData.time}</p>
          
          <h3 className="text-lg font-semibold text-gray-800">Fleet Status</h3>
          <div className="">
            <p className="text-sm text-orange-500 font-bold">Status: {combinedData.status}</p>
            <h3 className="text-lg font-semibold text-gray-900">{combinedData.price}/day- <span className="text-sm text-gray-600">{combinedData.price_type}</span></h3>
          </div>
        </div>
        <div className="flex justify-start mb-4">
          <img src={combinedData.image} alt="Vehicle" className="w-full sm:w-1/2 h-30 object-cover rounded-t-lg" />
        </div>

        <hr className="my-4" />
        <div className="text-gray-500 space-y-2">
          <p><FaCogs className="inline-block w-5 h-5 mr-2" /> {combinedData.transmission}</p>
          <p><FaRoad className="inline-block w-5 h-5 mr-2" /> {combinedData.mileage}</p>
          <p><FaCar className="inline-block w-5 h-5 mr-2" /> {combinedData.fuel_type}</p>
        </div>
        <hr className="my-4" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">More about the vehicle</h3>
          <p className="text-sm text-gray-500">{combinedData.features}</p>
        </div>
        <hr className="my-4" />
        <h3 className="text-lg font-semibold text-gray-800">Maintenance Data</h3>
        <div className="mb-4">
          <Bar data={maintenanceData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default FleetDetail;
