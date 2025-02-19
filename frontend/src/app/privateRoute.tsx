import { useAuth, RedirectToSignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return children;
};

export default PrivateRoute;