import  { useState } from 'react';
import { TBooking, TUser,authService } from '../../services/service';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import { useEffect } from 'react';

const BillingPage = () => {

  const authState = useSelector((state: RootState) => state.auth);
  const user = authState.user as TUser | null;
  const { user_id,user_name } = user as TUser;

  const { data: bookingData,isError,isLoading } = authService.useGetBookingsQuery();

  const [billings, setBillings] = useState<TBooking[]>([]);

  useEffect(() => {
    if (bookingData && user_id) {
      const userBookings = bookingData.filter((booking: TBooking) => booking.user_id === user_id);
      setBillings(userBookings);
    }
  }, [bookingData, user_id]);


  const markAsPaid = (id:number) => {
    setBillings(billings.map(billing => 
      billing.booking_id === id ? { ...billing, status: 'Paid' } : billing
    ));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading bookings</div>;
  }


  return (
    <div className="min-h-screen pt-5 bg-gray-100 flex items-start justify-center">
      <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Customer Billings</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">ID</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Customer</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Amount</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Date</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Status</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {billings.map(billing => (
                <tr key={billing.booking_id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{billing.booking_id}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{user_name}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{billing.total_amount}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{billing.booking_date}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{billing.booking_status}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                    {billing.booking_status === 'pending' && (
                      <button
                        onClick={() => markAsPaid(billing.booking_id)}
                        className="bg-green-500 text-white px-3 py-2 rounded-lg"
                      >
                        Mark as Paid
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
