import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import HomePage from "./landing_page/home/homepage";
import Signup from "./landing_page/signup/signup";
import Login from "./landing_page/signup/login";
import AboutPage from "./landing_page/about/aboutpage";
import ProductPage from "./landing_page/products/productpage";
import PricingPage from "./landing_page/pricing/pricingpage";
import SupportPage from "./landing_page/support/supportpage";

import NotFound from "./landing_page/NotFound";
import Navbar from "./landing_page/navbar";
import Footer from "./landing_page/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
      
    </Routes>
    <Footer />
  </BrowserRouter>
);