
import { useForm } from "react-hook-form";
import { authService } from "../../services/service"
import { TForgot } from "../../services/service";
import { toast, ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom";

function ResetEmail() {

    const [forgot] = authService.useForgotPasswordMutation();
    const { register, handleSubmit, formState: { errors } } = useForm<TForgot>();

    const onsubmit = async (email:TForgot) => {
        try {
        await forgot(email).unwrap(); // unwrap the promise
        toast.success("Email sent successfully!");
        } catch (error) {
            toast.error("Failed to send email.");
        }
    }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-40">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full relative">
       <ToastContainer />
    <form  onSubmit={handleSubmit(onsubmit)}>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Reset Your Password</h2>
      <input
        type="email"
        {...register("email", { required: true })}
        placeholder="Enter your email"
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
       {errors.email && <span className="text-red-600">Email is required</span>}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Send Reset Email
      </button>
      <p className="mt-6 text-sm text-gray-600">
        By clicking the "Send Reset Email" button, you agree to our{' '}
        <a href="#" className="text-blue-500 hover:text-blue-600">Terms of Service</a> and{' '}
        <a href="#" className="text-blue-500 hover:text-blue-600">Privacy Policy</a>.
      </p>
      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-500 hover:text-blue-600">Log in</Link>
      </p>
      <p className="mt-2 text-sm text-gray-600">
        Don't have an account?{' '}
        <Link to="/register" className="text-blue-500 hover:text-blue-600">Sign up</Link>
      </p>
    </form>
    </div>
    </div>
  );
}

export default ResetEmail;
