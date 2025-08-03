import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Card from "./components/cards/Card";

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 400,  
      once: true,      
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Card />
    </>
  );
}

export default App;
