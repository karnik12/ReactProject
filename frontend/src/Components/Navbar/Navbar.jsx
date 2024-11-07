
import "./Navbar.css";
import { useAuth } from "../../Store/auth";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {isLoggedIn} = useAuth();


  return (
    <nav id="desktop-nav">
    <div className="logo">XYZ</div>
    <div>
      <ul className="nav-links">
        {/* <li><a href="/#about">About</a></li>
        <li><a href="/#experience">Skills</a></li>
        <li><a href="/#projects">Projects</a></li> */}
          <li><a href="/">Employees</a></li>
        {isLoggedIn ? <li><NavLink to="/logout">Logout</NavLink></li>:<><li><NavLink to="/Login">Login</NavLink></li>
        <li><NavLink to="/Signup">Signup</NavLink></li></> }
        
        
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;
