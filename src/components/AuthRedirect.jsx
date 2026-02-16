import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const AuthRedirect = ({ children }) => {
  // const token = localStorage.getItem("token");
  const {user} = useContext(AuthContext)

  if (user?.token) {
    return <Navigate to="/profile"/>;
  }

  return children;
};

export default AuthRedirect;
