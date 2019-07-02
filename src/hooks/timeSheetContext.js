import React, { useState, useContext, createContext, useEffect } from "react";

import { userTimeSheet } from "../utils/timeSheetCalc";

import client from "../utils/apiClient";
import { useAuth } from "./authContext";

const TimeSheetContext = createContext();

function TimeSheetProvider(props) {
  const [timeSheetData, setTimeSheetData] = useState(null);
  const [dateRange, setDateRange] = useState({
    start: "2017-01-01",
    end: "2020-12-31"
  });

  const { jwt } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await client(
        "GET",
        `/staff/timesheets?start=${dateRange.start}&end=${dateRange.end}`,
        {}
      );
      const format = userTimeSheet(response);
      setTimeSheetData(format);
    })();
  }, [dateRange]);

  function updateTimeSheet() {}

  function correctEntry() {}

  function addMissingEntry() {}

  function addVacation() {}

  return (
    <TimeSheetContext.Provider
      value={{
        timeSheetData,
        dateRange,
        setDateRange,
        updateTimeSheet,
        correctEntry,
        addMissingEntry,
        addVacation
      }}
      {...props}
    />
  );
}

const useTimeSheet = () => useContext(TimeSheetContext);

export { TimeSheetProvider, useTimeSheet };
