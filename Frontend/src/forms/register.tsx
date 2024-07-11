
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';
import { Link,useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../services/service';
import { useForm } from "react-hook-form";
import {toast,Toaster} from 'sonner'

type formData = {
  full_name: string;
  email: string;
  user_name: string;
  password: string;
  contact_phone: string;
  address: string;
}
function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<formData>();
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();
    
  const onSubmit = async (data:formData) => {
    try {
        await registerUser(data).unwrap();
        toast.success('Registration successful!');
        navigate('/login'); // Navigate after successful login
    } catch (error) {
        toast.error("Failed to register!");
    }
}

  return (
    <>
    <Toaster toastOptions={{ classNames: { error: 'bg-red-400', success: 'text-green-400', warning: 'text-yellow-400', info: 'bg-blue-400'}}}/>
    <div className="flex min-h-screen">
      <div className="w-1/2 relative hidden md:flex flex-col justify-center items-center bg-gray-900 text-white p-8">
        <img
          src="https://i.pinimg.com/564x/ec/07/44/ec07446f401c06ff6a35817c4f995740.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Lexus CarRent</h2>
          <p className="mb-6">
            Welcome to Lexus CarRent. We provide the best car rental services with a wide range of luxury cars to choose from.
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <a href="https://facebook.com" className="text-blue-500"><FaFacebook size={30} /></a>
            <a href="https://instagram.com" className="text-pink-500"><FaInstagram size={30} /></a>
            <a href="https://youtube.com" className="text-red-600"><FaYoutube size={30} /></a>
            <a href="https://twitter.com" className="text-blue-400"><FaTwitter size={30} /></a>
          </div>
        </div>
      </div>

      {/* Right Side with Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-slate-200 shadow-lg">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="full_name" placeholder="Full-Name"
              {...register("full_name", { required: true })}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black focus:outline focus:ring-2 focus:ring-purple-200 bg-transparent" />
              {errors.full_name && <span className="text-red-600">Full-name is required</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" placeholder="Email"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black focus:outline focus:ring-2 focus:ring-purple-200 bg-transparent" />
              {errors.email && <span className="text-red-600">Email is required</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" id="user_name" placeholder="Username" 
              {...register("user_name", { required: true })}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black focus:outline focus:ring-2 focus:ring-purple-200 bg-transparent" />
              {errors.user_name && <span className="text-red-600">Username is required</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Create Password</label>
              <input type="password" id="password" placeholder="Create password"
              {...register("password", { required: true })}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black focus:outline focus:ring-2 focus:ring-purple-200 bg-transparent" />
              {errors.password && <span className="text-red-600">Password is required</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="contact_phone" className="block text-sm font-medium text-gray-700">Contact Phone</label>
              <input type="tel" id="contact_phone" placeholder="Contact phone" 
              {...register("contact_phone", { required: true })}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black focus:outline focus:ring-2 focus:ring-purple-200 bg-transparent" />
              {errors.contact_phone && <span className="text-red-600">Contact phone is required</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input type="text" id="address" placeholder="Address" 
              {...register("address", { required: true })}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black focus:outline focus:ring-2 focus:ring-purple-200 bg-transparent"/>
              {errors.address && <span className="text-red-600">Address is required</span>}
            </div>
            <div className=" flex g-4 justify-between mb-4">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">Sign Up</button>
              <p className="text-center mt-4 text-gray-600">Registered? <Link to="/login" className="text-purple-600 hover:text-purple-800">SignIn Now</Link></p>
            </div>
            <div className="flex">
              <button type="button" className="bg-transparent border border-gray-400 text-base px-4 py-2 rounded-md w-full">Sign in with Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Register;
