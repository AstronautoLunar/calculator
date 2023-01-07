// Modules
import { 
  createContext, 
  useContext, 
  useState,
  useCallback
} from "react";

// Utils
import ScreenApp from "../utils/ScreenApp";

type AppData = {
  app: {},
  history: {},
  config: {},
};

type AppContextProps = {
  appData: AppData,
}

const AppContext = createContext({} as AppContextProps);

type AppProviderProps = {
  children: JSX.Element | JSX.Element[];
}

export function AppProvider({ children }: AppProviderProps) {
  const [ appData, setAppData ] = useState({
    app: {},
    history: {},
    config: {}
  });

  return (
    <AppContext.Provider 
      value={{
        appData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  return useContext(AppContext);
}