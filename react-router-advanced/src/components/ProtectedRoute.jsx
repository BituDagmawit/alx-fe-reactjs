import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = true; // simulate auth

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}
