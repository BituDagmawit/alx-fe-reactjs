import { Navigate } from "react-router-dom";

// REQUIRED hook
const useAuth = () => {
  return { isAuthenticated: true }; // mock auth
};

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // REQUIRED useAuth

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}
