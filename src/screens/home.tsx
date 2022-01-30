import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { ReactComponent as Dot } from "../assets/bulletDot.svg";

import Dropdown from "../components/dropdown";

import RadialChart from "../components/radialChart";
import BarChart from "../components/barChart";

interface IHomeProps {
  isClicked: boolean;
}

function Home({ isClicked }: IHomeProps) {
  const data = [
    {
      name: "Jun",
      uv: 100,
      pv: -48,
      max: 150,
      min: -50,
    },
    {
      name: "Jul",
      uv: 148,
      pv: -20,
      max: 150,
      min: -50,
    },
    {
      name: "Aug",
      uv: 100,
      pv: -30,
      max: 150,
      min: -50,
    },
    {
      name: "Sep",
      uv: 55,
      pv: -10,
      max: 150,
      min: -50,
    },
    {
      name: "Oct",
      uv: 125,
      pv: -48,
      max: 150,
      min: -50,
    },
    {
      name: "Nov",
      uv: 110,
      pv: -25,
      max: 150,
      min: -50,
    },
    {
      name: "Dec",
      uv: 95,
      pv: -25,
      max: 150,
      min: -50,
    },
  ];

  const radialData = [
    {
      name: "40-49",
      uv: 90,
      pv: 3908,
      fill: "url(#colorGradient0)",
    },
    {
      name: "50+",
      uv: 85,
      pv: 4800,
      fill: "url(#colorGradient1)",
    },
    {
      name: "unknow",
      uv: 81,
      pv: 4800,
      fill: "url(#colorGradient2)",
    },
  ];

  return (
    <div
      className={`sm:h-screen ${
        isClicked ? "w-0" : "grow"
      } sm:grow flex flex-col transition-all ease-in-out duration-700 overflow-y-scroll`}
    >
      <div className="grid grid-rows-2 sm:grid-cols-2 h-fit sm:h-[52px] m-[10px] sm:m-[40px]">
        <div>
          <div className="font-sans font-semibold text-lg">Hello Abraham</div>
          <div className="font-sans font-light">How are you today?</div>
        </div>
        <div className="mt-[10px] sm:mt-[0px] flex flex-wrap flex-row items-center bg-searchWhite h-[48px] rounded-full focus-within:border-2 focus-within:border focus-within:border-duidRed transition-all ease-in-out duration-700">
          <SearchIcon height={20} fill="#727272" className="pl-[20px]" />
          <input
            type="text"
            className="bg-searchWhite grow rounded-full outline-none  px-3"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="mx-[10px] p-[10px] sm:mx-[40px] sm:p-[32px] flex flex-col bg-neutral-100 rounded shadow-2xl">
        <div className="grid grid-flow-col">
          <div className="font-sans font-semibold text-2xl">Overview</div>
          <div className="grid justify-end">
            <Dropdown options={["2022", "2021", "2019"]} />
          </div>
        </div>
        <div className="mt-[10px] font-sans font-light">
          Keep using your money wisely
        </div>
        <div className="grid grid-rows-1 lg:grid-rows-1 lg:grid-cols-2 mt-[10px] items-center">
          <BarChart data={data} />
          <div className="grid">
            <div>
              <div className="text-xl font-extrabold font-sans">In and Out</div>
              <div className="font-sans font-light">
                Increase on the month 2.79%
              </div>
            </div>
            <div className="flex flex-row h-full mt-[10px]">
              <div className="grid grid-rows hidden sm:grid">
                <div className="">
                  <div className="font-sans text-lg text-duidPurple">2.53%</div>
                  <Dot className="inline-block mr-[4px]" />
                  <div className="inline-block text-sm font-sans">
                    Spending Money
                  </div>
                </div>
                <div className="">
                  <div className="font-sans text-lg text-duidPurple">2.53%</div>
                  <Dot className="inline-block mr-[4px]" />
                  <div className="inline-block text-sm font-sans">
                    Money Income
                  </div>
                </div>
                <div className="">
                  <div className="font-sans text-lg text-duidRed">2.53%</div>
                  <Dot className="inline-block mr-[4px]" />
                  <div className="inline-block text-sm font-sans">Jajan</div>
                </div>
              </div>
              <div className="grow grid justify-center">
                <RadialChart data={radialData} />
              </div>
            </div>
          </div>
          {/* <div>dadf</div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
