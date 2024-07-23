
import { Bar} from 'react-chartjs-2';
import 'chart.js/auto';
import Metrics from './Metrics';
import { authService } from '../../services/service';


const Dashboard = () => {
  const { data } =authService.useGetBookingsQuery();
  if (!data) return null;


  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Total Bookings',
        data: [65, 59, 80, 81, 56, 55] || [],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Revenue Generated',
        data: data?.map(item => item.total_amount) || [],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return (
    <div className="p-6 flex flex-col space-y-4">
      <div className="text-2xl font-bold mb-3 text-white">Dashboard Overview</div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Metrics />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default Dashboard;
