import React, { useState, useEffect } from "react";

export const DateRangeSelector = ({ setDateRange }) => {
  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(Date.now());
  useEffect(() => {
    console.log(startTime, endTime);
    console.log(typeof startTime);
    setDateRange({ start: startTime, end: endTime });
  }, [startTime, endTime, setDateRange]);
  return (
    <div>
      <input
        onChange={event => setStartTime(event.target.value)}
        type="date"
        value={startTime}
      />{" "}
      to{" "}
      <input
        onChange={event => setEndTime(event.target.value)}
        type="date"
        value={endTime}
      />
    </div>
  );
};
