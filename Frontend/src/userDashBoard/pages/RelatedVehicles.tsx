import Slider from 'react-slick';
import { authService } from '../../services/service';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Related = () => {

    const { data: vehicles, isLoading, isError } = authService.useGetVehicleSpecQuery();

    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (isError) {
      return <div>Error loading vehicles</div>;
    }
  
    if (!vehicles || vehicles.length === 0) {
      return <div>No related vehicles found</div>;
    }
  
    const settings = {
    dots: true ,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Related Vehicles</h1>
        <Slider {...settings}>
          {vehicles?.slice(0, 10).map((car) => (
            <div key={car.vehiclespec_id} className="p-4">
              <div className="bg-slate-50 rounded-lg shadow-lg overflow-hidden h-65">
                <img src={car.image} alt={car.model} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-bold">{car.manufacturer}</h2>
                  <p className="mt-2 text-gray-600">{car.features}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
};
 
export default Related;