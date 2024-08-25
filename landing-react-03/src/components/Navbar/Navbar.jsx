import Logo from "../../assets/Logo.png";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [showNav, setshowNav] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar__container wrapper">
        <Link to="/" className="navbar__logo" onClick={() => setshowNav(false)}>
          <img src={Logo} alt="logo" />
        </Link>
        <ul className={`${showNav ? "show" : ""}`}>
          <li>
            <NavLink to="about" onClick={() => setshowNav(!showNav)}>
              company
            </NavLink>
          </li>
          <li>
            <NavLink to="products" onClick={() => setshowNav(!showNav)}>
              cryptos
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" onClick={() => setshowNav(!showNav)}>
              contact us
            </NavLink>
          </li>
        </ul>
        <div className="navbar__btns">
          <a href="#">login</a>
          <a href="#" className="btn">
            register
          </a>
        </div>
        <div className="navbar__menu" onClick={() => setshowNav(!showNav)}>
          {showNav ? <IoMdClose /> : <IoMenu />}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
