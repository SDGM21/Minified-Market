import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { userAuthContext } from "../context/userAuthContext";
import Home from "../pages/Home";

const AppRoutes = () => {
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
      </Routes>
    </>
  );
};

export default AppRoutes;
