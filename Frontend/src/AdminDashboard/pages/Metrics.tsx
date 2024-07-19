
import { PulseLoader } from "react-spinners";
import { authService } from "../../services/service";
import { paymentsAPI } from "../../userDashBoard/pages/payments/paymentApi";


const Metrics = () => {

    const { data:getUsers,isLoading} = authService.useGetUsersQuery();
    const { data:getBookings} = authService.useGetBookingsQuery();
    const { data:getPayments} = paymentsAPI.useGetPaymentsQuery();
    const { data:getFleets} = authService.useGetFleetsQuery();
    const { data:getVehicles} = authService.useGetVehiclesQuery();
    const { data:getLocations} = authService.useGetLocationQuery();
    const { data:getTickets} = authService.useGetTicketsQuery();

    if (!getUsers ||!getBookings ||!getPayments ||!getVehicles ||!getLocations) return null;
    
    const userCount = getUsers.filter(user => user.role === 'user').length;
    const bookingCount = getBookings.length;
    const paymentCount = getPayments.length;
    const fleetCount = getFleets?.length ?? 0;
    const vehicleCount = getVehicles.length;
    const locationCount = getLocations.length;
    const ticketCount = getTickets?.length ?? 0;



  const stats = [
    { label: 'Users', count: userCount, icon: '👤', bgColor: 'bg-blue-100', textColor: 'text-blue-500' },
    { label: 'Bookings', count: bookingCount, icon: '📚', bgColor: 'bg-green-100', textColor: 'text-green-500' },
    { label: 'Payments', count: paymentCount, icon: '💳', bgColor: 'bg-yellow-100', textColor: 'text-yellow-500' },
    { label: 'Fleets', count: fleetCount, icon: '🚛', bgColor: 'bg-purple-100', textColor: 'text-purple-500' },
    { label: 'Vehicles', count: vehicleCount, icon: '🚗', bgColor: 'bg-red-100', textColor: 'text-red-500' },
    { label: 'Pending Tickets', count: ticketCount, icon: '🎫', bgColor: 'bg-red-100', textColor: 'text-red-500' },
    { label: 'Solved Tickets', count: 0, icon: '🎟️', bgColor: 'bg-green-100', textColor: 'text-green-500' },
    { label: 'Locations', count: locationCount, icon: '📍', bgColor: 'bg-pink-100', textColor: 'text-pink-500' },
  ];

  return (
    <div className="p-4">
      {isLoading?(<div className="flex justify-center py-2"><PulseLoader color="#19f519" /></div>):(
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className={`p-4 rounded-lg shadow-md ${stat.bgColor}`}>
            <div className="flex items-center">
              <div className={`text-2xl ${stat.textColor} mr-2`}>{stat.icon}</div>
              <div>
                <div className="text-xl font-bold">{stat.count}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default Metrics;
