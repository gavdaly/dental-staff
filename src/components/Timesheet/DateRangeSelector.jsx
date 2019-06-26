import React from "react";

export const DateRangeSelector = ({ setDateRange, dateRange }) => (
  <div>
    <input
      onChange={event =>
        setDateRange({ ...dateRange, start: event.target.value })
      }
      type="date"
      value={dateRange.start}
    />{" "}
    to{" "}
    <input
      onChange={event =>
        setDateRange({ ...dateRange, end: event.target.value })
      }
      type="date"
      value={dateRange.end}
    />
  </div>
);
