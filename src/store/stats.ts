import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IBarChartStat {
  name: string;
  uv: number;
  pv: number;
  max: number;
  min: number;
}

export interface IRadialChartStat {
  name: string;
  uv: number;
  pv: number;
  fill: string;
}

export interface IStatState {
  barchartStat: Record<number, IBarChartStat[]>;
  raidalChartStat: Record<number, IRadialChartStat[]>;
}

const initialStatState: IStatState = {
  barchartStat: {
    2022: [
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
    ],
    2021: [
      {
        name: "Jun",
        uv: 100,
        pv: -30,
        max: 150,
        min: -50,
      },
      {
        name: "Jul",
        uv: 55,
        pv: -10,
        max: 150,
        min: -50,
      },
      {
        name: "Aug",

        uv: 100,
        pv: -48,
        max: 150,
        min: -50,
      },
      {
        name: "Sep",

        uv: 148,
        pv: -20,
        max: 150,
        min: -50,
      },
      {
        name: "Oct",
        uv: 95,
        pv: -25,
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

        uv: 125,
        pv: -48,
        max: 150,
        min: -50,
      },
    ],
  },
  raidalChartStat: {
    2022: [
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
    ],
    2021: [
      {
        name: "40-49",
        uv: 20,
        pv: 3908,
        fill: "url(#colorGradient0)",
      },
      {
        name: "50+",
        uv: 50,
        pv: 4800,
        fill: "url(#colorGradient1)",
      },
      {
        name: "unknow",
        uv: 30,
        pv: 4800,
        fill: "url(#colorGradient2)",
      },
    ],
  },
};

export const statSlice = createSlice({
  name: "stat",
  initialState: initialStatState,
  reducers: {},
});

// export const { updateUserName } = userSlice.actions;

export default statSlice.reducer;
