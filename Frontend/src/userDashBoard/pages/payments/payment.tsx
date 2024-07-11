
import { useParams } from 'react-router-dom';
import { authService,Tlocation, TUser, useGetLocationQuery, useGetVehicleSpecQuery } from "../../../services/service";
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/Store';
import { paymentsAPI } from './paymentApi';
import { loadStripe } from '@stripe/stripe-js';
import { useForm } from 'react-hook-form';


type formData={
  user_id:number,
  vehiclespec_id: number;
  location_id: number;
  total_amount: number;
  booking_date: string;
  return_date: string;
}

function Payment() {
  const authState = useSelector((state: RootState) => state.auth);
  const user = authState.user as TUser | null;
  const {user_id:UId} = user as TUser;
  const { id } = useParams();
  const { data: VehicleSpec } = useGetVehicleSpecQuery();
  const {data:locations} = useGetLocationQuery();
  const vehicle = VehicleSpec?.find(v => v.vehiclespec_id === Number(id));

  const [paymentData] = paymentsAPI.useCreatePaymentMutation();
  const [bookingData] = authService.useCreateBookingMutation();
  const { register, handleSubmit, formState: { errors } } = useForm<formData>();

  
  const onSubmit = (data:formData) => {
    data.user_id = UId;
    data.vehiclespec_id =Number(vehicle?.vehiclespec_id);
    console.log(data)
    // bookingData(data)
  };


  const makePayment = async (data:formData)=>{
  
  const res = await bookingData(data)

  if(paymentData){
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE!)

    const stripe = await stripePromise;
    const [{booking_id}] = res.data || [];
    const payment = {
        name:vehicle?.model,
        image:vehicle?.image,
        feature:vehicle?.features,
        amount:vehicle?.price,
        bookingId:booking_id
    }
    
    const response = await paymentData(payment)
    const session = response.data
    if (session?.payment_id) {
      await stripe?.redirectToCheckout({sessionId: session.payment_id.toString()});
    } else {
      console.error("Payment ID is not available");
    }
}}
  


  return (
    <div className='bg-slate-50 p-4'>
      <div className="flex items-center text-black">
        <span className={`w-6 h-6 bg-indigo-600 text-white border border-gray-200 rounded-full flex justify-center items-center mr-3 lg:w-10 lg:h-10`}>1</span>Booking Details
      </div>

      <div className="flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)}>
            <>
              <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-12">
                <h2 className="text-center text-xl font-bold mb-4">Booking Details</h2>
                <div className="text-gray-600 text-lg font-medium mb-4">
                  Payment amount
                  <span className="block text-gray-900 text-2xl">${vehicle?.price}</span>
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
                  {errors.booking_date && <span className="text-red-600">bookingDate is required</span>}
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
                  {errors.return_date && <span className="text-red-600">ReturnDate is required</span>}
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
                  {errors.location_id && <span className="text-red-600">locationId is required</span>}
                    <option value="" disabled>Select a branch</option>
                    {locations?.map((location: Tlocation) => (
                      <option key={location.location_id} value={location.location_id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>
                <input type="text" id="user_id" hidden value={UId} />
                <button type="submit" className="w-full h-12 shadow-sm rounded-full bg-teal-500 hover:bg-teal-700 transition-all duration-700 text-white text-base font-semibold leading-7">
                  Pay ${vehicle?.price}
                </button>
              </div>
            </>
        </form>
      </div>
    </div>
  )
}

export default Payment;
