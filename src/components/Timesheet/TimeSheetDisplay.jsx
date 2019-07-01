import React from "react";

import { DayEntry } from "./Entry";

export const TimeSheetDisplay = ({ entries: days }) => {
  console.log("days", days);
  return (
    <>
      {days &&
        Object.keys(days).map(day => (
          <DayEntry key={day} dayEntry={days[day]} />
        ))}
    </>
  );
};
