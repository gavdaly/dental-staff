import React, { lazy, Suspense } from "react";

import { useAuth } from "./hooks/authContext";

import "./Global.css";

// import { TimeSheetProvider } from "./hooks/timeSheetContext";

const AuthenticatedApp = lazy(() => import("./AuthenticatedApp"));
const LogIn = lazy(() => import("./LogIn"));

function App() {
  const { jwt } = useAuth();
  return (
    <Suspense fallback="Loading...">
      {jwt ? (
        // <TimeSheetProvider>
        <AuthenticatedApp />
      ) : (
        // </TimeSheetProvider>
        <LogIn />
      )}
    </Suspense>
  );
}

export default App;
