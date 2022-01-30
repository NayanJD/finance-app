import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { ReactComponent as Dot } from "../assets/bulletDot.svg";
import Dropdown from "../components/dropdown";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  PolarRadiusAxis,
  PolarAngleAxis,
} from "recharts";

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
  const BAR_GAP = 2;
  const BAR_SIZE = 10;
  return (
    <div
      className={`sm:h-screen ${
        isClicked ? "w-0" : "grow"
      } sm:grow flex flex-col transition-all ease-in-out duration-700`}
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
        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 mt-[10px]">
          <div className="min-width-[400px] overflow-auto">
            <BarChart
              width={400}
              height={252}
              data={data}
              barGap={BAR_GAP}
              margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
              // barSize={BAR_SIZE}
            >
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                max={5000}
              />
              <YAxis axisLine={false} tickLine={false} domain={[-50, 150]} />
              <Bar
                dataKey="min"
                fill="#E3E3E3"
                barSize={BAR_SIZE}
                transform={`translate(${1.5 * (BAR_GAP + BAR_SIZE)}, 1)`}
                radius={[10, 10, 10, 10]}
              />
              <Bar
                dataKey="pv"
                fill="#554886"
                barSize={BAR_SIZE}
                transform={`translate(${(BAR_GAP + BAR_SIZE) / 2}, 1)`}
                radius={[10, 10, 10, 10]}
              />
              <Bar
                dataKey="max"
                fill="#E3E3E3"
                barSize={BAR_SIZE}
                transform={`translate(${-(BAR_GAP + BAR_SIZE) / 2}, -1)`}
                radius={[10, 10, 10, 10]}
              />
              <Bar
                dataKey="uv"
                fill="#F26D81"
                barSize={BAR_SIZE}
                transform={`translate(${-1.5 * (BAR_GAP + BAR_SIZE)}, -1)`}
                radius={[10, 10, 10, 10]}
              />
            </BarChart>
          </div>
          <div className="grid">
            <div>
              <div className="text-xl font-extrabold font-sans">In and Out</div>
              <div className="font-sans font-light">
                Increase on the month 2.79%
              </div>
            </div>
            <div className="grid grid-cols-2 h-full mt-[10px]">
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
              <div className="">
                <RadialBarChart
                  width={250}
                  height={250}
                  innerRadius="50%"
                  outerRadius="100%"
                  data={radialData}
                  startAngle={90}
                  endAngle={-270}
                >
                  <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    angleAxisId={0}
                    tick={false}
                  />
                  <defs>
                    <linearGradient
                      id="colorGradient0"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                      gradientTransform="rotate(-90)"
                    >
                      <stop offset="5%" stopColor="#F35C98" stopOpacity={1} />
                      <stop offset="95%" stopColor="#EFEFEF" stopOpacity={1} />
                    </linearGradient>
                    <linearGradient
                      id="colorGradient1"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                      gradientTransform="rotate(-90)"
                    >
                      <stop offset="5%" stopColor="#554886" stopOpacity={1} />
                      <stop offset="95%" stopColor="#EFEFEF" stopOpacity={1} />
                    </linearGradient>
                    <linearGradient
                      id="colorGradient2"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                      gradientTransform="rotate(-90)"
                    >
                      <stop offset="5%" stopColor="#F26675" stopOpacity={1} />
                      <stop offset="95%" stopColor="#EFEFEF" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                  <RadialBar
                    className=""
                    background
                    dataKey="uv"
                    data={radialData}
                    radius={10}
                    fill={"linear-gradient(red, yellow)"}
                    cornerRadius={10}
                  />

                  <Legend
                    iconSize={10}
                    layout="vertical"
                    verticalAlign="middle"
                    align="center"
                    content={() => (
                      <span className="text-2xl font-sans font-bold">80%</span>
                    )}
                  />
                  {/* <Tooltip /> */}
                </RadialBarChart>
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
