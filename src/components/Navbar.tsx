import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">Edina Tóth</div>

      <div className="navbar__links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;