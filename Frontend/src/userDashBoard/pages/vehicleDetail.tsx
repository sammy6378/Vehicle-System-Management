
import { Link, useParams } from 'react-router-dom';
import { FaCar, FaCogs, FaRoad } from 'react-icons/fa';
import { useGetVehicleSpecQuery} from "../../services/service";
import { FaLocationPin } from 'react-icons/fa6';
import Related from './RelatedVehicles';



const VehicleDetail = () => {

  const { id } = useParams();
  const { data: VehicleSpec } = useGetVehicleSpecQuery();

  const vehicle = VehicleSpec?.find(v => v.vehiclespec_id === Number(id));

  if (!vehicle) {
    return <div>Loading...</div>;
  }


  if (!vehicle) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 ">
      <div className="bg-slate-50 p-6 rounded-lg shadow-lg">
       <Link to = '/bookings'> <button className='btn btn-primary my-1'>Back</button></Link>
        <div className="my-3">
          <h2 className="text-4xl font-bold text-gray-900">{vehicle.model}</h2>
          <p className="text-lg text-gray-600">{vehicle.price}/- <span className="text-sm">{vehicle.price_type}</span></p>
          <p className="text-sm text-gray-500 mt-1 flex align-middle"><FaLocationPin /> {vehicle.location} • {vehicle.time}</p>
        </div>
        <div className="flex justify-start mb-4">
          <img src={vehicle.image} alt="Vehicle" className="w-full sm:w-1/2 h-30 object-cover rounded-t-lg" />
        </div>

        <hr className="my-4" />
        <div className="text-gray-500 space-y-2">
          <p><FaCogs className="inline-block w-5 h-5 mr-2" /> {vehicle.transmission}</p>
          <p><FaRoad className="inline-block w-5 h-5 mr-2" /> {vehicle.mileage}</p>
          <p><FaCar className="inline-block w-5 h-5 mr-2" /> {vehicle.fuel_type}</p>
        </div>
        <hr className="my-4" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">More about the vehicle</h3>
          <p className="text-sm text-gray-500">{vehicle.features}</p>
        </div>
        <div className='my-2'>
          <h3 className="text-lg font-semibold text-gray-800">Booking Payment Methods</h3>
          <p className="text-sm text-gray-500">Details about booking and payment methods...</p>
          <div className="flex justify-start mb-4">
            <img src="https://i.pinimg.com/564x/03/05/81/03058193d2a34f53b890896f7f9ae343.jpg" className='h-10 cursor-pointer' alt="Payment Methods" />
            </div>
        </div>
        <hr className="my-4" />
        <div className="mt-6 flex space-x-4">
          <Link to={`/vehicle/${vehicle.vehiclespec_id}/booking_details`} className="bg-blue-600 text-white px-4 py-2 rounded">Book Now</Link>
        </div>
        <Related />
      </div>
    </div>
  );
};

export default VehicleDetail;
