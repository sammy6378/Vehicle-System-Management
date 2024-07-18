
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify'; // For notifications
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

type formData={
    subject: string;
    description: string;
  };


const CreateTicketForm = () => {
  const { register, handleSubmit} = useForm<formData>();

  const onSubmit = (data:formData) => {
    // Handle form submission
    console.log(data);
    toast.success('Ticket submitted successfully!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Create Support Ticket</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="subject" className="block text-gray-700">Subject</label>
            <input
              id="subject"
              type="text"
              {...register('subject', { required: true })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter the subject"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-gray-700">Description</label>
            <textarea
              id="description"
              {...register('description', { required: true })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Describe your issue"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTicketForm;
