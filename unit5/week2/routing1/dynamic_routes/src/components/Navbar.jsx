import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/products">
        <button>Browse Products</button>
      </Link>
    </div>
  );
};

export default Navbar;
