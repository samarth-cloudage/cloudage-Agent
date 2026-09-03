import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GlowCursor from "./components/GlowCursor";
import ScrollToTop from "./components/ScrollToTop";
import SalesforceChat from "./components/SalesforceChat";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import UseCases from "./pages/UseCases";


import "./App.css";
import CursorFollower from "./components/CursorFollower";


function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <CursorFollower />
      <GlowCursor />
      <Navbar />
      <SalesforceChat />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
           <Route path="/casestudies" element={<UseCases />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>


      <Footer />
    </BrowserRouter>
  );
}

export default App;
