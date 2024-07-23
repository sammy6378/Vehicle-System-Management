import v3 from '../assets/v3.png'
import '../App.scss'

function About() {
  return (
    <section id='about' className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
           
            <div className="lg:w-1/2 flex justify-center img">
                <img src={v3} alt="Car Image" className="w-full max-w-md" />
            </div>
           
            <div className="lg:w-1/2 mt-10 about lg:mt-0 lg:pl-10">
                <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    About <span className="text-orange-500">Rental World</span>
                </h2>
                <p className="mt-4 text-xl text-gray-500">
                    Welcome to Rental World, your ultimate destination for the best car rental experience.
                </p>
                <ul className="mt-6 list-disc list-inside text-gray-500 text-lg">
                    <li>Wide selection of premium vehicles</li>
                    <li>24/7 customer support</li>
                    <li>Corporate services tailored to your needs</li>
                    <li>Special discounts and loyalty programs</li>
                    <li>Easy booking and flexible rental plans</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default About
