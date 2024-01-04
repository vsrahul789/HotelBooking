import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex flex-col justify-between">
        <span className="text-4xl text-white font-bold tracking-tight">
          <Link to={"/"}>MernHotels</Link>
        </span>
        <span>
          <Link
            to={"/signin"}
            className="flex items-center px-3 py-2 text-white bg-blue-800 hover:text-blue-700 hover:bg-white"
          >
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
