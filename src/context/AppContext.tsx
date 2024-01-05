import { createContext } from "react";
import { IAppDataContext } from "./typeContext";

export const AppContext = createContext<IAppDataContext>(null!);
