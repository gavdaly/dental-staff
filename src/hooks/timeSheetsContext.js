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
  const [pending, setPending] = useState([]);
  const [response, setResponse] = useState({
    users: [],
    assignations: [],
    adjustments: [],
    corrections: []
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
    const pend = response.assignations.filter(
      entry => entry.state === "pending"
    );
    setPending(pend);
    setResponse(response);
    setTimeSheetsData(fts);
  }

  async function verifyEntry(state) {
    const response = await client("POST", `/admin/corrections`, {
      body: { correction: { ...state } }
    });
    updateTimeSheet();
    return response;
  }

  async function createAdjustment(state) {
    const response = await client("POST", `/admin/adjustments`, {
      body: { adjustment: { ...state } }
    });
    // updateTimeSheet();
    return response;
  }

  async function updateAdjustment(state) {
    const response = await client("PUT", `/admin/adjustments/${state.id}`, {
      body: { adjustment: { ...state } }
    });
    updateTimeSheet();
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
        updateAdjustment,
        createAdjustment,
        response,
        pending
      }}
      {...props}
    />
  );
}

const useTimeSheets = () => useContext(TimeSheetsContext);

export { TimeSheetsProvider, useTimeSheets };
