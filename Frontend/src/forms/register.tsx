
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../services/service';
import { useForm } from "react-hook-form";
import { toast, Toaster } from 'sonner';
import 'intl-tel-input/build/css/intlTelInput.css';
import { useEffect } from 'react';
import { useGetUsersQuery } from '../services/service';

type formData = {
  full_name: string;
  email: string;
  user_name: string;
  password: string;
  contact_phone: string;
};

function Register() {
  const { register, handleSubmit,watch,clearErrors, formState: { errors } } = useForm<formData>();
  const [showPassword, setShowPassword] = useState(false); 
  const password = watch("password");
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();
  const { data: users } = useGetUsersQuery(); // Use the query to fetch users

  useEffect(() => {
    if (users) {
      // Filter unique emails
      const uniqueEmails = [...new Set(users.map(user => user.email))];
      // Store unique emails in a ref for quick lookup
      setUniqueEmails(uniqueEmails);
    }
  }, [users]);

  const [uniqueEmails, setUniqueEmails] = useState<string[]>([]);

  // password check
  // Function to check password strength
  interface PasswordStrengthChecker {
    (password: string): "default" | "weak" | "medium" | "strong";
  }

  const getPasswordStrength: PasswordStrengthChecker = (password) => {
    if (!password) return "default"; // No password entered
    if (password.length < 8) return "weak"; // Weak if less than 8 characters
    if (/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/.test(password)) return "strong"; // Strong if it meets all criteria
    return "medium"; // Default to medium
  };

  // Effect to clear errors when password changes
  useEffect(() => {
    if (password) {
      clearErrors("password");
    }
  }, [password, clearErrors]);

  const passwordStrength = getPasswordStrength(password);


  const onSubmit = async (data: formData) => {
    // Fetch the users list
    const userEmail = data.email.toLowerCase();
    if (uniqueEmails.includes(userEmail)) {
      toast.error("Email already exists. Please try another email.");
      return;
    }

    try {
        // Proceed with registration if the email doesn't exist
        await registerUser(data).unwrap();
        toast.success('Registration successful!');
        navigate('/login'); // Navigate after successful registration
    } catch (error) {
        console.error("Registration error:", error); // Log the error for debugging
        toast.error("Failed to register!"); // Generic error message
    }
};

  return (
    <>
      <Toaster toastOptions={{ classNames: { error: 'bg-red-400', success: 'text-green-400', warning: 'text-yellow-400', info: 'bg-blue-400'}}}/>
<div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-slate-200 shadow-lg rounded-lg md:rounded-none">
  <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
    <h2 className="text-3xl font-serif mb-4">Sign Up</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Full Name Validation */}
      <div className="mb-3">
        <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">
          Full Name 
          {errors.full_name && (
            <span className="bg-red-700 text-white ml-2 rounded-lg">
              {errors.full_name.message}
            </span>
          )}
        </label>
        <input
          type="text"
          id="full_name"
          placeholder="Full Name"
          {...register("full_name", {
            required: "Full name is required",
            validate: (value) => value.split(" ").length >= 2 || "Please enter at least two names",
          })}
          className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black bg-white focus:ring-2 focus:ring-purple-200"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email 
          {errors.email && (
            <span className="bg-red-700 text-white ml-2 rounded-lg">Email is required</span>
          )}
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email", { required: true })}
          className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black bg-white focus:ring-2 focus:ring-purple-200"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">
          Username
          {errors.user_name && (
            <span className="bg-red-700 text-white ml-2 rounded-lg">Username is required</span>
          )}
        </label>
        <input
          type="text"
          id="user_name"
          placeholder="Username"
          {...register("user_name", { required: true })}
          className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black bg-white focus:ring-2 focus:ring-purple-200"
        />
      </div>

      {/* Password Validation */}
      <div className="mb-3 relative items-center">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Create Password
          {errors.password && (
            <span className="bg-red-700 text-white ml-2 rounded-lg">
              {errors.password.message}
            </span>
          )}
        </label>
        <div className="w-full flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Create password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character",
              },
            })}
            className={`w-full px-4 py-2 border rounded-lg text-black bg-white pr-10 outline-none ${
              passwordStrength === "weak"
                ? "border-red-600"
                : passwordStrength === "medium"
                ? "border-blue-600"
                : passwordStrength === "strong"
                ? "border-green-600"
                : "border-gray-400"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2/3 transform -translate-y-1/2 text-gray-600 focus:outline-none"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />} {/* Eye icon toggle */}
          </button>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="contact_phone" className="block text-sm font-medium text-gray-700">
          Phone Number
          {errors.contact_phone && (
            <span className="bg-red-700 text-white ml-2 rounded-lg">
              {errors.contact_phone.message}
            </span>
          )}
        </label>
        <input
          type="tel"
          id="contact_phone"
          placeholder="Phone Number"
          {...register("contact_phone", {
            required: "Phone number is required",
            pattern: {
              value: /^\d{10}$/,
              message: "Please enter a valid phone number",
            },
          })}
          className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black bg-white focus:ring-2 focus:ring-purple-200"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md w-full md:w-auto"
        >
          Sign Up
        </button>
        <p className="text-center mt-2 md:mt-0 text-gray-600 w-full md:w-auto">
          Already have an Account?{" "}
          <Link to="/login" className="text-purple-600 hover:text-purple-800">
            SignIn
          </Link>
        </p>
      </div>
    </form>
  </div>
</div>

      {/* </div> */}
    </>
  );
}

export default Register;
