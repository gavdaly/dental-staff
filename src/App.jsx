import React, { lazy, Suspense } from "react";

import { useAuth } from "./hooks/authContext";

import "./Global.css";

const AuthenticatedApp = lazy(() => import("./AuthenticatedApp"));
const LogIn = lazy(() => import("./LogIn"));

function App() {
  const { jwt } = useAuth();
  return (
    <Suspense fallback="Loading...">
      {jwt ? <AuthenticatedApp /> : <LogIn />}
    </Suspense>
  );
}

export default App;
