import React, { useState } from "react";

import ProfileButton from "../components/profileButton";
import SideMenu from "../components/sideMenu";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./home";

function Dashboard() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex flex-wrap sm:flex-row flex-col-reverse h-screen w-screen  sm:items-start ">
      <SideMenu />
      <div
        className={`grow flex sm:flex-row flex-row flex-rows-1 w-full sm:w-fit border-2 sm:h-screen bg-creamyWhite`}
      >
        <Routes>
          <Route path="/" element={<Home isClicked={isClicked} />} />
        </Routes>
        <div
          className={`grid ${
            isClicked
              ? "w-screen sm:w-[400px] bg-duidPurple"
              : "w-[50px] sm:w-[100px]"
          } h-full sm:h-screen justify-center  sm:justify-start sm:px-2  transition-all ease-in-out duration-700`}
        >
          <ProfileButton
            isClicked={isClicked}
            onClick={() => setIsClicked(!isClicked)}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
