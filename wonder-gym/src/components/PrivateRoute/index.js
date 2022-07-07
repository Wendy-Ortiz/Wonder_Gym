import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import _ from "lodash";
import jwtDecode from "jwt-decode";

export default function PrivateRoute({
  children,
  redirectPath = "/",
  allowedRoles,
}) {
  const userState = useSelector((state) => state.user);
  if (!userState.userIsLoggedIn) {
    console.log('No esta logeado pap ', userState.userIsLoggedIn);
    console.log('No esta logeado pap x2 ', userState.token);
    return <Navigate to={redirectPath} replace />;
  }
  try {
    const token = localStorage.getItem('token');
    console.log('token', token);
    const decryptedToken = jwtDecode(token);
    console.log('decrypted', decryptedToken);
    
    if (_.intersection(decryptedToken.roles, allowedRoles).length === 0) {
      console.log('NO AUTORIZO NO AUTORIZO NO AUTORIZO ')
      return <Navigate to={"/no-autorizado"} replace />;
    }    
  } catch (error) {
    //return <Navigate to={redirectPath} replace />;
    console.log(error);
    }
  return children || <Outlet />;
}