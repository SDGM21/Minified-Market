import { createContext, ReactNode } from "react";

export type userAuthTypes = {
  state?: {} | null;
  dispatch?: any;
};

export const userAuthContext = createContext<userAuthTypes>({ state: null });

export const AuthProvider = ({
  children,
  state,
  dispatch,
}: {
  children: ReactNode;
  state?: {} | null;
  dispatch: any;
}) => {
  return (
    <userAuthContext.Provider value={{ state, dispatch }}>
      {children}
    </userAuthContext.Provider>
  );
};
