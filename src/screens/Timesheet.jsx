import React from "react";

import { useTimeSheet } from "../hooks/timeSheetContext";

import {
  DateRangeSelector,
  TimeSheetDisplay,
  AddMissingTime
} from "../components/Timesheet";

import "../components/Timesheet/index.css";

export default function Timesheet() {
  const { timeSheetData } = useTimeSheet();

  return (
    <>
      <AddMissingTime />
      <DateRangeSelector />
      {timeSheetData && <TimeSheetDisplay entries={timeSheetData.timesheet} />}
    </>
  );
}
