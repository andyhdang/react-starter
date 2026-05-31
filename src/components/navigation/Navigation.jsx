import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/style-guide">Style Guide</Link>
        </li>
      </ul>
    </nav>
  );
}
