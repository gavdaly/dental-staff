import React, { useState, useEffect, useRef } from "react";
import PinPad from "./components/LogIn/PinPad";

import { useAuth } from "./hooks/authContext";

export const LogIn = () => {
  const { authType, loginState, loginDispatch } = useAuth();

  const [payload, setPayload] = useState("");

  const pinInput = useRef(null);

  useEffect(() => {
    if (payload.length === 4 && loginState.step === "inputPin") {
      loginDispatch({ type: authType.SUBMIT_CREDENTIALS, payload });
      setPayload("");
    }
  }, [loginState.step, payload]);

  useEffect(() => {
    console.log("LOGINSTATE: ", loginState);
  }, [loginState]);

  const handlePhoneSubmit = event => {
    event.preventDefault();
    loginDispatch({ type: authType.SUBMIT_PHONE, payload });
    setPayload("");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", fontSize: "1.76rem" }}
    >
      {loginState.step === "inputPhoneNumber" && (
        <form
          onSubmit={handlePhoneSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            type="number"
            value={payload}
            onChange={event => setPayload(event.target.value)}
          />
          <button>send pin</button>
          <div className="errors">{loginState.error}</div>
        </form>
      )}
      {loginState.step === "inputPin" && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <PinPad
            contentEditable="true"
            onKeyPress={e => console.log(e.target.value)}
            numberOfPins={4}
            numberHighlighted={payload.length}
          />
          <input
            ref={pinInput}
            type="password"
            pattern="[0-9]*"
            inputMode="numeric"
            value={payload}
            onChange={e => setPayload(e.target.value)}
          />
          <div className="errors">{loginState.error}</div>
        </div>
      )}
    </div>
  );
};

export default LogIn;
