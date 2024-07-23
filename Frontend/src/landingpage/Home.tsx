import v1 from '../assets/v1.png'
import { AlignJustify } from 'lucide-react'
import { useState } from 'react';
import '../App.scss'
import { Link } from 'react-router-dom';

function Home({ showModal }: any) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="border-b border-slate-700 bg-slate-800 shadow-lg">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-12 py-4">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold text-red-600 cursor-pointer">
                                RENTAL <span className="text-white">WORLD</span>
                            </h1>
                        </div>
                        <div className="hidden sm:flex space-x-8">
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Home</a>
                            <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">About Us</a>
                            <a href="#service" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Services</a>
                            <a href="#collection" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Collections</a>
                            <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Contact Us</a>
                        </div>
                        <div className="hidden sm:flex items-center space-x-4">
                            <Link to='/login' onClick={showModal} className="text-gray-100 px-3 py-2 text-sm font-medium hover:text-white">Sign In</Link>
                            <Link to='/register' className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">Sign Up</Link>
                        </div>
                        <div className="sm:hidden flex items-center">
                            <AlignJustify onClick={() => setMenuOpen(!menuOpen)} className="text-gray-100 w-8 h-8 cursor-pointer" />
                        </div>
                    </div>
                </div>

                {menuOpen && (
                    <div className="sm:hidden absolute z-20 w-full bg-slate-800">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#" className="block px-3 py-2 text-base font-medium text-white">Home</a>
                            <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">About Us</a>
                            <a href="#service" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Services</a>
                            <a href="#collection" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Collections</a>
                            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Contact Us</a>
                            <a href="#" onClick={showModal} className="block px-3 py-2 text-base font-medium text-white">Sign In</a>
                            <Link to="/register" className="block px-3 py-2 text-base font-medium text-white bg-purple-600 hover:bg-purple-700">Sign Up</Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* hero section */}
            <header className="bg-slate-900">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:items-start lg:justify-between">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-4xl">
                            <span className="block">Experience <span className="text-red-600">PREMIUM</span> car</span>
                            <span className="block text-red-600">RENTALS</span>
                            <span className="block">with us.</span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-400">
                            Discover the epitome of luxury and performance with our premium car rentals. Unleash the thrill of driving top-of-the-line vehicles, meticulously maintained to perfection.
                        </p>
                        <div className="mt-8 flex space-x-4">
                            <Link to="/register" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">Book a Car</Link>
                            <Link to="/contact-us" className="inline-flex items-center justify-center px-5 py-3 border border-slate-700 text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50">Contact Us</Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-10">
                        <img className="w-full h-full object-cover" src={v1} alt="Car Image" />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Home;
