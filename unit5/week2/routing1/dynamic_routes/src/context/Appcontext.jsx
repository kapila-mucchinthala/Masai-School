import { createContext } from "react";
import {data} from "../db.json"

const AppContext = createContext();

const AppContextProvider = ({children})=> {
    return <AppContext.Provider value = {{data}}>{children}</AppContext.Provider>
};

export {AppContext,AppContextProvider}