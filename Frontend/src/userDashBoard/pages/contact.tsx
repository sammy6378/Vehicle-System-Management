
export default function Contact(){
    return(
        <>
        <header className="text-white p-4">
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold">Contact Us</h1>
        </div>
    </header>
    <main className="container mx-auto max-w-2xl mt-4 mb-2 p-4 border border-slate-700 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <form action="#" method="POST">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 bg-transparent rounded-lg focus:outline-none focus:border-green-500 text-black" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 bg-transparent rounded-lg focus:outline-none focus:border-green-500 text-black" />
            </div>
            <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-400 font-bold mb-2">Subject</label>
                <input type="text" id="subject" name="subject" className="w-full p-2 border border-gray-300 bg-transparent rounded-lg focus:outline-none focus:border-green-500 text-black" />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-400 font-bold mb-2">Message</label>
                <textarea id="message" name="message"  className="w-full p-2 border border-gray-300 bg-transparent rounded-lg focus:outline-none focus:border-green-500 text-black"></textarea>
            </div>
            <div>
                <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:bg-green-700">Send Message</button>
            </div>
        </form>
    </main>
        </>
    )
}