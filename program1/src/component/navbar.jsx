const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>School Info</h2>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Teachers</a></li>
        <li><a href="/">Students</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;