import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import Dropdown from "../components/dropdown";

interface IHomeProps {
  isClicked: boolean;
}

function Home({ isClicked }: IHomeProps) {
  return (
    <div
      className={`sm:h-screen ${
        isClicked ? "w-0" : "grow"
      } sm:grow flex flex-wrap flex-col transition-all ease-in-out duration-700`}
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
      <div className="border border-black grid mx-[40px] p-[32px] flex flex-wrap flex-col">
        <div className="grid grid-flow-col">
          <div className="font-sans font-semibold text-2xl">Overview</div>
          <div className="grid justify-end">
            <Dropdown options={["2022", "2021", "2019"]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
