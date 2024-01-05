import useAppContext from "../hooks/useAppContext";
import Login from "../views/Login";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { validateToken } = useAppContext();
  return validateToken ? children : <Login />;
};
