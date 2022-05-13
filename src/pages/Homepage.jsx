import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <div>Homepage</div>
      <Link to="/about">about</Link>
    </div>
  );
}
