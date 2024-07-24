
export default function Contact(){
    return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <main className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-black">Get in Touch</h2>
        <form action="#" method="POST">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" placeholder="Name..." name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" placeholder="Email..." name="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
                <input type="text" id="subject" placeholder="Subject..." name="subject" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" placeholder="Message..." className="mt-1 block w-full p-2 border border-gray-300 rounded-md"></textarea>
            </div>
            <div>
                <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:bg-green-700">Send Message</button>
            </div>
        </form>
    </main>
    </div>
     
    )
}