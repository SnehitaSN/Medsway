import React from "react";

function YearlyList() {
  // Get current year
  const currentYear = new Date().getFullYear();

  // Generate an array of years
  const yearsArray = Array.from({ length: 10 }, (_, index) => currentYear - index);

  return (
    <div className="mt-4">
      <h2 className="font-bold text-lg mb-2">Yearly List</h2>
      <ul className="list-disc pl-5">
        {/* Render list of years */}
        {yearsArray.map((year) => (
          <li key={year}>{year}</li>
        ))}
      </ul>
    </div>
  );
}

export default YearlyList;
