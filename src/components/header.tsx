import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bg-emerald-600 h-12">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/count-up">CountUp</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
};

export default Header;
