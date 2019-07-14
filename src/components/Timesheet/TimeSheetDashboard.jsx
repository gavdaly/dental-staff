import React, { useState } from "react";

import { useTimeSheets } from "../../hooks/timeSheetsContext";

export const TimeSheetDashboard = () => {
  const [showAdjustment, setShowAdjustment] = useState(false);
  const [adjustmentForm, setAdjustmentForm] = useState({
    reason: "",
    user_id: "",
    hours: ""
  });
  const {
    pending,
    response: { users }
  } = useTimeSheets();

  function addAdjustment(event) {
    event.preventDefault();
    console.log(adjustmentForm);
  }

  return (
    <>
      <div>Number of pending changes: {pending.length}</div>
      <ul>
        {pending.map(entry => (
          <li key={entry.id}>
            <a href={`#pending${entry.id}`}>{entry.start_time}</a>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => setShowAdjustment(!showAdjustment)}>
          {showAdjustment ? "Cancel" : "add adjustment"}
        </button>
        {showAdjustment && (
          <form onSubmit={addAdjustment}>
            <div>
              <label htmlFor="user">User</label>
              <select
                onChange={event =>
                  setAdjustmentForm({
                    ...adjustmentForm,
                    user_id: event.target.value
                  })
                }
                value={adjustmentForm.user_id}
                id="user"
              >
                {users.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.last_name}, {user.first_name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="hours">Hours</label>
              <input
                id="hours"
                type="number"
                onChange={event =>
                  setAdjustmentForm({
                    ...adjustmentForm,
                    hours: event.target.value
                  })
                }
                value={adjustmentForm.hours}
              />
            </div>

            <div>
              <label htmlFor="reason">Reason</label>
              <textarea
                id="reason"
                onChange={event =>
                  setAdjustmentForm({
                    ...adjustmentForm,
                    reason: event.target.value
                  })
                }
                value={adjustmentForm.reason}
              />
            </div>
            <button>Add Adjustment</button>
          </form>
        )}
      </div>
    </>
  );
};

export default TimeSheetDashboard;
