
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { authService } from '../../services/service';

const Reports = () => {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Reports</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <BookingSummary />
          {/* <RevenueReport />
          <VehicleUtilization /> */}
        </div>
      </div>
    );
  };
  
 
  const BookingSummary = () => {

    const { data } =authService.useGetBookingsQuery();
  
    const chartData = {
      labels: data?.map(item => item.booking_date) || [],
      datasets: [
        {
          label: 'Bookings',
          data: data?.map(item => item.booking_id) || [],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ],
    };
  
    return (
      <div className="p-4 border rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2">Booking Summary</h2>
        <Bar data={chartData} />
      </div>
    );
  };
  
//   const RevenueReport = () => {
//     const { data } = useGetRevenueReportQuery();
  
//     const chartData = {
//       labels: data?.map(item => item.date) || [],
//       datasets: [
//         {
//           label: 'Revenue',
//           data: data?.map(item => item.revenue) || [],
//           backgroundColor: 'rgba(153, 102, 255, 0.6)',
//           borderColor: 'rgba(153, 102, 255, 1)',
//           fill: false,
//         },
//       ],
//     };
  
//     return (
//       <div className="p-4 border rounded-lg shadow-lg">
//         <h2 className="text-xl font-bold mb-2">Revenue Report</h2>
//         <Line data={chartData} />
//       </div>
//     );
//   };

//   const VehicleUtilization = () => {
//     const { data } = useGetVehicleUtilizationQuery();
  
//     const chartData = {
//       labels: data?.map(item => item.vehicle) || [],
//       datasets: [
//         {
//           label: 'Utilization',
//           data: data?.map(item => item.utilization) || [],
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.6)',
//             'rgba(54, 162, 235, 0.6)',
//             'rgba(255, 206, 86, 0.6)',
//             'rgba(75, 192, 192, 0.6)',
//             'rgba(153, 102, 255, 0.6)',
//             'rgba(255, 159, 64, 0.6)',
//           ],
//         },
//       ],
//     };
  
//     return (
//       <div className="p-4 border rounded-lg shadow-lg">
//         <h2 className="text-xl font-bold mb-2">Vehicle Utilization</h2>
//         <Pie data={chartData} />
//       </div>
//     );
//   };
  
  export default Reports;