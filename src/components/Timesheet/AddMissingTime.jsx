import React, { useState } from "react";

import { useTimeSheet } from "../../hooks/timeSheetContext";

const initialState = {
  date: "",
  start: "",
  end: "",
  reason: ""
};

export const AddMissingTime = () => {
  const [isShowingForm, setIsShowingForm] = useState(false);
  const [values, setValues] = useState(initialState);
  const { addMissingEntry } = useTimeSheet();

  const onSubmit = event => {
    event.preventDefault();
    addMissingEntry(values);
    setValues(initialState);
  };

  const cancelForm = () => {
    setIsShowingForm(false);
    setValues(initialState);
  };

  return (
    <>
      {isShowingForm ? (
        <form onSubmit={onSubmit}>
          <p>
            <label htmlFor="date">Date</label>
            <input
              value={values.date}
              onChange={event =>
                setValues({ ...values, date: event.target.value })
              }
              type="date"
              name="date"
              id="date"
            />
          </p>
          <p>
            <label htmlFor="start">Start</label>
            <input
              value={values.start}
              onChange={event =>
                setValues({ ...values, start: event.target.value })
              }
              type="time"
              name="start"
              id="start"
            />
          </p>

          <p>
            <label htmlFor="end">End</label>
            <input
              value={values.end}
              onChange={event =>
                setValues({ ...values, end: event.target.value })
              }
              type="time"
              name="end"
              id="end"
            />
          </p>

          <p>
            <label htmlFor="reason">Reason</label>
            <textarea
              value={values.reason}
              onChange={event =>
                setValues({ ...values, reason: event.target.value })
              }
              name="reason"
              id="reason"
              cols="30"
              rows="10"
            />
          </p>

          <button onClick={onSubmit}>Add Missing Entry</button>
          <button onClick={cancelForm}>Cancel</button>
        </form>
      ) : (
        <button onClick={() => setIsShowingForm(true)}>
          Add A Missing Entry
        </button>
      )}
    </>
  );
};
