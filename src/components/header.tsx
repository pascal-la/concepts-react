import { Link } from "react-router-dom";

const Header = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "CountUp",
      path: "/count-up",
    },
    {
      name: "Blog",
      path: "/blog",
    },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 flex items-center p-3 gap-3 bg-emerald-600 h-12">
      {links.map((link) => (
        <Link to={link.path}>{link.name}</Link>
      ))}
    </header>
  );
};

export default Header;
