import { useRef } from 'react';
import { FaRoad} from 'react-icons/fa';
import { ChevronsRight, ChevronsLeft } from 'lucide-react';
import { useGetVehicleSpecQuery } from '../services/service';
import { Link } from 'react-router-dom';


function Collection() {
  const { data: VehicleSpec } = useGetVehicleSpecQuery();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      containerRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id='collection' className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-3xl my-3 text-black">Collection</p>
          <h2 className="text-3xl font-extrabold text-black">Our Cars <span className="text-orange-500">Collection</span></h2>
        </div>
        
        <div ref={containerRef} className="mt-12 flex space-x-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar">
          {VehicleSpec?.slice(0, 15).map(spec => (
            <div key={spec.vehiclespec_id} className="relative overflow-hidden bg-slate-200 rounded-lg shadow-lg flex-shrink-0 w-80 snap-center">
              <img src={spec.image} className="h-48 w-full object-cover relative z-0 transition-all duration-300 hover:scale-110" alt="Toyota Supra" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{spec.model}</h3>
                <p className="text-sm text-red-500">{spec.price}/day</p>
                <div className="mt-4 flex items-center space-x-4">
                  <span className="flex items-center text-gray-700">
                    <i className="fa fa-car"></i>
                    <span className="ml-2 text-sm">{spec.seating_capacity} Seats</span>
                  </span>
                  <span className="flex items-center text-gray-700">
                    <FaRoad />
                    <span className="ml-2 text-sm">{spec.fuel_type}</span>
                  </span>
                  <span className="flex items-center text-gray-700">
                    <i className="fa fa-cogs"></i>
                    <span className="ml-2 text-sm">{spec.transmission}</span>
                  </span>
                </div>
                <div className='mt-6 flex space-x-2'>
                  <Link to='/register' className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg">Details</Link>
                  <Link to='/register' className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg">Book Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center space-x-4">
          <button onClick={() => handleScroll('left')} className="px-4 py-2 bg-gray-300 rounded-full">
            <ChevronsLeft color="#000000" />
          </button>
          <button onClick={() => handleScroll('right')} className="px-4 py-2 bg-gray-300 rounded-full">
            <ChevronsRight color="#000000" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Collection;
