import { useState } from "react";
import {
  userAuthTypes,
  AuthProvider,
  userAuthContext,
} from "./context/userAuthContext";
import AppRoutes from "./routes/AppRoutes";
import { Header } from "./includes/header/Header";
import { Footer } from "./includes/footer/Footer";

const App = () => {
  const [user, setUser] = useState(false);
  return (
    <>
      <AuthProvider state={user} dispatch={setUser}>
        <Header/>
        <AppRoutes />
        <Footer/>
      </AuthProvider>
    </>
  );
};


export default App;
