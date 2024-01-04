import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-sky-700 py-10">
      <div className="container flex mx-auto justify-between items-center">
        <span className="tracking-tight font-bold text-white text-3xl px-16">
          <Link to={"/"}>MERN Paradise</Link>
        </span>
        <span className="cursor-pointer text-sm py-6 font-bold text-white px-16">
          <h4>Privacy Policy</h4>
          <h4>Terms and conditions</h4>
        </span>
      </div>
    </div>
  );
};

export default Footer;
