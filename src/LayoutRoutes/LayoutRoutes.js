import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Course from "../components/Pages/Courses/Course";
import Plans from "../components/Pages/Plans/Plans";
import AboutUs from "../components/Pages/AboutUS/AboutUs";
import ContactUs from "../components/Pages/ContactUs/ContactUs";
import SupportUs from "../components/Pages/SupportUs/SupportUs";
import backgroundImage from "../assets/img/banner.jpg";

function LayoutRoutes() {
  const banner = {
    background: "#03b97c",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "760px",
  };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Plans />} />
        <Route path="/course" element={<Course />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/support" element={<SupportUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default LayoutRoutes;
