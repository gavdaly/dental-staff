import React, { useEffect, useState } from "react";
import { client } from "../utils/apiClient";

export const UpcomingVacations = () => {
  const [data, setData] = useState({ vacations: [], users: [] });

  useEffect(() => {
    (async () => {
      const result = await client("GET", "/staff/vacations", {});
      setData(result);
    })();
  }, []);

  const user = user_id => data.users.find(current => current.id === user_id);

  return (
    <div>
      Upcoming Vacations
      {data.vacations.map(vacation => (
        <li key={vacation.id}>
          {user(vacation.user_id).last_name},{" "}
          {user(vacation.user_id).first_name} => {vacation.start_date} to{" "}
          {vacation.end_date} is {vacation.state}
        </li>
      ))}
    </div>
  );
};
