
import { Bar } from 'react-chartjs-2';
import v1 from '../../assets/v1.png';
import v2 from '../../assets/v2.png';
import v3 from '../../assets/v3.png';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
import { HashLoader } from 'react-spinners';
import { useEffect,useState } from 'react';
function Dash() {

  const [loading,setLoading] = useState(true) 

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 2000) // simulate async loading
  })

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Bookings Rate',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
    {loading ? (<div className='flex justify-center items-center h-screen'><HashLoader color="#17ed84" /></div>):(
    <div className="flex-grow p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Vehicle Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-medium text-gray-900">Total Vehicles</h3>
          <p className="text-3xl font-bold text-gray-800">120</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-medium text-gray-900">Total Bookings</h3>
          <p className="text-3xl font-bold text-gray-800">450</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-medium text-gray-900">Revenue</h3>
          <p className="text-3xl font-bold text-gray-800">$45,000</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-xl font-medium text-gray-900 mb-4">Bookings Rate</h3>
        <Bar data={data} options={options} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-medium text-gray-900 mb-4">Market Vehicles</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={v3} alt="Vehicle 1" className="w-16 h-16 object-cover rounded-lg mr-4" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Mercedes Benz</h4>
                <p className="text-sm text-gray-600">$20,000</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={v1} alt="Vehicle 2" className="w-16 h-16 object-cover rounded-lg mr-4" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">BMW X5</h4>
                <p className="text-sm text-gray-600">$25,000</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={v2} alt="Vehicle 3" className="w-16 h-16 object-cover rounded-lg mr-4" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Audi Q7</h4>
                <p className="text-sm text-gray-600">$30,000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-medium text-gray-900 mb-4">User Bookings</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl font-medium mr-4">AB</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Alex Brown</h4>
                <p className="text-sm text-gray-600">Booked Mercedes Benz</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl font-medium mr-4">CD</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Chris Doe</h4>
                <p className="text-sm text-gray-600">Booked BMW X5</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl font-medium mr-4">EF</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Emma Frost</h4>
                <p className="text-sm text-gray-600">Booked Audi Q7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
    </>
  );
}



export default Dash
