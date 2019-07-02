import React from "react";

import { AuthProvider } from "./hooks/authContext";
import { UserProvider } from "./hooks/userContext";
import { TimeSheetProvider } from "./hooks/timeSheetContext";

export const AppProviders = ({ children }) => (
  <AuthProvider>
    <UserProvider>
      <TimeSheetProvider>{children}</TimeSheetProvider>
    </UserProvider>
  </AuthProvider>
);

export default AppProviders;
