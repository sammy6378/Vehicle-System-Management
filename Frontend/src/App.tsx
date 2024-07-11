import { useState } from "react";
import Login from "./forms/Login/login";
import Home from "./landingpage/Home";
import Services from "./landingpage/services";
import About from "./landingpage/About";
import Collection from "./landingpage/Collection";
import Footer from "./landingpage/Footer";
import BookingProcess from "./landingpage/BookingProcess";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
 
  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <Home showModal={showModal}/>
      {isModalVisible && <Login/>}
      <About />
      <Services />
      <BookingProcess />
      <Collection />
      <Footer />
    </>
  );
}

export default App;

