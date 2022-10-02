import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { userAuthContext } from "../context/userAuthContext";
import Home from "../pages/Home";

const AppRoutes: () => JSX.Element = () => {
  const { state } = useContext(userAuthContext);

  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            state ? <Navigate to={"/home"} /> : <Navigate to={"/login"} />
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/cualquiercosa" />
      </Routes>
    </>
  );
};

export default AppRoutes;
