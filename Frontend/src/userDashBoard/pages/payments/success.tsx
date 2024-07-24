
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Payment Successful!</h2>
        <p className="mb-4">Thank you for your purchase. Your payment has been processed successfully.</p>
        <Link to="/bookings" className="text-blue-500">Go back to DashBoard</Link>
      </div>
    </div>
  );
};

export default Success;
