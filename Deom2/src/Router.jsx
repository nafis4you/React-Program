import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Android from './components/Android';
import Iphone from './components/Iphone';
import Web from './components/Web';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Home as a parent layout route */}
          <Route path="" element={<Home />}>
            <Route index path="android" element={<Android />} />
            <Route path="iphone" element={<Iphone />} />
            <Route path="web" element={<Web />} />
          </Route>

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
      </BrowserRouter>
  );
};

export default Router;