import React, { useEffect, useState } from "react";

import {
  DateRangeSelector,
  TimeSheetDisplay,
  AddMissingTime
} from "../components/Timesheet";

import { userTimeSheet } from "../utils/timeSheetCalc";

import "../components/Timesheet/index.css";

import client from "../utils/apiClient";

export default function Timesheet() {
  const [dateRange, setDateRange] = useState({
    start: "2017-01-01",
    end: "2020-12-31"
  });
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await client(
        "GET",
        `/staff/timesheets?start=${dateRange.start}&end=${dateRange.end}`,
        {}
      );
      const format = userTimeSheet(response);
      setData(format);
    })();
  }, [dateRange]);

  return (
    <>
      <AddMissingTime />
      <DateRangeSelector setDateRange={setDateRange} dateRange={dateRange} />
      {data && <TimeSheetDisplay entries={data} />}
    </>
  );
}
