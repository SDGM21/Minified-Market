import React from "react";
import { auth, GitProvider } from "../firebase/init";

type authActionType = {
  type?: string;
  dispatch?: any;
};

const authReducer = (state: any, action: authActionType) => {
  switch (action.type) {
    case "GithubLogin":
      break;

    case "GoogleLogin":
      return { token: true };
    default:
      return state;
  }
};

export default authReducer;
