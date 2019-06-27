import React from "react";
import styled from "@emotion/styled";
import { navigate } from "@reach/router";

import { useAuth } from "../hooks/authContext";
import { useUser } from "../hooks/userContext";

export default function User() {
  const { logout } = useAuth();
  const { currentUser } = useUser();
  function onClick() {
    logout();
    navigate("/", { replace: true });
  }
  return (
    <>
      <span>
        <LogOutButton onClick={onClick}>logout</LogOutButton>
      </span>
    </>
  );
}

const LogOutButton = styled.button`
  font-size: 1.61rem;
  padding: 0.3rem;
`;
