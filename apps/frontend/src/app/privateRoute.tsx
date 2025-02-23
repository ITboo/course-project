import { useAuth, RedirectToSignIn } from "@clerk/clerk-react";
import { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }:PrivateRouteProps) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return children;
};

export default PrivateRoute;