import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const auth = localStorage.getItem("s-scribe-token");

  if (auth) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoutes;
