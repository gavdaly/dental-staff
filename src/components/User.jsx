import React from "react";
import { useAuth } from "../hooks/authContext";
import { useUser } from "../hooks/userContext";

export default function User() {
  const { logout } = useAuth();
  const { currentUser } = useUser();

  return (
    <>
      <span>
        {currentUser.firstName && `Hi ${currentUser.firstName}, `}
        <button onClick={logout}>logout</button>
      </span>
    </>
  );
}
