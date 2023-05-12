import React, { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import { UserNav } from "../../components/navbar/userNav";
import { useAuthUser } from "react-auth-kit";
import Loader from "../admin/loader";
import Header from "../../components/header/header";

const User = () => {
  // const accountCred = useSelector(usersCache)

  const navigate = useNavigate();
  const userState = useAuthUser();

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      {/* Nav bar */}

      <UserNav />

      {/* Nav bar */}

      <div className=" h-[100%] w-full">
        <Header />
        <div className="relative w-full h-full overflow-scroll bg-gray">
          {/* user pages with loader */}
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
          {/* user pages with loader */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default User;
