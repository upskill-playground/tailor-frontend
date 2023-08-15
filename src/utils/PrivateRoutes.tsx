import { Outlet, Navigate } from "react-router-dom";
import { getWithExpiry } from "~/utils/localStorage";

const PrivateRoutes = () => {
  const auth = getWithExpiry("s-scribe-token");

  if (auth) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoutes;
