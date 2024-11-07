import { Outlet } from "react-router-dom";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Root = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <div className="mb-72" />
      <Footer />
    </>
  );
};

export default Root;
