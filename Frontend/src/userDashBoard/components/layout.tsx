// Layout.tsx
import Footer from "../../landingpage/Footer";
import NavBar from './menu';
import Nav from './nav';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className="h-screen flex flex-col bg-gray-900">
      <Nav />
      <div className="flex flex-grow overflow-hidden">
        <NavBar />
        <div className="flex flex-col flex-grow overflow-y-auto">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
