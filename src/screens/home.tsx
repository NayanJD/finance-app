import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { ReactComponent as Dot } from "../assets/bulletDot.svg";

import Dropdown from "../components/dropdown";

import RadialChart from "../components/radialChart";
import BarChart from "../components/barChart";
import useStat, { useYears } from "../hooks/stat";

interface IHomeProps {
  isClicked: boolean;
}

function Home({ isClicked }: IHomeProps) {
  const yearOptions = useYears();

  const [yearIndex, setYearIndex] = useState(0);
  const { barChartData, radialChartData } = useStat(yearOptions[yearIndex]);

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
            <Dropdown
              options={yearOptions.map((year) => year.toString())}
              selectedValue={yearOptions[yearIndex].toString()}
              callback={(selectedYear) => setYearIndex(selectedYear)}
            />
          </div>
        </div>
        <div className="mt-[10px] font-sans font-light">
          Keep using your money wisely
        </div>
        <div className="grid grid-rows-1 lg:grid-rows-1 lg:grid-cols-2 mt-[10px] items-center">
          <BarChart data={barChartData} />
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
                <RadialChart data={radialChartData} />
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
