import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { userAuthContext } from "../context/userAuthContext";
import Home from "../pages/Home";

const AppRoutes = () => {

    const {state} = useContext(userAuthContext)

  return (
    <>
      <Routes>
        <Route path="/*">
          {state ? <Navigate to={"/home"}/> : <Navigate to={""}/>}
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/:" />
      </Routes>
    </>
  );
};

export default AppRoutes;
