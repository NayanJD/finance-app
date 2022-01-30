import React, { useState } from "react";
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

interface IRadialChart {
  data: any;
}

export default function RadialChart({ data }: IRadialChart) {
  return (
    <RadialBarChart
      width={250}
      height={250}
      innerRadius="50%"
      outerRadius="100%"
      data={data}
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
        data={data}
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
  );
}
