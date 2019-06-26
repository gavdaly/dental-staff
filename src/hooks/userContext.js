import React, { createContext, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

// import client from "../utils/apiClient";

import { useAuth } from "./authContext";

const UserContext = createContext();

async function updateUserDetails(token_values, updateUser) {
  // const details = client(); Get more info in the future
  updateUser(token_values);
}

const UserProvider = props => {
  const [currentUser, setCurrentUser] = useState(null);
  const { jwt } = useAuth();

  useEffect(() => {
    if (jwt === "") {
      setCurrentUser({});
      return;
    }
    setCurrentUser(jwtDecode(jwt));
    updateUserDetails(jwtDecode(jwt), setCurrentUser);
  }, [jwt]);

  function updateDetails() {
    updateUserDetails(jwtDecode(jwt), setCurrentUser);
  }

  return (
    <UserContext.Provider
      value={{ currentUser, jwt, updateDetails }}
      {...props}
    />
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
