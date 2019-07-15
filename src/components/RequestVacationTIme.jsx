import React, { useState } from "react";

import { client } from "../utils/apiClient";

const initialState = {
  start: "",
  end: "",
  duration: 0,
  reason: ""
};

export const RequestVacationTIme = () => {
  const [form, setForm] = useState(initialState);

  function onSubmit(event) {
    event.preventDefault();
    client("POST", "/staff/vacations", { body: { vacation: { ...form } } });
    setForm(initialState);
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="start">Start Date</label>
        <input
          type="date"
          name="start"
          id="start"
          value={form.start}
          onChange={event => setForm({ ...form, start: event.target.value })}
        />
      </div>
      <div>
        <label htmlFor="end">End Date</label>
        <input
          type="date"
          name="end"
          id="end"
          value={form.end}
          onChange={event => setForm({ ...form, end: event.target.value })}
        />
      </div>
      <div>
        <label htmlFor="hours">Vacation Hours</label>
        <input
          type="number"
          name="hours"
          id="hours"
          value={form.duration}
          onChange={event => setForm({ ...form, duration: event.target.value })}
        />
      </div>
      <div>
        <label htmlFor="reason">Reason</label>
        <textarea
          name="reason"
          id="reason"
          cols="30"
          rows="10"
          value={form.reason}
          onChange={event => setForm({ ...form, reason: event.target.value })}
        />
      </div>
      <button type="submit">Request Time</button>
    </form>
  );
};
