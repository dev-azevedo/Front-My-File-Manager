import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { IUser } from "./typeContext";
import { api, useApi } from "../hooks/useApi";

const AppProvider = ({ children }: { children: JSX.Element }) => {
  const apiHook = useApi();

  const [user, setUser] = useState<IUser | null>({} as IUser);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    find();
  }, []);

  const find = async () => {
    const userToken = localStorage.getItem("@myFileManager");

    if (!userToken) {
      setToken("");
      return setUser(null);
    }

    setToken(userToken);

    api.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${userToken}`;
        return config;
      },
      (error) => {
        console.error(error);
      }
    );

    try {
      const user = await apiHook.validate();
      return setUser(user);
    } catch (err) {
      console.error(err);
    }
  };

  const signIn = async (email: string, password: string) => { 
    const { id, name, profile, token } = await apiHook.signIn(email, password);

    if (id && token) {
      setUser({ id, name, email, profile });
      setTokenLocalStorage(token);
      return true;
    }

    return false;
  };

  const logout = (): void => {
    setUser(null);
    setToken("");
    localStorage.removeItem("@myFileManager");
    return;
  };

  const setTokenLocalStorage = (token: string) => {
    setToken(token);
    localStorage.setItem("@myFileManager", token);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        token,
        validateToken: !!token,
        signIn,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
