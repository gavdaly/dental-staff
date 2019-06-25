import React, {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect
} from "react";

import client from "../utils/apiClient";

const AuthContext = createContext();

async function getSignIn(phone_number, access_pin) {
  return await client("POST", "/sign_in", {
    body: { phone_number, access_pin }
  });
}

async function getPin(phone_number) {
  return await client("POST", "/get_pin", {
    body: { phone_number }
  });
}

const authType = {
  SUBMIT_PHONE: "SUBMIT_PHONE",
  RESPONSE_PHONE: "RESPONSE_PHONE",
  SUBMIT_CREDENTIALS: "SUBMIT_CREDENTIALS",
  RESPONSE_CREDENTIALS: "RESPONSE_CREDENTIALS",
  RESET: "RESET"
};

function reducer(state, action) {
  switch (action.type) {
    case authType.SUBMIT_PHONE:
      return {
        ...state,
        step: "processingPhone",
        phoneNumber: action.payload
      };
    case authType.RESPONSE_PHONE:
      return action.payload;
    case authType.SUBMIT_CREDENTIALS:
      return { ...state, step: "processingAuth", pin: action.payload };
    case authType.RESPONSE_CREDENTIALS:
      return action.payload;
    case authType.RESET:
      return { ...initialState, ...action.payload };
    default:
      throw new Error();
  }
}

const initialState = {
  phoneNumber: "",
  pin: "",
  error: "",
  step: "inputPhoneNumber",
  jwt: ""
};

function AuthProvider(props) {
  const [loginState, loginDispatch] = useReducer(reducer, initialState);
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    if (loginState.step === "processingPhone") {
      (async () => {
        const phoneResponse = await getPin(loginState.phoneNumber);
        if (phoneResponse.ok) {
          loginDispatch({
            type: authType.RESPONSE_PHONE,
            payload: { ...loginState, step: "inputPin", error: "" }
          });
          return;
        }
        loginDispatch({
          type: authType.RESPONSE_PHONE,
          payload: {
            ...initialState,
            error: "Error incorrect Phone, Try again!"
          }
        });
      })();
    }

    if (loginState.step === "processingAuth") {
      (async () => {
        const pinResponse = await getSignIn(
          loginState.phoneNumber,
          loginState.pin
        );
        if (pinResponse.token) {
          setJwt(pinResponse.token);
          loginDispatch({
            type: authType.RESPONSE_CREDENTIALS,
            payload: {
              ...initialState,
              jwt: pinResponse.token,
              step: "authenticated"
            }
          });
          return;
        }
        loginDispatch({
          type: authType.RESPONSE_CREDENTIALS,
          payload: {
            ...loginState,
            step: "inputPin",
            pin: "",
            errors: "Incorrect Pin, Try again!"
          }
        });
      })();
    }
  }, [loginState, loginDispatch]);

  const logout = () => {
    loginDispatch({ type: authType.RESET });
  };

  return (
    <AuthContext.Provider
      value={{ authType, loginState, loginDispatch, logout, jwt }}
      {...props}
    />
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
