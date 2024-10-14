import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="mt-12" />
      <Outlet />
      <div className="mb-72" />
      <Footer />
    </div>
  );
};

export default Root;
