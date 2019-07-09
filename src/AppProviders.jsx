import React from "react";

import { AuthProvider } from "./hooks/authContext";
import { UserProvider } from "./hooks/userContext";

export const AppProviders = ({ children }) => (
  <AuthProvider>
    <UserProvider>{children}</UserProvider>
  </AuthProvider>
);

export default AppProviders;
