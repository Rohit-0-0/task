import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isLoggedIn }) {
  return (
    <nav className="navbar">
      <h2>Auth System</h2>
      <ul>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
        {isLoggedIn && <li><Link to="/tasks">My Tasks</Link></li>}
        {isLoggedIn && <li><Link to="/logout">Logout</Link></li>}
      </ul>
    </nav>
  );
}

export default Navbar;
