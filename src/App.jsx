// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Casestudies from './pages/Casestudies';

import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footerapp";
import OpenPosition from "./pages/OpenPosition";
import OpenInput from "./components/OpenInput";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <Router>
      
      <Navbar />
      <ScrollToTop/>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/case-studies" element={<Casestudies />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/OpenPosition" element={<OpenPosition/>}/>
          <Route path="/OpenInput"   element={<OpenInput/>}/>
\          
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
