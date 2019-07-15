import React from "react";

import { TimeSheetsProvider } from "../hooks/timeSheetsContext";

import { TimeSheetsDisplay, TimeSheetDashboard } from "../components/Timesheet";

import "../components/Timesheet/index.css";

export default function Timesheets() {
  return (
    <TimeSheetsProvider>
      <TimeSheetDashboard />
      <TimeSheetsDisplay />
    </TimeSheetsProvider>
  );
}
