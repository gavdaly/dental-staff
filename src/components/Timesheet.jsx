import React, { useEffect, useState } from "react";

import {
  DateRangeSelector,
  TimeSheetDisplay,
  AddMissingTime
} from "./TimesheetComponents";

import { userTimeSheet } from "../utils/timeSheetCalc";

import "./TimesheetComponents/index.css";

import client from "../utils/apiClient";

export default function Timesheet() {
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await client(
        "GET",
        `/staff/timesheets?start='2017-01-01'`,
        {}
      );
      console.log(response);
      const format = userTimeSheet(response);
      setData(format);
    })();
  }, []);

  useEffect(() => {
    // request daterange
  }, [dateRange]);

  return (
    <>
      <AddMissingTime />
      <DateRangeSelector setDateRange={setDateRange} />
      {data && <TimeSheetDisplay entries={data} />}
      <pre>{data && JSON.stringify(data)}</pre>
    </>
  );
}
