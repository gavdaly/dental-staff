import React from "react";
import { useTimeSheet } from "../../hooks/timeSheetContext";

export const DateRangeSelector = () => {
  const { dateRange, setDateRange } = useTimeSheet();
  return (
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
};
