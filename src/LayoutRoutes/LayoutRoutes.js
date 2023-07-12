import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Course from "../components/Pages/Courses/Course";
import Plans from "../components/Pages/Plans/Plans";

function LayoutRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Plans />} />
        <Route path="/course" element={<Course />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default LayoutRoutes;
