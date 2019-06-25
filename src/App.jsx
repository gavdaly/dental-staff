import React, { lazy } from "react";

import { useAuth } from "./hooks/authContext";

import "./Global.css";

// const AuthenticatedApp = lazy(() => import("./AuthenticatedApp"));
// const LogIn = lazy(() => import("./LogIn"));

import AuthenticatedApp from "./AuthenticatedApp";
import LogIn from "./LogIn";

function App() {
  // const { currentUser } = useUser();
  const { jwt } = useAuth();
  return <>{jwt ? <AuthenticatedApp /> : <LogIn />}</>;
}

export default App;
