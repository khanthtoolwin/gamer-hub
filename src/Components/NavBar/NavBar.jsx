import "./NavBar.css";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../../context/AppContext";

const NavBar = () => {
  const { mode } = useContext(AppContext);
  return (
    <nav>
      <section>
        <NavLink to="/">GamerHub</NavLink>
      </section>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact us</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
