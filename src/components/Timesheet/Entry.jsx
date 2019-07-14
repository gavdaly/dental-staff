import React, { useState } from "react";
import { format } from "date-fns";
import { EditPending } from "./EditPending";
import { CorrectingEntry } from "./CorrectingEntry";

export const Entries = ({ entries }) => (
  <div className="entires">
    {entries.map(day => (
      <DayEntry dayEntry={day} />
    ))}
  </div>
);

export const DayEntry = ({ dayEntry, day, editable = true }) => (
  <div className="date_entry">
    <div className="entry_date">{day}</div>
    <div>
      {dayEntry.map(entry => (
        <Entry key={entry.id} entry={entry} editable={editable} />
      ))}
    </div>
  </div>
);

const EditableEntry = ({ entry }) => {
  // const date = format(date.start_time, 'YYYY-MM-DD')
  const start = format(entry.start_time, "HH:mm");
  const end = format(entry.end_time, "HH:mm");

  const [isCorrecting, setIsCorrecting] = useState(false);

  return (
    <div className="entry time state_editable">
      <div className="timeGroup">
        <div className="time_start">
          <span>Start: </span>
          <span>{format(entry.start_time, "h:mm aa")}</span>
        </div>
        <div className="time_end">
          <span>End: </span>
          <span>{format(entry.end_time, "h:mm aa")}</span>
        </div>
      </div>

      {isCorrecting && (
        <CorrectingEntry
          start={start}
          end={end}
          setIsCorrecting={setIsCorrecting}
          id={entry.id}
        />
      )}
      <button className="state editable" onClick={() => setIsCorrecting(true)}>
        Edit
      </button>
    </div>
  );
};

const HoursEntry = ({ entry, editable }) => {
  const { correction } = entry;

  switch (entry.state) {
    case "pending":
      if (editable) {
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
                  <span>Original End: </span>
                  <span>{format(entry.end_time, "h:mm aa")}</span>
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
          </div>
        );
      } else {
        return <EditPending entry={entry} />;
      }

    case "finalized":
      return (
        <div className="entry time state_finalized">
          <div className="time_group">
            <div className="time_start">
              <span>Start: </span>
              <span>{format(entry.start_time, "h:mm aa")}</span>
            </div>
            <div className="time_end">
              <span>End: </span>
              <span>{format(entry.end_time, "h:mm aa")}</span>
            </div>
          </div>

          <div className="state">Finalized</div>
        </div>
      );
    case "editable":
      if (editable) {
        return <EditableEntry entry={entry} />;
      } else {
        return (
          <div className="entry time state_editable">
            <div className="timeGroup">
              <div className="time_start">
                <span>Start: </span>
                <span>{format(entry.start_time, "h:mm aa")}</span>
              </div>
              <div className="time_end">
                <span>End: </span>
                <span>{format(entry.end_time, "h:mm aa")}</span>
              </div>
            </div>
            <div className="state editable">Edit</div>
          </div>
        );
      }

    case "accepted":
      return (
        <div className="entry time state_accepted">
          <div className="time_start">
            <span>Start: </span>
            <span>{format(entry.start_time, "h:mm aa")}</span>
          </div>
          <div className="time_end">
            <span>End: </span>
            <span>{format(entry.end_time, "h:mm aa")}</span>
          </div>

          <div className="correction">
            <div className="correction_reason">{correction.reason}</div>
            <div className="original_start">
              <span>Original Start: </span>
              <span>{format(correction.original_start_time, "h:mm aa")}</span>
            </div>
            <div className="original_end">
              <span>Original End: </span>
              <span>{(correction.original_end_time, "h:mm aa")}</span>
            </div>
            <div className="correction_explanation">{correction.response}</div>
          </div>
          <div className="state">{entry.state}</div>
        </div>
      );
    case "rejected":
      return (
        <div className="entry time state_rejected">
          <div className="time_start">
            <span>Start: </span>
            <span>{format(entry.start_time, "h:mm aa")}</span>
          </div>
          <div className="time_end">
            <span>End: </span>
            <span>{format(entry.end_time, "h:mm aa")}</span>
          </div>

          <div className="correction">
            <div className="correction_reason">{correction.reason}</div>
            <div className="requested_start">
              <span>Requested Start: </span>
              <span>{format(correction.start_time, "h:mm aa")}</span>
            </div>
            <div className="requested_end">
              <span>Requested End: </span>
              <span>{format(correction.end_time, "h:mm aa")}</span>
            </div>
            <div className="correction_explanation">
              {correction.explanation}
            </div>
          </div>
          <div className="state">Rejected</div>
        </div>
      );
    case "active":
      return (
        <div className="entry time state_active">
          <div className="time_start">
            <span>Start: </span>
            <span>{format(entry.start_time, "h:mm aa")}</span>
          </div>
          <div className="state">{entry.state}</div>
        </div>
      );
    default:
      new Error("incorrect entry state");
  }
};

const VacationEntry = ({ entry }) => {
  if (entry.state === "canceled") {
    return (
      <div className="entry vacation vacation_canceled">
        <div className="state">Canceled</div>
      </div>
    );
  }
  return (
    <div className="entry vacation vacation_accepted">
      {entry.state !== "rejected" && (
        <div className="hours">Hours requested: {entry.duration}h</div>
      )}
      <div className="reason">{entry.comment}</div>
      {entry.response && <div className="response">Ok, Have a good time</div>}
      <div className="state">{entry.state}</div>
    </div>
  );
};

const AdjustmentEntry = ({ entry }) => {
  const classNames = `entry ${entry.category}`;
  return (
    <div className={classNames}>
      <div className="duration">
        <span>Hours Added: </span>
        <span>{entry.duration}h</span>
      </div>
      <div className="reason">{entry.reason}</div>
    </div>
  );
};

export const Entry = ({ entry, editable }) => {
  switch (entry.type) {
    case "hours":
      return <HoursEntry entry={entry} editable={editable} />;
    case "admin" || "vacation" || "statuatory":
      return <AdjustmentEntry entry={entry} />;
    default:
      new Error(`incorrect entry type: ${JSON.stringify(entry)}`);
  }
};
