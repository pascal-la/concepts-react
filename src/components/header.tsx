import { Link } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Login", path: "/login" },
  { name: "Contact", path: "/contact" },
  { name: "CountUp", path: "/count-up" },
  { name: "Blog", path: "/blog" },
];

const Header = () => {
  return (
    <header className="relative top-0 left-0 right-0 flex items-center h-12 p-3 gap-3 bg-emerald-600">
      {links.map((link) => (
        <Link key={link.name} to={link.path}>
          {link.name}
        </Link>
      ))}
    </header>
  );
};

export default Header;
