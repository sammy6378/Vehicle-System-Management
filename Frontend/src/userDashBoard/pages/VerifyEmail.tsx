import { useState } from "react";
import { useForm } from "react-hook-form";
import { authService } from "../../services/service";
import { TForgot } from "../../services/service";
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";

function ResetEmail() {
    const [isEmailSent, setIsEmailSent] = useState(false); // Tracks whether the email was sent
    const [forgot] = authService.useForgotPasswordMutation();
    const { register, handleSubmit, formState: { errors } } = useForm<TForgot>();
    const navigate = useNavigate(); // Hook to handle navigation

    const onSubmit = async (email: TForgot) => {
        try {
            await forgot(email).unwrap(); // Unwrap the promise
            setIsEmailSent(true); // Set email sent state to true
            toast.success("Email sent successfully!");
        } catch (error) {
            toast.error("Failed to send email.");
        }
    };

    // Redirect the user if they try to go back to the form after email is sent
    const handleGoToLogin = () => {
        navigate("/login");
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-40">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full relative">
                <ToastContainer />

                {isEmailSent ? (
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Email Sent!</h2>
                        <p className="mb-4 text-gray-600">A confirmation email has been sent to your inbox. Please check your email to reset your password.</p>
                        <button
                            onClick={handleGoToLogin}
                            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Go to Login
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                )}
            </div>
        </div>
    );
}

export default ResetEmail;
