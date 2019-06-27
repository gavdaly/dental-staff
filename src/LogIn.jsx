import React, { useState, useEffect, useRef } from "react";
import PinPad from "./components/LogIn/PinPad";
import styled from "@emotion/styled";

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
  }, [loginState.step, payload, authType.SUBMIT_CREDENTIALS, loginDispatch]);

  const handlePhoneSubmit = event => {
    event.preventDefault();
    loginDispatch({ type: authType.SUBMIT_PHONE, payload });
    setPayload("");
  };

  return (
    <div>
      {loginState.step === "inputPhoneNumber" && (
        <form onSubmit={handlePhoneSubmit}>
          <Wrapper>
            <Input
              type="tel"
              id="phone"
              name="phone"
              required
              value={payload}
              onChange={event => setPayload(event.target.value)}
            />
            <Button>send pin</Button>
            <Errors className="errors">{loginState.error}</Errors>
          </Wrapper>
        </form>
      )}
      {loginState.step === "inputPin" && (
        <Wrapper>
          <PinPad
            contentEditable="true"
            onKeyPress={e => console.log(e.target.value)}
            numberOfPins={4}
            numberHighlighted={payload.length}
          />
          <Input
            ref={pinInput}
            type="password"
            pattern="[0-9]*"
            inputMode="numeric"
            value={payload}
            onChange={e => setPayload(e.target.value)}
          />
          <div className="errors">{loginState.error}</div>
        </Wrapper>
      )}
    </div>
  );
};

export default LogIn;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 1em;
  margin: 0 auto;
  max-width: 600px;
`;

const Input = styled.input`
  display: block;
  flex: 1;
  font-size: 30px;
  padding: 0.24em;
  margin-bottom: 0.44em;
  width: 100%;
`;

const Errors = styled.div`
  color: hsl(0, 80%, 79%);
`;

const Button = styled.button`
  display: block;
  font-size: 30px;
  margin-bottom: 0.44em;
  padding: 0.24em;
`;
