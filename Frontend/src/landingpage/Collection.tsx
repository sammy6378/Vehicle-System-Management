import { FaRoad } from 'react-icons/fa';
import { useGetVehicleSpecQuery } from '../services/service';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Collection() {
  const { data: VehicleSpec } = useGetVehicleSpecQuery();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section id='collection' className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-3xl my-3 text-black">Collection</p>
          <h2 className="text-3xl font-extrabold text-black">Our Cars <span className="text-orange-500">Collection</span></h2>
        </div>
        
        <div className="mt-12 container mx-auto p-3">
          <Slider {...settings}>
            {VehicleSpec?.slice(0, 15).map(spec => (
              <div key={spec.vehiclespec_id} className="p-2">
                <div className="relative overflow-hidden bg-slate-200 rounded-lg shadow-lg flex-shrink-0 w-auto snap-center">
                  <div className="relative h-44">
                    <img src={spec.image} className="h-full w-full object-cover transition-all duration-300 hover:scale-110" alt={spec.model} />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900">{spec.model}</h3>
                    <p className="text-sm text-red-500">{spec.price}/day</p>
                    <div className="flex items-center space-x-3 py-1">
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
                    <div className='mt-2 flex space-x-2'>
                      <Link to='/register' className="w-full px-2 py-2 bg-blue-600 text-white text-center rounded-lg">Details</Link>
                      <Link to='/register' className="w-full px-2 py-2 bg-blue-600 text-white text-center rounded-lg">Book Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Collection;
