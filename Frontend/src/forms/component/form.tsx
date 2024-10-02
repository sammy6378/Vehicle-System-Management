import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { Outlet } from 'react-router-dom';
import { ReactNode } from 'react';

interface FormProps {

    children: ReactNode;
  
}

const Form: React.FC<FormProps> = ({ children })  =>{
  return (
    // right side of the form
    <div className="flex h-screen ">
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

    {/* right side of the form */}

    {children}
    </div>
  )
}

export default Form
