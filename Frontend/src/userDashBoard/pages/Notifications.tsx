
import { FaTimes, FaClock } from 'react-icons/fa';

const notifications = [
  {
    id: 1,
    type: 'Joined New User',
    typeColor: 'bg-green-500',
    title: 'New Registration: Finibus Bonorum et Malorum',
    message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    user: 'Allen Deu',
    date: '7/17/2024 at 9:30AM',
  },
  {
    id: 2,
    type: 'Message',
    typeColor: 'bg-yellow-500',
    title: 'Darren Smith sent new message',
    message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    user: 'Darren',
    date: '7/17/2024 at 9:30AM',
  },
  {
    id: 3,
    type: 'Comment',
    typeColor: 'bg-purple-500',
    title: 'Arin Ganshiram Commented on post',
    message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    user: 'Arin Ganshiram',
    date: '7/17/2024 at 9:30AM',
  },
  // Add more notifications as needed
];

const NotificationPage = () => {
  return (
    <div className=" bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">NOTIFICATIONS</h2>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="bg-white p-4 rounded-lg shadow-md flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <button className="text-gray-400 hover:text-gray-600">
                    <FaTimes />
                  </button>
                </div>
                <div>
                  <span className={`inline-block px-2 py-1 text-white text-sm rounded-sm ${notification.typeColor}`}>
                    {notification.type}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800">{notification.title}</h3>
                  <p className="text-gray-600">{notification.message}</p>
                  <p className="text-red-500 font-bold">{notification.user}</p>
                </div>
              </div>
              <div className="text-gray-400 text-sm flex items-center space-x-1">
                <FaClock />
                <span className='text-xs'>{notification.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;

