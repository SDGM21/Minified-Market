import { createContext, ReactNode } from "react";

export type userAuthTypes = {
  state?: boolean;
  dispatch?: any;
};

export const userAuthContext = createContext<userAuthTypes>({});

export const AuthProvider = ({
  children,
  state,
  dispatch,
}: {
  children: ReactNode;
  state: boolean;
  dispatch: any;
}) => {
  return (
    <userAuthContext.Provider value={{ state, dispatch }}>
      {children}
    </userAuthContext.Provider>
  );
};
