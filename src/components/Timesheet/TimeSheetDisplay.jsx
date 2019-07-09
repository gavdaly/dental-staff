import React from "react";

import { DayEntry } from "./Entry";
import { useTimeSheet } from "../../hooks/timeSheetContext";

export const TimeSheetDisplay = () => {
  const {
    timeSheetData: { timesheet }
  } = useTimeSheet();
  return (
    <>
      {Object.keys(timesheet) &&
        Object.keys(timesheet).map(day => (
          <DayEntry key={day} day={day} dayEntry={timesheet[day]} />
        ))}
    </>
  );
};
