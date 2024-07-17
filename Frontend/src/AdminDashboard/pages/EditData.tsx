import { useForm } from 'react-hook-form';
import { useParams, Link } from 'react-router-dom';
import { TVehicleSpec } from '../../services/service';
import { useEffect } from 'react';
import { VehcileSpecApi } from '../../Slices/VehiclespecApi';

const Edit = () => {

  const { register, handleSubmit, setValue } = useForm<TVehicleSpec>();
  // const [updateVehicle] = VehcileSpecApi.useUpdateVehicleSpecMutation();

  const { id } = useParams<{ id: string }>();

  const { data: VehicleSpec } = VehcileSpecApi.useGetVehicleSpecQuery();

  const vehicle = VehicleSpec?.find((v) => v.vehiclespec_id === Number(id));

  if (!vehicle) {
    return <div>Loading...</div>;
  }

  // Populate form fields with vehicle data
  useEffect(() => {
    if (vehicle) {
      setValue('manufacturer', vehicle.manufacturer);
      setValue('model', vehicle.model);
      setValue('status', vehicle.status);
      setValue('price', vehicle.price);
      setValue('location', vehicle.location);
      setValue('time', vehicle.time);
      setValue('transmission', vehicle.transmission);
      setValue('mileage', vehicle.mileage);
      setValue('fuel_type', vehicle.fuel_type);
      setValue('engine_capacity', vehicle.engine_capacity);
      setValue('seating_capacity', vehicle.seating_capacity);
      setValue('color', vehicle.color);
      setValue('features', vehicle.features);
    }
  }, [vehicle, setValue]);

  const onSubmit = (data: TVehicleSpec) => {
    // Handle form submission logic here
    console.log(data);
    // Call mutation to update the vehicle
    // updateVehicle({ variables: { ...data } });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <Link to="/vehicle-management" className="text-white px-2 py-1 bg-blue-500 rounded-sm">
          Back
        </Link>
        <h2 className="text-gray-700 text-3xl font-bold">Edit Vehicle</h2>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-700">Manufacturer</label>
          <input {...register('manufacturer')} className="w-full p-2 rounded bg-white text-black border" />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700">Model</label>
          <input {...register('model')} className="w-full p-2 rounded bg-white text-black border" />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-700">Status</label>
          <input {...register('status')} className="w-full p-2 rounded bg-white text-black border" />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700">Price</label>
          <input {...register('price')} className="w-full p-2 rounded bg-white text-black border" type="number" />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-700">Location</label>
          <input {...register('location')} className="w-full p-2 rounded bg-white text-black border" />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700">Time</label>
          <input {...register('time')} className="w-full p-2 rounded bg-white text-black border" />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-700">Transmission</label>
          <input {...register('transmission')} className="w-full p-2 rounded bg-white text-black border" />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700">Mileage</label>
          <input {...register('mileage')} className="w-full p-2 rounded bg-white text-black border" />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-700">Fuel Type</label>
          <input {...register('fuel_type')} className="w-full p-2 rounded bg-white text-black border" />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700">Engine Capacity</label>
          <input {...register('engine_capacity')} className="w-full p-2 rounded bg-white text-black border" />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-700">Seating Capacity</label>
          <input {...register('seating_capacity')} className="w-full p-2 rounded bg-white text-black border" type="number" />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700">Color</label>
          <input {...register('color')} className="w-full p-2 rounded bg-white text-black border" />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-700">Features</label>
          <input {...register('features')} className="w-full p-2 rounded bg-white text-black border" />
        </div>
      </div>
      <button type="submit" className="w-auto bg-blue-500 text-white px-4 py-2 rounded-md">
        Update Vehicle
      </button>
    </form>
  );
};

export default Edit;