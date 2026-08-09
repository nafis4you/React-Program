import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Android from './components/Android';
import Iphone from './components/Iphone';
import Web from './components/Web';
import Login from "./pages/Login";
import User from "./pages/User";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const Router = () => {
   const isLoggedIn = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Home as a parent layout route */}
          <Route path="" element={<Home />}>
            <Route index element={<Android />} />
            <Route index path="android" element={<Android />} />
            <Route path="iphone" element={<Iphone />} />
            <Route path="web" element={<Web />} />
          </Route>

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />   
          <Route path="/login" element={<Login />} />       
          <Route path="/user/:id" element={<User />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? <Dashboard /> : <Navigate to="/login" />
            } />

        </Route>
        
      </Routes>
      </BrowserRouter>
  );
};

export default Router;