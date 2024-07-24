import { useForm } from "react-hook-form";
import { authService } from "../../services/service"
import { toast, ToastContainer } from 'react-toastify';
import { useLocation,useNavigate } from "react-router-dom";

export type TReset = {
  password: string;
  confirm_password: string;
  token: string; // URL query parameter token
};

function ResetPassword() {
  const [reset] = authService.useResetPasswordMutation();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<TReset>();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');
  
  const onsubmit = async () => {
      if (!token) {
        toast('Invalid or expired token.');
        return;
      }
  
      try {
        await reset({ token, password }).unwrap();
        toast('Password reset successful. You can now log in.'); 
        navigate('/login'); // Redirect to login page on success
      } catch (error) {
        toast('An error occurred. Please try again.');
      }
    };

  const password = watch("password");

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-40">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full relative">
         <ToastContainer />
      <form onSubmit={handleSubmit(onsubmit)}>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Reset Your Password</h2>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          placeholder="Enter your password"
          className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && <span className="text-red-600">{errors.password.message}</span>}
        <input
          type="password"
          {...register("confirm_password", {
            required: "Please confirm your password",
            validate: value => value === password || "Passwords do not match"
          })}
          placeholder="Confirm your password"
          className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.confirm_password && <span className="text-red-600">{errors.confirm_password.message}</span>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Reset Password
        </button>
        <p className="mt-6 text-sm text-gray-600">
          By clicking the "Reset Password" button, you agree to our{' '}
          <a href="#" className="text-blue-500 hover:text-blue-600">Terms of Service</a> and{' '}
          <a href="#" className="text-blue-500 hover:text-blue-600">Privacy Policy</a>.
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:text-blue-600">Log in</a>
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500 hover:text-blue-600">Sign up</a>
        </p>
      </form>
    </div>
    </div>
  );
}

export default ResetPassword;
