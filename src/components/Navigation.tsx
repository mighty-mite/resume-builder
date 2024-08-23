import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <Link to="/">main</Link>
      <Link to="/resume">resume</Link>
    </div>
  );
}
