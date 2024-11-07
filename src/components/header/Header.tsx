import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const links = [
  { name: "Home", path: "/" },
  { name: "Login", path: "/login" },
  { name: "Contact", path: "/contact" },
  { name: "CountUp", path: "/count-up" },
  { name: "Blog", path: "/blog" },
];

const Header = () => {
  const { pathname } = useLocation();

  const isActivePath = (path: string) => pathname === path;

  const handlePreventNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    if (isActivePath(path)) e.preventDefault();
  };

  return (
    <header className="relative top-0 left-0 right-0 flex items-center h-12 p-3 gap-3 bg-emerald-600">
      {links.map(({ name, path }) => (
        <Link
          key={name}
          to={path}
          onClick={(e) => handlePreventNavigation(e, path)}
          className={twMerge(isActivePath(path) && "text-slate-500")}
        >
          {name}
        </Link>
      ))}
    </header>
  );
};

export default Header;
