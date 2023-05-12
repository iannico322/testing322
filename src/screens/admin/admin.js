import React, { Suspense } from "react";
import AdminNav from "../../components/navbar/adminNav";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { Outlet } from "react-router-dom";

import Loader from "./loader";

const Admin = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      {/* Nav bar */}

      <AdminNav />

      {/* Nav bar */}

      <div className=" h-[100%] w-full">
        <Header />
        <div className="relative w-full h-full overflow-scroll bg-gray">
          {/* admin pages with loader */}
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
          {/* admin pages with loader */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
