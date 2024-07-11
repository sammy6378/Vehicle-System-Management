
import { Headset,Sparkles,CalendarClock } from "lucide-react"
import v2 from '../assets/v2.png'
function Services() {
  return (
    <>
    <section id="service" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Our <span className="text-orange-500">Services</span> To Customers
                </h3>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Rental World is a reputable car rental company that offers a wide selection of vehicles for various transportation needs.
                </p>
            </div>
            <div className="mt-20">
                <dl className="space-y-10 space-x-9 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                        <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-s-badge bg-orange-500 text-white">
                            <CalendarClock color="#fafafa" />
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">24/7 Support</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                            We have a dedicated customer support team available to assist and emergency support.
                        </dd>
                    </div>

                    <div className="relative">
                        <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-s-badge bg-blue-500 text-white">
                                <Headset color="#080707" />
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Corporate Services</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                            We provide tailored solutions for corporate clients, offering rental plans for business travel needs.
                        </dd>
                    </div>

                    <div className="relative">
                        <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-s-badge bg-yellow-700 text-white">
                            <Sparkles color="#f0f40b" />
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Special Discounts</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                            Rental World frequently offers promotions, seasonal discounts, and loyalty programs to provide cost-effective solutions.
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </section>

<section className="py-12 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Services</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Providing <span className="text-orange-500">Best Cars</span> To Our Clients
            </h3>
            <p className="mt-4 max-w-2xl text-xl text-gray-500">
                At our dealership, we take great pride in offering the finest selection of cars to cater to the diverse needs and preferences of our valued clients. With a commitment to excellence, we carefully curate our inventory, ensuring that each vehicle meets the highest standards of quality, performance, and style.
            </p>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <img src={v2} alt="Rental World" className="w-full max-w-sm" />
        </div>
    </div>
</div>
</section>
</>
  )
}

export default Services
