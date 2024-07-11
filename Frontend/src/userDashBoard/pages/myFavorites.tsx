import { useState } from 'react';

const FavoriteVehicles = () => {
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'Mercedes Benz', price: '$20,000', image: 'https://i.pinimg.com/564x/c4/a7/8a/c4a78a5fea34f9c802f9721efc9a61bb.jpg' },
    { id: 2, name: 'BMW X5', price: '$25,000', image: 'https://i.pinimg.com/564x/57/dd/27/57dd278f195aa5920bd1fd8523deec06.jpg' },
    { id: 3, name: 'Audi Q7', price: '$30,000', image: 'https://i.pinimg.com/736x/23/2e/4a/232e4ad6a5b5921df036d5d09feb8d0b.jpg' },
  ]);

  const removeFavorite = (id:number) => {
    setFavorites(favorites.filter(vehicle => vehicle.id !== id));
  };

  return (
    <div className="min-h-screen py-5 bg-gray-100 flex items-start justify-center">
      <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Favorite Vehicles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map(vehicle => (
            <div key={vehicle.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={vehicle.image} alt={vehicle.name} className="w-full h-32 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">{vehicle.name}</h3>
              <p className="text-gray-600">{vehicle.price}</p>
              <button
                onClick={() => removeFavorite(vehicle.id)}
                className="mt-4 w-full bg-red-500 text-white px-3 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteVehicles;
