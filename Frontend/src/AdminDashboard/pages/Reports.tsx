
import { Bar } from 'react-chartjs-2';
// import { Pie } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { authService } from '../../services/service';

const Reports = () => {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-white">Reports</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <BookingSummary />
          <RevenueReport />
          {/* <VehicleUtilization /> */}
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
      <div className="bg-stone-100 p-4 border rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2 text-black">Booking Summary</h2>
        <Bar data={chartData} />
      </div>
    );
  };
  
  const RevenueReport = () => {
    const { data } = authService.useGetBookingsQuery();
   
  
    const chartData = {
      labels: data?.map(item => item.booking_date) || [],
      datasets: [
        {
          label: 'Revenue',
          data: data?.map(item => item.total_amount) || [],
          backgroundColor: 'rgba(153, 102, 255, 0.6)',
          borderColor: 'rgba(153, 102, 255, 1)',
          fill: false,
        },
      ],
    };
  
    return (
      <div className="bg-stone-100 p-4 border rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2">Revenue Summary</h2>
        <Line data={chartData} />
      </div>
    );
  };

  // const VehicleUtilization = () => {
  //   const { data } = authService.useGetBookingsQuery();
  
  //   const chartData = {
  //     labels: data?.map(item => item.booking_date) || [],
  //     datasets: [
  //       {
  //         label: 'Utilization',
  //         data: data?.map(item => item.booking_status) || [],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.6)',
  //           'rgba(54, 162, 235, 0.6)',
  //           'rgba(255, 206, 86, 0.6)',
  //           'rgba(75, 192, 192, 0.6)',
  //           'rgba(153, 102, 255, 0.6)',
  //           'rgba(255, 159, 64, 0.6)',
  //         ],
  //       },
  //     ],
  //   };
  
  //   return (
  //     <div className="p-4 border rounded-lg shadow-lg">
  //       <h2 className="text-xl font-bold mb-2">Vehicle Utilization</h2>
  //       <Pie data={chartData} />
  //     </div>
  //   );
  // };
  
  export default Reports;