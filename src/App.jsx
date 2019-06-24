import React, { Suspense, lazy } from "react";

import useCurrentUser from "./hooks/useCurrentUser";
const AuthenticatedApp = lazy(() => "./AuthenticatedApp");
const LogIn = lazy(() => "./LogIn");

function App() {
  const currentUser = useCurrentUser();
  return (
    <Suspense fallback={<></>}>
      {currentUser ? <AuthenticatedApp /> : <LogIn />}
    </Suspense>
  );
}

export default App;
