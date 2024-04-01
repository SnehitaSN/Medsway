import React from "react";

function MonthlyCalendar() {
  // Get current date
  const currentDate = new Date();

  // Get current month and year
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Get the number of days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Generate an array of days in the current month
  const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  return (
    <div className="mt-4">
      <h2 className="font-bold text-lg mb-2">Monthly Calendar</h2>
      <div className="grid grid-cols-7 gap-2">
        {/* Render days of the week */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-semibold">{day}</div>
        ))}

        {/* Render days of the month */}
        {daysArray.map((day) => (
          <div key={day} className="text-center">{day}</div>
        ))}
      </div>
    </div>
  );
}

export default MonthlyCalendar;
