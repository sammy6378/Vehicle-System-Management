
import bookingImage from '../assets/v1.png'; // Make sure to import the image

function BookingProcess() {
  return (
    <section id="booking" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Our <span className="text-orange-500">Booking Process</span> made Simple.
                </h3>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Rental World is a reputable car rental company that offers a wide selection of vehicles with quick Booking process.
                </p>
            </div>
            <div className="flex mt-20">
        
      <div className="flex-1 p-8 md:p-16 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Booking Process</h2>
        <ol className="space-y-8">
          <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-indigo-600 after:inline-block after:absolute after:-bottom-11 after:left-1/2">
            <div className="flex items-center justify-center gap-8 w-full max-w-sm mx-auto">
              <div className="flex items-center gap-3.5 bg-indigo-50 p-3.5 rounded-xl relative z-10 border border-indigo-600 w-full">
                <div className="rounded-lg bg-indigo-600 flex items-center justify-center">
                  <span className="text-white p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M15.9998 7C15.9998 9.20914 14.2089 11 11.9998 11C9.79067 11 7.99981 9.20914 7.99981 7C7.99981 4.79086 9.79067 3 11.9998 3C14.2089 3 15.9998 4.79086 15.9998 7Z"
                        stroke="currentColor" stroke-width="1.6" />
                      <path
                        d="M11.9998 14C9.15153 14 6.65091 15.3024 5.23341 17.2638C4.48341 18.3016 4.10841 18.8204 4.6654 19.9102C5.2224 21 6.1482 21 7.99981 21H15.9998C17.8514 21 18.7772 21 19.3342 19.9102C19.8912 18.8204 19.5162 18.3016 18.7662 17.2638C17.3487 15.3024 14.8481 14 11.9998 14Z"
                        stroke="currentColor" stroke-width="1.6" />
                    </svg>
                  </span>
                </div>
                <div className="flex items-start rounded-md justify-center flex-col">
                  <h6 className="text-base font-semibold text-black mb-0.5">Create Account</h6>
                  <p className="text-xs font-normal text-gray-500">Sign up to get started</p>
                </div>
              </div>
            </div>
          </li>
          <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-1/2">
            <div className="flex items-center justify-center gap-8 w-full max-w-sm mx-auto">
              <div className="flex items-center gap-3.5 bg-gray-50 p-3.5 rounded-xl relative z-10 border border-gray-50 w-full">
                <div className="rounded-lg bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M8 5.99985H7C5.11438 5.99985 4.17157 5.99985 3.58579 6.58564C3 7.17142 3 8.11423 3 9.99985V16.9998C3 18.8855 3 19.8283 3.58579 20.4141C4.17157 20.9998 5.11438 20.9998 7 20.9998H17C18.8856 20.9998 19.8284 20.9998 20.4142 20.4141C21 19.8283 21 18.8855 21 16.9998V9.99985C21 8.11423 21 7.17142 20.4142 6.58564C19.8284 5.99985 18.8856 5.99985 17 5.99985H16M12 17.9998V17.9284C12 17.53 12 17.3308 11.9624 17.1661C11.8342 16.6043 11.3955 16.1657 10.8338 16.0375C10.669 15.9998 10.4698 15.9998 10.0714 15.9998H8C7.53501 15.9998 7.30252 15.9998 7.11177 16.051C6.59413 16.1897 6.18981 16.594 6.05111 17.1116C6 17.3024 6 17.5349 6 17.9998M15 12.9998H18M15 15.9998H18M10.5 12.4998C10.5 13.3283 9.82843 13.9998 9 13.9998C8.17157 13.9998 7.5 13.3283 7.5 12.4998C7.5 11.6714 8.17157 10.9998 9 10.9998C9.82843 10.9998 10.5 11.6714 10.5 12.4998ZM10.25 5.47472V6.24985C10.25 6.95208 10.25 7.3032 10.4185 7.55542C10.4915 7.66461 10.5852 7.75836 10.6944 7.83132C10.9467 7.99985 11.2978 7.99985 12 7.99985C12.7022 7.99985 13.0533 7.99985 13.3056 7.83132C13.4148 7.75836 13.5085 7.66461 13.5815 7.55542C13.75 7.3032 13.75 6.95208 13.75 6.24985V5.47472C13.75 5.16873 13.75 5.01573 13.7069 4.87378C13.6879 4.8111 13.6628 4.75043 13.6319 4.69267C13.562 4.56185 13.4538 4.45366 13.2374 4.23729C12.7409 3.74073 12.4926 3.49246 12.1951 3.43328C12.0663 3.40766 11.9337 3.40766 11.8049 3.43328C11.5074 3.49246 11.2591 3.74073 10.7626 4.23729C10.5462 4.45366 10.438 4.56185 10.3681 4.69267C10.3372 4.75043 10.3121 4.8111 10.2931 4.87378C10.25 5.01573 10.25 5.16873 10.25 5.47472Z"
                        stroke="currentColor" stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </span>
                </div>
                <div className="flex items-start rounded-md justify-center flex-col">
                  <h6 className="text-base font-semibold text-black mb-0.5">Book Car</h6>
                  <p className="text-xs font-normal text-gray-500">Choose your desired car</p>
                </div>
              </div>
            </div>
          </li>
          <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-1/2">
            <div className="flex items-center justify-center gap-8 w-full max-w-sm mx-auto">
              <div className="flex items-center gap-3.5 bg-gray-50 p-3.5 rounded-xl relative z-10 border border-gray-50 w-full">
                <div className="rounded-lg bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M15.9998 7C15.9998 9.20914 14.2089 11 11.9998 11C9.79067 11 7.99981 9.20914 7.99981 7C7.99981 4.79086 9.79067 3 11.9998 3C14.2089 3 15.9998 4.79086 15.9998 7Z"
                        stroke="currentColor" stroke-width="1.6" />
                      <path
                        d="M11.9998 14C9.15153 14 6.65091 15.3024 5.23341 17.2638C4.48341 18.3016 4.10841 18.8204 4.6654 19.9102C5.2224 21 6.1482 21 7.99981 21H15.9998C17.8514 21 18.7772 21 19.3342 19.9102C19.8912 18.8204 19.5162 18.3016 18.7662 17.2638C17.3487 15.3024 14.8481 14 11.9998 14Z"
                        stroke="currentColor" stroke-width="1.6" />
                    </svg>
                  </span>
                </div>
                <div className="flex items-start rounded-md justify-center flex-col">
                  <h6 className="text-base font-semibold text-black mb-0.5">Payments</h6>
                  <p className="text-xs font-normal text-gray-500">Complete your payment</p>
                </div>
              </div>
            </div>
          </li>
          <li className="relative flex-1">
            <div className="flex items-center justify-center gap-8 w-full max-w-sm mx-auto">
              <div className="flex items-center gap-3.5 bg-gray-50 p-3.5 rounded-xl relative z-10 border border-gray-50 w-full">
                <div className="rounded-lg bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M15.9998 7C15.9998 9.20914 14.2089 11 11.9998 11C9.79067 11 7.99981 9.20914 7.99981 7C7.99981 4.79086 9.79067 3 11.9998 3C14.2089 3 15.9998 4.79086 15.9998 7Z"
                        stroke="currentColor" stroke-width="1.6" />
                      <path
                        d="M11.9998 14C9.15153 14 6.65091 15.3024 5.23341 17.2638C4.48341 18.3016 4.10841 18.8204 4.6654 19.9102C5.2224 21 6.1482 21 7.99981 21H15.9998C17.8514 21 18.7772 21 19.3342 19.9102C19.8912 18.8204 19.5162 18.3016 18.7662 17.2638C17.3487 15.3024 14.8481 14 11.9998 14Z"
                        stroke="currentColor" stroke-width="1.6" />
                    </svg>
                  </span>
                </div>
                <div className="flex items-start rounded-md justify-center flex-col">
                  <h6 className="text-base font-semibold text-black mb-0.5">Confirm Payment</h6>
                  <p className="text-xs font-normal text-gray-500">Finalize your booking</p>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
      <div className="hidden md:block md:w-1/2 h-full">
        <img src={bookingImage} alt="Booking Process" className="object-cover w-full h-full" />
        </div>
    </div>
        </div>
    </section>
  );
}

export default BookingProcess;

