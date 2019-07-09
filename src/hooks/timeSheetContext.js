import React, { useState, useContext, createContext, useEffect } from "react";

import { userTimeSheet } from "../utils/timeSheetCalc";

import client from "../utils/apiClient";

const TimeSheetContext = createContext();

function TimeSheetProvider(props) {
  const [timeSheetData, setTimeSheetData] = useState({
    timesheet: {}
  });
  const [dateRange, setDateRange] = useState({
    start: "2017-01-01",
    end: "2020-12-31"
  });

  useEffect(() => {
    updateTimeSheet();
    // eslint-disable-next-line
  }, [dateRange]);

  async function updateTimeSheet() {
    const response = await client(
      "GET",
      `/staff/timesheets?start=${dateRange.start}&end=${dateRange.end}`,
      {}
    );
    const format = userTimeSheet(response);
    setTimeSheetData(format);
  }

  async function correctEntry(state) {
    const response = await client("POST", `/staff/correct_assignation`, {
      body: { correct_assignation: { ...state } }
    });
    return response;
  }

  async function addMissingEntry(state) {
    const response = await client("POST", `/staff/missing_assignation`, {
      body: { missing_assignation: { ...state } }
    });
    return response;
  }

  async function addVacation(state) {
    const response = await client("POST", ``, {
      body: { vacation: { ...state } }
    });
    return response;
  }

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
