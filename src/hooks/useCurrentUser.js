import { useState, useEffect } from "react";

export default function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // look in storage
    // return current user
    // else return null
    setCurrentUser({});
  }, []);

  return { currentUser };
}
