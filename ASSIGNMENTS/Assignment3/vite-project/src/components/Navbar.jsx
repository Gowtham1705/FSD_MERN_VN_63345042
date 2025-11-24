import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="left">CANDY FASHION</div>

      <div className="right">
        <Link to="/">Back</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/details">Details</Link>
      </div>
    </nav>
  );
}
