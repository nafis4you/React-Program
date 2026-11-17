import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./component/Users";
import UserDetails from "./component/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;