import React, { createContext, useContext, useEffect, useState } from "react";

import client from "../utils/apiClient";

import { useAuth } from "./authContext";

const UserContext = createContext();

const UserProvider = props => {
  const [currentUser, setCurrentUser] = useState(null);
  const { jwt } = useAuth();

  useEffect(() => {
    if (jwt === "") {
      setCurrentUser({});
      return;
    }
    (async () => {
      const response = await client("GET", "/users", {});
      setCurrentUser(response.user);
    })();
  }, [jwt]);

  return <UserContext.Provider value={{ currentUser, jwt }} {...props} />;
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
