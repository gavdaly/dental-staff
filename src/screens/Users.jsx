import React, { useState, useEffect } from "react";

import client from "../utils/apiClient";

import AdminDisplayUser from "../components/AdminDisplayUser";

import AdminCreateUser from "../components/AdminCreateUser";

export function Users() {
  const [users, setUsers] = useState([]);
  const [showCreateUser, setShowCreateUser] = useState(false);

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

  const createUser = async user => {
    const response = await client("POST", `/admin/users/`, {
      body: { user: user }
    });
    setShowCreateUser(false);
    setUsers([...users, response]);
  };

  return (
    <>
      {users.map(user => (
        <AdminDisplayUser key={user.id} user={user} updateUser={updateUser} />
      ))}
      <button onClick={() => setShowCreateUser(!showCreateUser)}>
        {!showCreateUser ? "Add User" : "Cancel"}
      </button>
      {showCreateUser && <AdminCreateUser createUser={createUser} />}
    </>
  );
}

export default Users;
