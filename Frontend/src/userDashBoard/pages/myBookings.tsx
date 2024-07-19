import { authService, TUser, TVehicleSpec } from "../../services/service";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { Link, useParams } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';


function Projects() {
    const { data: bookingData } = authService.useGetBookingsQuery();
    const { data: userData } = authService.useGetUsersQuery();
    const { data: vehicleData } = authService.useGetVehicleSpecQuery();
    
    const authState = useSelector((state: RootState) => state.auth);
    const user = authState.user as TUser | null;
    const { user_id } = user as TUser;

    const combineData = () => {
        if (!bookingData || !userData || !vehicleData) return [];
        
        return bookingData
            .filter((data) => data.user_id === user_id)
            .map((data) => {
                const vehicle = vehicleData.find((v: TVehicleSpec) => v.vehiclespec_id === data.vehiclespec_id);
                return {
                    ...data,
                    vehicleImage: vehicle ? vehicle.image : '',
                    vehicleModel: vehicle ? vehicle.model : '',
                };
            });
    };

    const combinedData = combineData();

    const { id } = useParams();
    const vehicle = vehicleData?.find(v => v.vehiclespec_id === Number(id));
    
    const makePayment = async (bookingId: number, amount: number) => {
        console.log(bookingId,amount)
            try {
                const response = await fetch('https://vehicle-system-backend.onrender.com/checkout-session', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({bookingId,amount})
                });

                const { checkoutUrl } = await response.json();
              
                window.location.href = checkoutUrl;
            } catch (error) {
                console.error("Error creating checkout session:", error);
            }
        }
    

    return (
        <div className="p-4">
            <div className="text-gray-400 mb-4">
                <Link to="/" className="hover:text-white">Dashboard</Link> / 
                <span>All Bookings</span>
            </div>

            <h1 className="text-2xl font-semibold mb-6 text-slate-100">All Bookings</h1>

            {combinedData.length === 0 ? (
                <div className="text-gray-400">You have not made any booking yet.</div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-gray-800 text-slate-100 text-nowrap">
                                <th className="px-4 py-2 text-left">Vehicle</th>
                                <th className="px-4 py-2 text-left">Model</th>
                                <th className="px-4 py-2 text-left">Price</th>
                                <th className="px-4 py-2 text-left">Booking Period</th>
                                <th className="px-4 py-2 text-left">Booking Date</th>
                                <th className="px-4 py-2 text-left">Return Date</th>
                                <th className="px-4 py-2 text-left">Return Status</th>
                                <th className="px-4 py-2 text-left">Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {combinedData.map((data) => (
                                <tr key={data.booking_id} className="bg-gray-700 text-slate-200">
                                    <td className="px-4 py-2 flex items-center space-x-2">
                                        <img src={data.vehicleImage} alt="Vehicle" className="w-14 h-10 rounded-sm" />
                                    </td>
                                    <td className="px-4 py-2">{data.vehicleModel}</td>
                                    <td className="px-4 py-2">${data.total_amount}</td>
                                    <td className="px-4 py-2">{data.booking_period}</td>
                                    <td className="px-4 py-2">{data.booking_date}</td>
                                    <td className="px-4 py-2">{data.return_date}</td>
                                    <td className="px-4 py-2">{data.booking_status}</td>
                                    <td className="px-4 py-2">
                                    <button onClick={() => makePayment(data.booking_id,data.total_amount)} className="btn btn-primary btn-sm">Pay</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Projects;
