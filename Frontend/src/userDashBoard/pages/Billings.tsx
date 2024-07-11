import  { useState } from 'react';

const BillingPage = () => {
  const [billings, setBillings] = useState([
      { id: 1, customer: 'Samuel Mwangi', amount: '$450', date: '2024-09-02', status: 'Paid' },
      { id: 2, customer: 'Samuel Mwangi', amount: '$150', date: '2024-07-02', status: 'Paid' },
      { id: 3, customer: 'Samuel Mwangi', amount: '$300', date: '2024-07-03', status: 'Unpaid' },
      { id: 4, customer: 'Samuel Mwangi', amount: '$200', date: '2024-07-01', status: 'Pending' },
  ]);

  const markAsPaid = (id:number) => {
    setBillings(billings.map(billing => 
      billing.id === id ? { ...billing, status: 'Paid' } : billing
    ));
  };

  return (
    <div className="min-h-screen pt-5 bg-gray-100 flex items-start justify-center">
      <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Customer Billings</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">ID</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Customer</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Amount</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Date</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Status</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {billings.map(billing => (
                <tr key={billing.id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{billing.id}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{billing.customer}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{billing.amount}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{billing.date}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{billing.status}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                    {billing.status === 'Unpaid' && (
                      <button
                        onClick={() => markAsPaid(billing.id)}
                        className="bg-green-500 text-white px-3 py-2 rounded-lg"
                      >
                        Mark as Paid
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
