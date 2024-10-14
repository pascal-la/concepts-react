import { Outlet } from "react-router-dom";

import Footer from "../components/footer";
import Header from "../components/header";

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
