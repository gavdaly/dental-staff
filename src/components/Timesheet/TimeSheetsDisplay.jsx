import React from "react";

import { useTimeSheets } from "../../hooks/timeSheetsContext";

export const TimeSheetsDisplay = () => {
  const { timeSheetsData } = useTimeSheets();
  return <>{JSON.parse(timeSheetsData)}</>;
};

export default TimeSheetsDisplay;
