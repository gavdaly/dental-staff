import React, { useState, useEffect } from "react";

export const Entries = ({ entries }) => (
  <div className="entires">
    {entries.map(day => (
      <DayEntry dayEntry={day} />
    ))}
  </div>
);

export const DayEntry = ({ dayEntry, day }) => (
  <div className="date_entry">
    <div className="entry_date">{day}</div>
    <div>
      {dayEntry.map(entry => (
        <Entry key={entry.id} entry={entry} />
      ))}
    </div>
  </div>
);

const CorrectingEntry = ({ setIsCorrecting }) => {
  const [formState, setFormState] = useState("invalid");
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [reason, setReason] = useState("");

  function resetFields() {
    setFormState("invalid");
    setStartTime(0);
    setEndTime(0);
    setReason("");
  }

  function submit(event) {
    event.preventDefault();
    setFormState("submitting");
    // submitCorrectingEntry({ startTime, endTime, reason });
  }

  useEffect(() => {
    (async () => {
      // const isValid = await validate({ startTime, endTime, reason });
      if (true) setFormState("valid");
    })();
  }, [startTime, endTime, reason]);

  function cancel(event) {
    event.preventDefault();
    setIsCorrecting(false);
    resetFields();
  }

  return (
    <>
      <div className="timeGroup">
        <input type="time" />
        <input type="time" />
      </div>
      <textarea />
      <button className={formState} onClick={submit}>
        submit
      </button>
      <button onClick={cancel}>cancel</button>
    </>
  );
};

const EditableEntry = ({ entry }) => {
  const [isCorrecting, setIsCorrecting] = useState(false);
  return (
    <div className="entry time state_editable">
      <div className="timeGroup">
        <div className="time_start">
          Start: <span>8:00am</span>
        </div>
        <div className="time_end">
          End: <span>5:00pm</span>
        </div>
      </div>

      {isCorrecting && <CorrectingEntry setIsCorrecting={setIsCorrecting} />}
      <div className="state editable" onClick={() => setIsCorrecting(true)}>
        Edit
      </div>
    </div>
  );
};

const HoursEntry = ({ entry }) => {
  switch (entry.state) {
    case "pending":
      const correction = {};
      return (
        <div className="entry time state_pending">
          <div className="correction">
            <div className="correction_reason">{correction.reason}</div>
            <div className="time_group">
              <div className="original_start">
                Original Start: <span>9:00am</span>
              </div>
              <div className="original_end">
                Original End: <span>5:00pm</span>
              </div>
            </div>
            <div className="time_group">
              <div className="requested_start">
                Requested Start: <span>8:00am</span>
              </div>
              <div className="requested_end">
                Requested End: <span>5:00pm</span>
              </div>
            </div>
          </div>
          <div className="state">{entry.state}</div>
        </div>
      );
    case "finalized":
      return (
        <div className="entry time state_finalized">
          <div className="time_group">
            <div className="time_start">
              Start: <span>8:00am</span>
            </div>
            <div className="time_end">
              End: <span>5:00pm</span>
            </div>
          </div>

          <div className="state">Finalized</div>
        </div>
      );
    case "editable":
      return <EditableEntry entry={entry} />;
    case "accepted":
      return (
        <div className="entry time state_accepted">
          <div className="time_start">
            Start: <span>8:00am</span>
          </div>
          <div className="time_end">
            End: <span>5:00pm</span>
          </div>

          <div className="correction">
            <div className="correction_reason">{correction.reason}</div>
            <div className="original_start">
              Original Start: <span>9:00am</span>
            </div>
            <div className="original_end">
              Original End: <span>5:00pm</span>
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
            Start: <span>8:00am</span>
          </div>
          <div className="time_end">
            End: <span>5:00pm</span>
          </div>

          <div className="correction">
            <div className="correction_reason">{correction.reason}</div>
            <div className="requested_start">
              Requested Start: <span>{correction.startTime}</span>
            </div>
            <div className="requested_end">
              Requested End: <span>{correction.endTime}</span>
            </div>
            <div className="correction_explanation">OK!</div>
          </div>
          <div className="state">Rejected</div>
        </div>
      );
    default:
      new Error("incorrect hour entry state");
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

const AdjustmentEntry = ({ entry }) => (
  <div className="entry adjustment">
    <div className="duration">
      Hours Added: <span>{entry.duration}h</span>
    </div>
    <div className="reason">{entry.reason}</div>
  </div>
);

export const Entry = ({ entry }) => {
  switch (entry.type) {
    case "hours":
      return <HoursEntry entry={entry} />;
    case "vacation":
      return <VacationEntry entry={entry} />;
    case "adjustment":
      return <AdjustmentEntry entry={entry} />;
    default:
      new Error(`incorrect entry type: ${entry}`);
  }
};
