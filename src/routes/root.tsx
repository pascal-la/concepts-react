import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div className="mb-72" />
      <Footer />
    </>
  );
};

export default Root;
