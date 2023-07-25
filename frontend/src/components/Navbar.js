import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header>
        <div className="container">
          <Link to="/">
            <h1>Workout Buddy</h1>
          </Link>
        </div>
      </header>
    </div>
  );
}
