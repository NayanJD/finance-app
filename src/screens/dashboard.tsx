import React, { useState } from "react";

import { useAppSelector } from "../hooks/store";
import ProfileButton from "../components/profileButton";
import SideMenu from "../components/sideMenu";
import Home from "./home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function Dashboard() {
  const user = useAppSelector((state) => state.user);

  const userFullName = [user.firstName, user.lastName].join(" ");

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex sm:flex-row flex-col-reverse h-screen w-screen  sm:items-start ">
      <SideMenu />
      <div className={`grow flex w-screen sm:h-screen bg-creamyWhite h-0`}>
        <Routes>
          <Route path="/" element={<Home isClicked={isClicked} />} />
        </Routes>
        <div
          className={`absolute top-0 right-0 lg:relative grid grid-rows ${
            isClicked
              ? "w-screen sm:w-[400px] bg-duidPurple"
              : "w-[52px] sm:w-[100px]"
          } h-screen sm:h-screen justify-center  sm:justify-start sm:px-2  transition-all ease-in-out duration-700`}
        >
          <div className="mt-[10px] sm:mt-[40px] h-[52px] grid items-center">
            <ProfileButton
              isClicked={isClicked}
              onClick={() => setIsClicked(!isClicked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
