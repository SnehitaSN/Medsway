import React from "react";
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "Next 9 months",
    uv: 590,
    pv: 1099,
    amt: 1400,
  },
  {
    name: "Next 6 months",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Next 3 months",
    uv: 1297,
    pv: 800,
    amt: 989,
  },
];
function Horizontalchart2() {
  return (
    <div>
      <div className="w-full max-w-md mx-auto -mr-20 ">
        <ComposedChart
          layout="vertical"
          width={400}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" barSize={30} fill="#8884d8" />
        </ComposedChart>
      </div>
    </div>
  );
}

export default Horizontalchart2;
