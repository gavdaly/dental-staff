import React, { useState, useEffect } from "react";

import client from "../utils/apiClient";
import { closestIndexTo } from "date-fns";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await client("GET", "https://");
      setUsers(data);
    })();
  }, []);

  return <>{users.map(user => JSON.parse(user))}</>;
}
