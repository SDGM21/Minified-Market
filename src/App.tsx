import { useState } from "react";
import {
  userAuthTypes,
  AuthProvider,
  userAuthContext,
} from "./context/userAuthContext";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const [user, setUser] = useState(false);
  return (
    <>
      <AuthProvider state={user} dispatch={setUser}>
        {"HEADER"}
        <AppRoutes />
        {"FOOTER"}
      </AuthProvider>
    </>
  );
};

export default App;
