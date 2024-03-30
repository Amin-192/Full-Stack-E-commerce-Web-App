import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="flex gap-6 p-4 bg-blue-100 justify-center ">
        <li className="bg-blue-200 p-2 rounded-xl hover:scale-110 transition-all duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="bg-blue-200 p-2 rounded-xl hover:scale-110 transition-all duration-300">
          <Link to="/about">About</Link>
        </li>
        <li className="bg-blue-200 p-2 rounded-xl hover:scale-110 transition-all duration-300">
          <Link to="/CV">CV</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
