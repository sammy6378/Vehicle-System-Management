import { useState } from 'react';
import { adminservices, TTickects } from '../service';
import { authService, TUser } from '../../services/service';

const SupportTickets = () => {
  const { data: tickets, error, isLoading } = adminservices.useGetTickectsQuery();
  const { data: getusers } = authService.useGetUsersQuery();

  const combineData = () => {
    if (!tickets || !getusers) return [];

    return tickets.map((spec: TTickects) => {
      const user = getusers.find((v: TUser) => v.user_id === spec.user_id);
      return { ...spec, ...user };
    });
  };

  const combinedData = combineData();

  const [response, setResponse] = useState('');
  const [selectedTicket, setSelectedTicket] = useState<TTickects | null>(null);

  const handleResponseSubmit = async () => {
    if (selectedTicket) {
      try {
        // await respondToTicket({ id: selectedTicket.id, response }).unwrap();
        setSelectedTicket(null);
        setResponse('');
      } catch (error) {
        console.error('Failed to respond to ticket:', error);
      }
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading tickets.</div>;

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 max-w-xl gap-4">
        {combinedData?.map((ticket) => (
          <div key={ticket.ticket_id} className="p-3 border rounded-lg shadow-lg bg-white">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/50" // Placeholder for user photo
                alt="User Photo"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <a className="text-lg text-orange-500 font-bold" href={`mailto:${ticket.email}`}>
                  {ticket.email}
                </a>
                <p className="text-gray-500">{ticket.subject}</p>
              </div>
            </div>
            <p className="mt-2 text-gray-700">{ticket.description}</p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => setSelectedTicket(ticket)}
                className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedTicket && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full flex flex-col">
            <h2 className="text-xl font-bold mb-2">Respond to {selectedTicket.subject}</h2>
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              className="w-full p-2 border rounded-md"
              rows={4}
              placeholder="Enter your response"
            ></textarea>
            <div className="mt-2 flex space-x-2">
              <button
                onClick={handleResponseSubmit}
                className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Submit Response
              </button>
              <button
                onClick={() => setSelectedTicket(null)}
                className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportTickets;
