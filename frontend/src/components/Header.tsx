import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-sky-600 py-16">
      <div className="container mx-auto px-60 flex justify-between">
        <span className="text-4xl text-white select-none font-bold tracking-tight">
          <Link to={"/"}>MERN Paradise</Link>
        </span>
        <span>
          <Link
            to={"/signin"}
            className="flex items-center px-3 py-2 font-semibold select-none text-sky-900 bg-white rounded-lg hover:bg-sky-100 hover:scale-110"
          >
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
