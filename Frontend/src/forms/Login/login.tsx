import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthUserMutation } from "../../services/service";
import { Link, useNavigate } from 'react-router-dom';
import { login } from "../Auth/UserSlice";
import { setAdmin } from "../Auth/AdminSlice";
import { useDispatch } from "react-redux";
import { PulseLoader } from "react-spinners";

type formData = {
    email: string;
    password: string;
}

function Login() {
    const [userLogin] = useAuthUserMutation();
    const [checked, setChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<formData>();
    const navigate = useNavigate();
    const dispatch = useDispatch();
 
    const onSubmit = async (data: formData) => {
        setLoading(true);
        try {
            const response = await userLogin(data).unwrap();
            const { token, user_id, user_name, role, status } = response;
         
            if (status === 'disabled') {
                setErrorMessage('Your account is disabled. Please contact support.');
            } else if (role && typeof role === 'string') {
                if (role.includes('admin')) {
                    dispatch(setAdmin({ token, user_id, user_name, role }));
                    navigate('/admin-dashboard');
                } else if (role.includes('user')) {
                    dispatch(login({ token, user_id, user_name, role }));
                    navigate('/dashboard');
                } else {
                    setErrorMessage("You do not have the required privileges.");
                }
            } else {
                setErrorMessage("Invalid role.");
            }
        } catch (error) {
            console.error("Failed to login:", error);
            setErrorMessage("Invalid email or password. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-40">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full relative">
                    <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                    {errorMessage && <p className="text-red-600 mb-4 text-center">{errorMessage}</p>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-start text-gray-700">Enter your email</label>
                            <input
                                type="email"
                                id="email"
                                {...register("email", { required: true })}
                                className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-200 bg-transparent"
                            />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-start">Enter your password</label>
                            <input
                                type="password"
                                id="password"
                                {...register("password", { required: true })}
                                className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-200 bg-transparent"
                            />
                            {errors.password && <span className="text-red-600">Password is required</span>}
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => setChecked(!checked)}
                                    className="form-checkbox"
                                />
                                <span className="ml-2 text-gray-700">Remember me</span>
                            </label>
                            <a href="#" className="text-purple-600 hover:text-purple-800">Forgot password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center justify-center"
                            disabled={loading}
                        >
                            {loading ? <PulseLoader color="#ffffff" /> : "Login Now"}
                        </button>
                    </form>
                    <p className="text-center mt-4 text-gray-600">Not a member? <Link to="/register" className="text-purple-600 hover:text-purple-800">Signup Now</Link></p>
                </div>
            </div>
        </>
    );
}

export default Login;
