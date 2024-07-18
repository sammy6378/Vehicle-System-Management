import { useParams } from 'react-router-dom';
import { Tlocation, TUser, useGetLocationQuery, useGetVehicleSpecQuery, useCreateBookingMutation } from "../../../services/service";
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/Store';
import { useForm } from 'react-hook-form';
import { authService } from '../../../services/service';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type formData = {
  user_id: number,
  vehiclespec_id: number;
  location_id: number;
  total_amount: number;
  booking_date: string;
  return_date: string;
  booking_period: string;
}

function Payment() {
  const authState = useSelector((state: RootState) => state.auth);
  const user = authState.user as TUser | null;
  const { user_id: UId } = user as TUser;
  const { id } = useParams();
  const { data: VehicleSpec } = useGetVehicleSpecQuery();
  const { data: locations } = useGetLocationQuery();
  const { data: vehicles } = authService.useGetVehiclesQuery();
  
  const vehicle = VehicleSpec?.find(v => v.vehiclespec_id === Number(id));
  const vehicleDetails = vehicles?.find(v => v.vehiclespec_id === Number(id));

  const [bookingData] = useCreateBookingMutation();
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<formData>();

  const [rentalPeriod, setRentalPeriod] = useState("day");
  const [calculatedPrice, setCalculatedPrice] = useState(vehicle?.price || 0);

  const calculateReturnDate = (bookingDate: string, period: string): string => {
    const date = new Date(bookingDate);
    if (period === "week") {
      date.setDate(date.getDate() + 7);
    } else if (period === "month") {
      date.setMonth(date.getMonth() + 1);
    } else if (period === "year") {
      date.setFullYear(date.getFullYear() + 1);
    }
    return date.toISOString().split('T')[0];
  }

  const calculatePrice = (period: string): number => {
    const dailyRate = vehicle?.price || 0;
    const rentalRate = vehicleDetails?.rental_rate || 0;
    let multiplier = 1;

    if (period === "week") {
      multiplier = 7;
    } else if (period === "month") {
      multiplier = 30;
    } else if (period === "year") {
      multiplier = 365;
    }

    return dailyRate * multiplier + rentalRate;
  }

  const handleRentalPeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const period = e.target.value;
    setRentalPeriod(period);
    setCalculatedPrice(calculatePrice(period));
    setValue("return_date", calculateReturnDate(watch("booking_date"), period));
  }

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setValue("booking_date", today);
    setValue("return_date", calculateReturnDate(today, rentalPeriod));
  }, [rentalPeriod, setValue]);

  const onSubmit = async (data: formData) => {
    data.user_id = UId;
    data.vehiclespec_id = Number(vehicle?.vehiclespec_id);
    data.total_amount = Number(calculatedPrice);
    data.location_id = Number(data.location_id);
    data.booking_period = rentalPeriod;
 
    try {
      await bookingData(data).unwrap();
      toast.success("Booking details saved successfully!");
    } catch (error) {
      toast.error("Failed to save booking details.");
    }
  };


  return (
    <div className='bg-slate-50 p-4'>
      <ToastContainer />
      <div className="flex items-center text-black">
        <span className={`w-6 h-6 bg-indigo-600 text-white border border-gray-200 rounded-full flex justify-center items-center mr-3 lg:w-10 lg:h-10`}>1</span>Booking Details
      </div>

      <div className="flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)}>
          <>
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
              <h2 className="text-center text-xl font-bold mb-4">Booking Details</h2>
              <div className="text-gray-600 text-lg font-medium mb-4">
                Payment amount
                <span className="block text-gray-900 text-2xl">${calculatedPrice}</span>
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="rentalPeriod">
                  Rental Period
                </label>
                <select
                  id="rentalPeriod"
                  {...register("booking_period", { required: true })}
                  onChange={handleRentalPeriodChange}
                  className="block w-full h-11 px-4 py-2 bg-white text-base text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                >
                  <option value="day">Day</option>
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </select>
                {errors.booking_period && <span className="text-red-600">Rental period is required</span>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="bookingDate">
                  Booking Date
                </label>
                <input
                  type="date"
                  id="bookingDate"
                  {...register("booking_date", { required: true })}
                  className="block w-full h-11 px-4 py-2 bg-white text-base text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                />
                {errors.booking_date && <span className="text-red-600">Booking date is required</span>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="returnDate">
                  Return Date
                </label>
                <input
                  type="date"
                  id="returnDate"
                  {...register("return_date", { required: true })}
                  className="block w-full h-11 px-4 py-2 bg-white text-base text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                />
                {errors.return_date && <span className="text-red-600">Return date is required</span>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="locationId">
                  Select Branch
                </label>
                <select
                  id="locationId"
                  {...register("location_id", { required: true })}
                  className="block w-full h-11 px-4 py-2 bg-white text-base text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                >
                  <option value="" disabled>Select a branch</option>
                  {locations?.map((location: Tlocation) => (
                    <option key={location.location_id} value={location.location_id}>
                      {location.name}
                    </option>
                  ))}
                </select>
                {errors.location_id && <span className="text-red-600">Location is required</span>}
              </div>
              <input type="text" id="user_id" hidden value={UId} />
              <button type="submit" className="w-full h-12 shadow-sm rounded-full bg-teal-500 hover:bg-teal-700 transition-all duration-700 text-white text-base font-semibold leading-7">
                Save Details
              </button>
            </div>
          </>
        </form>
      </div>
    </div>
  )
}

export default Payment;
