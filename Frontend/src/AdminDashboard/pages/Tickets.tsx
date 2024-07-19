import { useState } from 'react';
import { adminservices, TTickects } from '../service';


const SupportTickets = () => {
  const { data: tickets, error, isLoading } = adminservices.useGetTickectsQuery();
 
//   const [respondToTicket] = useRespondToTicketMutation();
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
    <div className="p-6 space-y-4">
      {tickets?.map((ticket) => (
        <div key={ticket.ticket_id} className="p-4 border rounded-lg shadow-lg bg-white">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/50" // Placeholder for user photo
              alt="User Photo"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-lg font-bold">{ticket.email}</h3>
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

      {selectedTicket && (
        <div className="p-6 border mt-4 rounded-lg shadow-lg bg-white">
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
      )}
    </div>
  );
};

export default SupportTickets;
