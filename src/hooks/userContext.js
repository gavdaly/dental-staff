import React, { createContext, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

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
    setCurrentUser(jwtDecode(jwt));
  }, [jwt]);

  return <UserContext.Provider value={{ currentUser, jwt }} {...props} />;
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
