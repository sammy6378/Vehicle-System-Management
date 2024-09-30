
// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';
// import { Link,useNavigate } from 'react-router-dom';
// import { useRegisterUserMutation } from '../services/service';
// import { useForm } from "react-hook-form";
// import {toast,Toaster} from 'sonner'


// type formData = {
//   full_name: string;
//   email: string;
//   user_name: string;
//   password: string;
//   contact_phone: string;
//   address: string;
// }
// function Register() {
//   const { register, handleSubmit, formState: { errors } } = useForm<formData>();
//   const [registerUser] = useRegisterUserMutation();
//   const navigate = useNavigate();
    
//   const onSubmit = async (data: formData) => {
//     try {
//         await registerUser(data).unwrap();
//         toast.success('Registration successful!');
//         navigate('/login'); // Navigate after successful login
//     } catch (error) {
//         if (error instanceof Error && error.message.includes("User already exists")) {
//             toast("Email already exists. Try again.");
//         } else if (typeof error === 'object' && error !== null && 'data' in error && (error as { data: { message: string } }).data?.message) {
//             type ErrorResponse = { data: { message: string } };
//             const errMessage = (error as ErrorResponse).data.message;
//             if (errMessage.includes("User already exists")) {
//                 toast("Email already exists. Try again.");
//             } else {
//                 toast.error("Failed to register!");
//             }
//         } else {
//             toast.error("Failed to register!");
//         }
//     }
// };



//   return (
//     <>
//     <Toaster toastOptions={{ classNames: { error: 'bg-red-400', success: 'text-green-400', warning: 'text-yellow-400', info: 'bg-blue-400'}}}/>
//     <div className="flex h-screen">
//       <div className="w-1/2 relative hidden md:flex flex-col justify-center items-center bg-gray-900 text-white p-8">
//         <img
//           src="https://i.pinimg.com/564x/ec/07/44/ec07446f401c06ff6a35817c4f995740.jpg"
//           alt="Background"
//           className="absolute inset-0 w-full h-full object-cover opacity-50"
//         />
//         <div className="relative z-10 text-center">
//           <h2 className="text-4xl font-bold mb-4">Lexus CarRent</h2>
//           <p className="mb-6">
//             Welcome to Lexus CarRent. We provide the best car rental services with a wide range of luxury cars to choose from.
//           </p>
//           <div className="flex justify-center space-x-4 mb-6">
//             <a href="https://facebook.com" className="text-blue-500"><FaFacebook size={30} /></a>
//             <a href="https://instagram.com" className="text-pink-500"><FaInstagram size={30} /></a>
//             <a href="https://youtube.com" className="text-red-600"><FaYoutube size={30} /></a>
//             <a href="https://twitter.com" className="text-blue-400"><FaTwitter size={30} /></a>
//           </div>
//         </div>
//       </div>

//       {/* Right Side with Form */}
//       <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-slate-200 shadow-lg">
//         <div className="max-w-md w-full">
//           <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="mb-3">
//               <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">Full Name {errors.full_name && <span className=" bg-red-700 text-white ml-2 rounded-lg">Full-name is required</span>}</label>
//               <input type="text" id="full_name" placeholder="Full-Name"
//               {...register("full_name", { required: true })}
//               className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black focus:outline focus:ring-2 focus:ring-purple-200 bg-transparent" />
              
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email {errors.full_name && <span className=" bg-red-700 text-white ml-2 rounded-lg">Email is required</span>}</label>
//               <input type="email" id="email" placeholder="Email"
//               {...register("email", { required: true })}
//               className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black focus:outline focus:ring-2 focus:ring-purple-200 bg-transparent" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">Username  {errors.full_name && <span className=" bg-red-700 text-white ml-2 rounded-lg">User-Name is required</span>}</label>
//               <input type="text" id="user_name" placeholder="Username" 
//               {...register("user_name", { required: true })}
//               className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black focus:outline focus:ring-2 focus:ring-purple-200 bg-transparent" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="contact_phone" className="block text-sm font-medium text-gray-700">Phone Number {errors.full_name && <span className=" bg-red-700 text-white ml-2 rounded-lg">Phone Number is required</span>}</label>
//               <input type="tel" id="contact_phone" placeholder="Phone Number" 
//               {...register("contact_phone", { required: true })}
//               className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black focus:outline focus:ring-2 focus:ring-purple-200 bg-transparent" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">Create Password {errors.full_name && <span className=" bg-red-700 text-white ml-2 rounded-lg">password is required</span>}</label>
//               <input type="password" id="password" placeholder="Create password"
//               {...register("password", { required: true })}
//               className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black focus:outline focus:ring-2 focus:ring-purple-200 bg-transparent" />
//             </div>
          
//             <div className=" flex g-4 justify-between">
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">Sign Up</button>
//               <p className="text-center mt-4 text-gray-600">Already have an Account? <Link to="/login" className="text-purple-600 hover:text-purple-800">SignIn Now</Link></p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Register;


// catch (error) {
//   if (error instanceof Error && error.message.includes("User already exists")) {
//       toast("Email already exists. Try again.");
//   } else if (typeof error === 'object' && error !== null && 'data' in error && (error as { data: { message: string } }).data?.message) {
//       type ErrorResponse = { data: { message: string } };
//       const errMessage = (error as ErrorResponse).data.message;
//       if (errMessage.includes("User already exists")) {
//           toast("Email already exists. Try again.");
//       } else {
//           toast.error("Failed to register!");
//       }
//   } else {
//       toast.error("Failed to register!");
//   }
// }


import { FaFacebook, FaInstagram, FaTwitter, FaYoutube,FaEye,FaEyeSlash } from 'react-icons/fa';
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
  <div className="flex h-screen">
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

        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-slate-200 shadow-lg">
          <div className="max-w-md w-full">
            <h2 className="text-3xl font-serif mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Full Name Validation */}
              <div className="mb-3">
                <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">Full Name                 {errors.full_name && <span className="bg-red-700 text-white ml-2 rounded-lg">{errors.full_name.message}</span>}</label>
                <input
                  type="text"
                  id="full_name"
                  placeholder="Full Name"
                  {...register("full_name", {
                    required: "Full name is required",
                    validate: (value) => value.split(" ").length >= 2 || "Please enter at least two names"
                  })}
                  className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black"
                />
              </div>

              <div className="mb-3">
             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email {errors.email && <span className=" bg-red-700 text-white ml-2 rounded-lg">Email is required</span>}</label>
           <input type="email" id="email" placeholder="Email"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black" />
            </div>

            <div className="mb-3">
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">Username  {errors.user_name && <span className=" bg-red-700 text-white ml-2 rounded-lg">User-Name is required</span>}</label>
              <input type="text" id="user_name" placeholder="Username" 
              {...register("user_name", { required: true })}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black" />
            </div>

               {/* Password Validation */}
               <div className="mb-3 relative items-center">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Create Password {errors.password && <span className="bg-red-700 text-white ml-2 rounded-lg">{errors.password.message}</span>}
                </label>
                <div className="w-full flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Create password ex(@Sammy123*Lexus?)"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
                      }
                    })}
                    className={`w-full px-4 py-2 border rounded-lg text-black ${passwordStrength === 'weak' ? 'border-red-600' : passwordStrength === 'medium' ? 'border-blue-600' : passwordStrength === 'strong' ? 'border-green-600' : 'border-gray-400'} pr-10 outline-none`} // Added padding to the right for icon
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
                  Phone Number {errors.contact_phone && <span className="bg-red-700 text-white ml-2 rounded-lg">{errors.contact_phone.message}</span>}
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  placeholder="Phone Number"
                  {...register("contact_phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\d{10}$/, // Adjust this regex based on your phone number format requirements
                      message: "Please enter a valid phone number"
                    }
                  })}
                  className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black"
                />
              </div>


              <div className="flex flex-col md:flex-row justify-between items-center mt-4">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md w-full md:w-auto">Sign Up</button>
                <p className="text-center mt-2 md:mt-0 text-gray-600 w-full md:w-auto">
                  Already have an Account? 
                  <Link to="/login" className="text-purple-600 hover:text-purple-800"> SignIn</Link>
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
