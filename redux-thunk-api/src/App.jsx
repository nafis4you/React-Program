import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import MyCart from "./components/MyCart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<MyCart />} />
      </Routes>
    </Router>
  );
}

export default App;