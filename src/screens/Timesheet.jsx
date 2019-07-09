import React from "react";

import { TimeSheetProvider } from "../hooks/timeSheetContext";

import {
  DateRangeSelector,
  TimeSheetDisplay,
  AddMissingTime
} from "../components/Timesheet";

import "../components/Timesheet/index.css";

export default function Timesheet() {
  return (
    <TimeSheetProvider>
      <AddMissingTime />
      <DateRangeSelector />
      <TimeSheetDisplay />
    </TimeSheetProvider>
  );
}
