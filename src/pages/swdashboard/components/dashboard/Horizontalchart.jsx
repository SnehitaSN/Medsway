import React from "react";
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "Mankind",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Cipla",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Aristo",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Systopic",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Blue Cross",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
 
];


// const data = [
//   { name: 'Mankind', value: 20, percentage: -13 },
//   { name: 'Cipla', value: 30, percentage: -19 },
//   { name: 'Aristo', value: 40, percentage: -16 },
//   { name: 'Systopic', value: 50, percentage: -15 },
//   { name: 'Blue Cross', value: 60, percentage: -15 },
// ];

function Horizontalchart() {
  return (
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
        <Bar dataKey="pv" barSize={20} fill="#8884d8" />
      </ComposedChart>
    </div>

  //   <div className="flex justify-center items-center">
  //   <BarChart
  //     width={600}
  //     height={300}
  //     data={data}
  //     margin={{
  //       top: 5,
  //       right: 30,
  //       left: 20,
  //       bottom: 5,
  //     }}
  //   >
     
  //     <XAxis dataKey="name" />
  //     <YAxis />
  //     <Tooltip />
  //     <Legend />
  //     <Bar dataKey="value" fill="#8884d8">
  //       {data.map((entry, index) => (
  //         <text
  //           key={index}
  //           x={entry.value + 5} // Adjust position of the text
  //           y={index * 50 + 12} // Adjust position of the text
  //           dy=".35em"
  //           fill="#8884d8"
  //           className="text-sm"
  //         >
  //           {`${entry.percentage}%`}
  //         </text>
  //       ))}
  //     </Bar>
  //   </BarChart>
  // </div>
  );
}

export default Horizontalchart;
