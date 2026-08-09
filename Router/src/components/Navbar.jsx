import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" >Contact</NavLink>
        </li>
        <li>
          <NavLink 
            to="/services" >Services</NavLink>
        </li>
        <li>
          <NavLink 
            to="/login" >Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;