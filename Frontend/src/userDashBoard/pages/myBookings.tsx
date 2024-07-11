
function Projects() {
  return (
    <div className="p-4">
        <div className="text-gray-400 mb-4">
            <a href="#" className="hover:text-white">Dashboard</a> / 
            <span>All Bookings</span>
        </div>

        <h1 className="text-2xl font-semibold mb-6">All Bookings</h1>

        <div className="flex items-center space-x-4 mb-6 flex-wrap space-y-2">
            <button className="bg-gray-800 px-4 py-2 rounded">Year: All</button>
            <button className="bg-gray-800 px-4 py-2 rounded">Payements : All</button>
            <button className="bg-gray-800 px-4 py-2 rounded">Status : All</button>
            <button className="bg-gray-800 px-4 py-2 rounded ml-auto">Send Feedback</button>
        </div>

        <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
    <thead>
        <tr className="bg-gray-800">
            <th className="px-4 py-2 text-left">Vehicle</th>
            <th className="px-4 py-2 text-left">Payments</th>
            <th className="px-4 py-2 text-left">Client Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Booking Date</th>
            <th className="px-4 py-2 text-left">Return Date</th>
            <th className="px-4 py-2 text-left">Return Status</th>
        </tr>
    </thead>
    <tbody>
        <tr className="bg-gray-700">
            <td className="px-4 py-2 flex items-center space-x-2">
                <img src="https://i.pinimg.com/564x/9b/ca/bd/9bcabd4b5f80daec640d1bbb52c4c0ed.jpg" alt="Ralph Edwards" className="w-14 h-10 rounded-sm" />
                <span>Mercedes v9</span>
            </td>
            <td className="px-4 py-2">Completed</td>
            <td className="px-4 py-2">Ralph Janet</td>
            <td className="px-4 py-2">ralph@gmail.com</td>
            <td className="px-4 py-2">3/04/2023</td>
            <td className="px-4 py-2">15/08/2023</td>
            <td className="px-4 py-2">Completed</td>
        </tr>

        <tr className="bg-gray-600">
            <td className="px-4 py-2 flex items-center space-x-2">
                <img src="https://i.pinimg.com/564x/9a/0a/9a/9a0a9a2a34f6f9545f15365570f65b91.jpg" alt="Courtney Henry" className="w-14 h-10 rounded-sm" />
                <span>Tesla Electric</span>
            </td>
            <td className="px-4 py-2">Completed</td>
            <td className="px-4 py-2">Ralph Janet</td>
            <td className="px-4 py-2">ralph@gmail.com</td>
            <td className="px-4 py-2">10/06/2023</td>
            <td className="px-4 py-2">23/09/2023</td>
            <td className="px-4 py-2">Completed</td>
        </tr>

        <tr className="bg-gray-700">
            <td className="px-4 py-2 flex items-center space-x-2">
                <img src="https://i.pinimg.com/564x/00/a6/29/00a629bb76fc574802fe4ff007e8787b.jpg" alt="Alex Johnson" className="w-14 h-10 rounded-sm" />
                <span>Audi v2W</span>
            </td>
            <td className="px-4 py-2">Completed</td>
            <td className="px-4 py-2">Ralph Janet</td>
            <td className="px-4 py-2">ralph@gmail.com</td>
            <td className="px-4 py-2">10/06/2023</td>
            <td className="px-4 py-2">23/09/2023</td>
            <td className="px-4 py-2">Completed</td>
        </tr>

        <tr className="bg-gray-700">
            <td className="px-4 py-2 flex items-center space-x-2">
                <img src="https://i.pinimg.com/564x/00/a6/29/00a629bb76fc574802fe4ff007e8787b.jpg" alt="Alex Johnson" className="w-14 h-10 rounded-sm" />
                <span>Audi v2W</span>
            </td>
            <td className="px-4 py-2">Completed</td>
            <td className="px-4 py-2">Ralph Janet</td>
            <td className="px-4 py-2">ralph@gmail.com</td>
            <td className="px-4 py-2">10/06/2023</td>
            <td className="px-4 py-2">23/09/2023</td>
            <td className="px-4 py-2">Completed</td>
        </tr>

        <tr className="bg-gray-700">
            <td className="px-4 py-2 flex items-center space-x-2">
                <img src="https://i.pinimg.com/564x/00/a6/29/00a629bb76fc574802fe4ff007e8787b.jpg" alt="Alex Johnson" className="w-14 h-10 rounded-sm" />
                <span>Audi v2W</span>
            </td>
            <td className="px-4 py-2">Completed</td>
            <td className="px-4 py-2">Ralph Janet</td>
            <td className="px-4 py-2">ralph@gmail.com</td>
            <td className="px-4 py-2">10/06/2023</td>
            <td className="px-4 py-2">23/09/2023</td>
            <td className="px-4 py-2">Completed</td>
        </tr>
 <tr className="bg-gray-700">
            <td className="px-4 py-2 flex items-center space-x-2">
                <img src="https://i.pinimg.com/564x/00/a6/29/00a629bb76fc574802fe4ff007e8787b.jpg" alt="Alex Johnson" className="w-14 h-10 rounded-sm" />
                <span>Audi v2W</span>
            </td>
            <td className="px-4 py-2">Completed</td>
            <td className="px-4 py-2">Ralph Janet</td>
            <td className="px-4 py-2">ralph@gmail.com</td>
            <td className="px-4 py-2">10/06/2023</td>
            <td className="px-4 py-2">23/09/2023</td>
            <td className="px-4 py-2">Completed</td>
        </tr>

        <tr className="bg-gray-700">
            <td className="px-4 py-2 flex items-center space-x-2">
                <img src="https://i.pinimg.com/564x/00/a6/29/00a629bb76fc574802fe4ff007e8787b.jpg" alt="Alex Johnson" className="w-14 h-10 rounded-sm" />
                <span>Audi v2W</span>
            </td>
            <td className="px-4 py-2">Completed</td>
            <td className="px-4 py-2">Ralph Janet</td>
            <td className="px-4 py-2">ralph@gmail.com</td>
            <td className="px-4 py-2">10/06/2023</td>
            <td className="px-4 py-2">23/09/2023</td>
            <td className="px-4 py-2">Completed</td>
        </tr>

        <tr className="bg-gray-700">
            <td className="px-4 py-2 flex items-center space-x-2">
                <img src="https://i.pinimg.com/564x/c4/a7/8a/c4a78a5fea34f9c802f9721efc9a61bb.jpg" alt="Alex Johnson" className="w-14 h-10 rounded-sm" />
                <span>Jaguar F-Pace</span>
            </td>
            <td className="px-4 py-2">Completed</td>
            <td className="px-4 py-2">Ralph Janet</td>
            <td className="px-4 py-2">ralph@gmail.com</td>
            <td className="px-4 py-2">10/06/2023</td>
            <td className="px-4 py-2">23/09/2023</td>
            <td className="px-4 py-2">Not yet</td>
        </tr>
    </tbody>
</table>

  </div>
</div>
  )
}

export default Projects;