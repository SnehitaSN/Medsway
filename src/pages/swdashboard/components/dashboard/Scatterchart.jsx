import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
 
  Tooltip,
 
} from "recharts";

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];
function Scatterchart() {
  return (
    <div className="w-full max-w-md mx-auto -mr-25">
      <ScatterChart
      width={400} // Adjust width to make the chart visible
      height={300}
        margin={{
          top: 50,
          right: 50,
          bottom: 50,
          left: 50,
        }}
      >
       
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="A school" data={data} fill="#8884d8" shape="circle"  />
      </ScatterChart>
    </div>
  );
}

export default Scatterchart;
