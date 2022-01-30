import React, { useState } from "react";

import { BarChart as RBarChart, Bar, XAxis, YAxis } from "recharts";

interface IBarChartProps {
  data: any;
}
export default function BarChart({ data }: IBarChartProps) {
  const BAR_GAP = 2;
  const BAR_SIZE = 10;
  return (
    <div className="min-width-[400px] overflow-auto">
      <RBarChart
        width={400}
        height={252}
        data={data}
        barGap={BAR_GAP}
        margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
        // barSize={BAR_SIZE}
      >
        <XAxis dataKey="name" axisLine={false} tickLine={false} max={5000} />
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
      </RBarChart>
    </div>
  );
}
