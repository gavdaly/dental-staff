import React, { useState, useEffect } from "react";
import { useTimeSheet } from "../../hooks/timeSheetContext";

export const CorrectingEntry = ({ setIsCorrecting, start, end, id }) => {
  const [formState, setFormState] = useState("invalid");
  const [value, setValue] = useState({ start, end, reason: "" });
  const { correctEntry } = useTimeSheet();

  function submit(event) {
    event.preventDefault();
    setFormState("submitting");
    correctEntry({ ...value, id });
  }

  useEffect(() => {
    (async () => {
      // const isValid = await validate({ startTime, endTime, reason });
      if (true) setFormState("valid");
    })();
  }, [value]);

  function cancel(event) {
    event.preventDefault();
    setIsCorrecting(false);
    setValue({ start, end, reason: "" });
  }

  return (
    <>
      <div className="timeGroup">
        <p>
          <label htmlFor="start">Start Time</label>
          <input
            id="start"
            type="time"
            value={value.start}
            onChange={event =>
              setValue({ ...value, start: event.target.value })
            }
          />
        </p>
        <p>
          <label htmlFor="end">End Time</label>
          <input
            id="end"
            type="time"
            value={value.end}
            onChange={event => setValue({ ...value, end: event.target.value })}
          />
        </p>
      </div>
      <p>
        <label htmlFor="reason" />
        <textarea id="reason" />
      </p>

      <button className={formState} onClick={submit}>
        submit
      </button>
      <button onClick={cancel}>cancel</button>
    </>
  );
};

export default CorrectingEntry;
