import LoginCard from "../components/LoginCard";
import { Button } from "reactstrap";
import { useContext, useEffect, useReducer, useState } from "react";
import authReducer from "../reducers/authReducer";
import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { auth, GitProvider } from "../firebase/init";
import { userAuthContext } from "../context/userAuthContext";

const Login = () => {
  const { state, dispatch } = useContext(userAuthContext);

  const getData = () => {
    getRedirectResult(auth).then(
      (data) => {
        dispatch(data);
      },
      () => {
        console.error("ERR-FILL-PROMISE");
      }
    );
  };

  return (
    <>
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h2>
            Seleccione Proveedor para <strong>Ingresar</strong>
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <Button
            outline
            onClick={() => {
              console.log(state);
            }}
          >
            <LoginCard />
          </Button>
          <Button onClick={() => {}}>
            <LoginCard />
          </Button>
          <Button onClick={() => {}}>
            <LoginCard />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
