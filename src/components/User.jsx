import React from "react";
import styled from "@emotion/styled";
import { navigate } from "@reach/router";

import { useAuth } from "../hooks/authContext";

export default function User() {
  const { logout } = useAuth();

  function onClick() {
    logout();
    navigate("/");
  }

  return <LogOutButton onClick={onClick}>logout</LogOutButton>;
}

const LogOutButton = styled.button`
  font-size: 1.61rem;
  padding: 0.3rem;
`;
