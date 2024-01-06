import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-sky-600 pt-10 pb-10">
      <div className="container mx-auto flex justify-between">
        <span className="text-4xl text-white select-none font-display1 font-bold text-ellipsis leading-none tracking-tight">
          <Link to={"/"}>MERN Paradise</Link>
        </span>
        <span>
          <Link
            to={"/signin"}
            className="flex items-center px-3 py-2 font-semibold select-none text-sky-900 bg-white rounded-lg hover:bg-sky-100 hover:scale-110 transition-all shadow-md"
          >
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
