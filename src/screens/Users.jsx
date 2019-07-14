import React, { useState, useEffect } from "react";

import client from "../utils/apiClient";

import AdminDisplayUser from "../components/AdminDisplayUser";

export function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await client("GET", "/admin/users");
      setUsers(data);
    })();
  }, []);

  const updateUser = async user => {
    const response = await client("PUT", `/admin/users/${user.id}`, {
      body: { user: user }
    });
    const updatedUsers = users.map(currentUser => {
      if (currentUser.id === user.id) return user;
      return currentUser;
    });
    if (response.ok) setUsers(updatedUsers);
  };

  return (
    <>
      {users.map(user => (
        <AdminDisplayUser key={user.id} user={user} updateUser={updateUser} />
      ))}
      <button>Add User</button>
    </>
  );
}

export default Users;
