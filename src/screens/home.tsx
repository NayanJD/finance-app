import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";

interface IHomeProps {
  isClicked: boolean;
}

function Home({ isClicked }: IHomeProps) {
  return (
    <div
      className={`sm:h-screen grid grid-rows ${
        isClicked ? "w-0" : "grow"
      } sm:grow flex transition-all ease-in-out duration-700`}
    >
      <div className="grid grid-rows-2 sm:grid-cols-2 h-fit sm:h-[52px] m-[10px] sm:m-[40px]">
        <div>
          <div className="font-sans font-semibold text-lg">Hello Abraham</div>
          <div className="font-sans font-light">How are you today?</div>
        </div>
        <div>
          <input
            type="text"
            className="bg-searchWhite w-full h-[48px] rounded-full px-3 outline-none focus:outline-duidRed transition-all ease-in-out duration-700"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
