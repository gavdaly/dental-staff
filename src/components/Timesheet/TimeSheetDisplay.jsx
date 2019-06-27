import React from "react";

export const TimeSheetDisplay = ({ entries }) => (
  <>
    {entries.map(entry => (
      <div>{entry}</div>
    ))}
  </>
);
