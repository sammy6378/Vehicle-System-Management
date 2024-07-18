

function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Lexus CarRent</h1>
        <p className="mt-4 max-w-2xl mx-auto text-sm">Lexus Rental World is a reputable car rental company that offers a wide selection of vehicles for various transportation needs.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-blue-500"><i className="fa fa-facebook-f"></i></a>
          <a href="#" className="text-blue-400"><i className="fa fa-twitter"></i></a>
          <a href="#" className="text-blue-600"><i className="fa fa-linkedin"></i></a>
          <a href="#" className="text-red-600"><i className="fa fa-youtube"></i></a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-semibold text-lg mb-4">About Us</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Cars</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-4">Services</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Free cancellation</a></li>
            <li><a href="#">24/7 hours</a></li>
            <li><a href="#">Luxurious cars</a></li>
            <li><a href="#">Electric cars</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-4">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#">01000  St. Celina, Kiambu 10299</a></li>
            <li><a href="#">(254) 794 204 071</a></li>
            <li><a href="#">lexuscompany@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-4">Newsletter</h2>
          <form className="space-y-2">
            <input type="text" placeholder="Enter full name" className="w-full p-2 rounded bg-white text-black" />
            <input type="email" placeholder="Enter email address" className="w-full p-2 rounded bg-white text-black" />
            <button type="submit" className="w-full p-2 bg-orange-600 rounded text-white font-bold">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-500 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>©Copyright Lexus CarRent 2024, All rights reserved</p>
        <div className="flex space-x-4">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
