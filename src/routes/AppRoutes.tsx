import { getRedirectResult } from "firebase/auth";
import { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { userAuthContext } from "../context/userAuthContext";
import { auth } from "../firebase/init";
import Home from "../pages/Home";
import Login from "../pages/Login";

const AppRoutes = () => {
  const { state, dispatch } = useContext(userAuthContext);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
