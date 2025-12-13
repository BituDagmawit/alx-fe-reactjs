import { Navigate, Outlet } from "react-router-dom";

export default function Protected() {
  const loggedIn = true; // simulate login
  return loggedIn ? <Outlet /> : <Navigate to="/" />;
}
