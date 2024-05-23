import React from "react";
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

const data = [
  {
    name: "Jan",
    pv: 2400,
  },
  {
    name: "Feb",
    pv: 1398,
  },
  {
    name: "Mar",
    pv: 9800,
  },
  {
    name: "Apr",
    pv: 3908,
  },
  {
    name: "May",
    pv: 4800,
  },
  {
    name: "Jun",
    pv: 3800,
  },
];

function Barchart() {
  return (
    <div className="w-full max-w-md mx-auto -mr-20">
      <BarChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" barSize={20} />
      </BarChart>
    </div>
  );
}

export default Barchart;
