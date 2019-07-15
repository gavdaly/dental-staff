import React, { useEffect, useState } from "react";
import { client } from "../utils/apiClient";
import { useUser } from "../hooks/userContext";

export const UpcomingVacations = () => {
  const [data, setData] = useState({ vacations: [], users: [] });
  const [form, setForm] = useState({ reason: "" });
  const { currentUser } = useUser();
  useEffect(() => {
    (async () => {
      const result = await client("GET", "/staff/vacations", {});
      setData(result);
    })();
  }, []);

  async function accept(id) {
    const result = await client("PUT", `/admin/adjustments/${id}`, {
      body: { adjustment: { response: form.reason, state: "accepted" } }
    });
    return result;
  }

  async function decline(id) {
    const result = await client("PUT", `/admin/adjustments/${id}`, {
      body: { adjustment: { response: form.reason, state: "declined" } }
    });
    return result;
  }

  const user = user_id => data.users.find(current => current.id === user_id);
  const isAdmin = currentUser.role === "admin";

  return (
    <div>
      Upcoming Vacations
      {data.vacations.map(vacation => (
        <li key={vacation.id}>
          {user(vacation.user_id).last_name},{" "}
          {user(vacation.user_id).first_name} => {vacation.start_date} to{" "}
          {vacation.end_date} is {vacation.state}
          {isAdmin && vacation.state === "pending" && (
            <form>
              <div>
                <label htmlFor="response">Response</label>
                <textarea
                  name="response"
                  id="response"
                  cols="30"
                  rows="10"
                  onChange={event =>
                    setForm({ ...form, reason: event.target.value })
                  }
                />
              </div>
              <div>
                <button
                  onClick={event => {
                    event.preventDefault();
                    accept(vacation.id);
                  }}
                >
                  Accept
                </button>
                <button
                  onClick={event => {
                    event.preventDefault();
                    decline(vacation.id);
                  }}
                >
                  Decline
                </button>
              </div>
            </form>
          )}
        </li>
      ))}
    </div>
  );
};
