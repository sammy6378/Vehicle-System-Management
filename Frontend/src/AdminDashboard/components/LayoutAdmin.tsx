
import Navbar from "./Nav"
import SideBar from "./SideBar"


function LayoutAdmin({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col bg-gray-900">
      <Navbar />
      <div className="flex flex-grow overflow-hidden">
        <SideBar />
        <div className="flex flex-col flex-grow overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}

export default LayoutAdmin