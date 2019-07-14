import React, { useState } from "react";
import { format } from "date-fns";
import { useTimeSheets } from "../../hooks/timeSheetsContext";

export const EditPending = ({ entry }) => {
  const { verifyEntry } = useTimeSheets();
  const [reason, setReason] = useState("");
  const { correction } = entry;
  function accept() {
    verifyEntry({ id: entry.id, accepted: true, response: reason });
  }
  function decline() {
    verifyEntry({ id: entry.id, accepted: false, response: reason });
  }
  return (
    <div id={`pending${entry.id}`} className="entry time state_pending">
      <div className="correction">
        <div className="correction_reason">{correction.reason}</div>
        <div className="time_group">
          <div className="original_start">
            <span>Original Start: </span>
            <span>{format(entry.start_time, "h:mm aa")}</span>
          </div>
          <div className="original_end">
            Original End: <span>{format(entry.end_time, "h:mm aa")}</span>
          </div>
        </div>
        {correction && (
          <div className="time_group">
            <div className="requested_start">
              <span>Requested Start: </span>
              <span>{format(correction.start_time, "h:mm aa")}</span>
            </div>
            <div className="requested_end">
              <span>Requested End: </span>
              <span>{format(correction.end_time, "h:mm aa")}</span>
            </div>
          </div>
        )}
      </div>
      <div className="state">{entry.state}</div>
      <form>
        <textarea
          onChange={event => setReason(event.target.reason)}
          value={reason}
        />
        <button onClick={accept}>Accept</button>
        <button onClick={decline}>Decline</button>
      </form>
    </div>
  );
};

export default EditPending;
