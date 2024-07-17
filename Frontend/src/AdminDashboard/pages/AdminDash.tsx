
import { Bar, Scatter } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Total Bookings',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Revenue Generated',
        data: [28, 48, 40, 19, 86, 27],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const scatterData = {
    datasets: [
      {
        label: 'Key Metrics',
        data: [
          { x: 10, y: 20 },
          { x: 20, y: 30 },
          { x: 30, y: 40 },
          { x: 40, y: 50 },
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="p-6 flex flex-col space-y-4">
      <div className="text-2xl font-bold mb-3">Dashboard Overview</div>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-medium text-gray-900">Total Vehicles</h3>
          <p className="text-3xl font-bold text-gray-800">120</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-medium text-gray-900">Total Bookings</h3>
          <p className="text-3xl font-bold text-gray-800">450</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-medium text-gray-900">Revenue</h3>
          <p className="text-3xl font-bold text-gray-800">$45,000</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Bar data={barData} />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Scatter data={scatterData} />
      </div>
    </div>
  );
};

export default Dashboard;
