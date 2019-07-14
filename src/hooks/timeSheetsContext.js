import React, { useState, useContext, createContext, useEffect } from "react";

import { generateTimesheet } from "../utils/timeSheetCalc";

import client from "../utils/apiClient";

const TimeSheetsContext = createContext();

function TimeSheetsProvider(props) {
  const [timeSheetsData, setTimeSheetsData] = useState({
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
      `/admin/timesheets?start=${dateRange.start}&end=${dateRange.end}`,
      {}
    );
    const fts = generateTimesheet(response.users, response);
    setTimeSheetsData(fts);
  }

  async function verifyEntry(state) {
    const response = await client("PUT", `/staff/missing_assignation`, {
      body: { entry: { ...state } }
    });
    return response;
  }

  async function verifyVacation(state) {
    const response = await client("PUT", ``, {
      body: { vacation: { ...state } }
    });
    return response;
  }

  return (
    <TimeSheetsContext.Provider
      value={{
        timeSheetsData,
        dateRange,
        setDateRange,
        updateTimeSheet,
        verifyEntry,
        verifyVacation
      }}
      {...props}
    />
  );
}

const useTimeSheets = () => useContext(TimeSheetsContext);

export { TimeSheetsProvider, useTimeSheets };
