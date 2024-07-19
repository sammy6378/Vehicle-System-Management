import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify'; // Import toast container
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import { authService } from '../../services/service';
import { TUser } from '../../services/service';
import { RootState } from '../../store/Store';
import { useSelector } from 'react-redux';

type formData = {
  user_id: number;
  subject: string;
  description: string;
};

const CreateTicketForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const authState = useSelector((state: RootState) => state.auth);
  const user = authState.user as TUser | null;
  const { user_id } = user as TUser;
  const [createTicket] = authService.useCreateTicketMutation();
  const { register, handleSubmit } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    setIsSubmitting(true);
    try {
      data.user_id = user_id;
      await createTicket(data).unwrap(); // Unwrap result to get the return value
      toast.success('Ticket submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit ticket. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
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
            className={`w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${isSubmitting ? 'cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending Ticket...' : 'Submit Ticket'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTicketForm;
