
import { Link } from 'react-router-dom';

const Cancel = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Payment Canceled</h2>
        <p className="mb-4">It seems like the payment process was canceled. No worries, you can try again.</p>
        <Link to="/bookings" className="text-blue-500">Go back to Home</Link>
      </div>
    </div>
  );
};

export default Cancel;
