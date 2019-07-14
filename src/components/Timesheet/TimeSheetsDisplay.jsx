import React from "react";

import { DayEntry } from "./Entry";
import { useTimeSheets } from "../../hooks/timeSheetsContext";

export const TimeSheetsDisplay = () => {
  const { timeSheetsData } = useTimeSheets();

  return (
    <>
      {timeSheetsData.length > 0 &&
        timeSheetsData.map(user => (
          <div key={user.id}>
            <h4>
              {user.last_name}, {user.first_name}
            </h4>
            {Object.keys(user.time_sheet).map(day => (
              <DayEntry
                key={day}
                day={day}
                dayEntry={user.time_sheet[day]}
                editable={false}
              />
            ))}
          </div>
        ))}
    </>
  );
};

export default TimeSheetsDisplay;
