// Modules
import { 
  createContext, 
  useContext, 
  useState,
  useCallback
} from "react";

// Utils
import ScreenApp from "../utils/ScreenApp";
import StringConverter from "../utils/StringConveter";

type AppContextProps = {
  app: {
    result: string;
    handleChangeResult: (value: string) => void;
    calculate: () => void;
    deleteOneLastLetter: () => void;
    deleteAll: () => void;
  };
  history: {};
  config: {};
}

const AppContext = createContext({} as AppContextProps);

type AppProviderProps = {
  children: JSX.Element | JSX.Element[];
}

export function AppProvider({ children }: AppProviderProps) {
  const [result, setResult] = useState("");

  // console.log(result);

  const handleChangeResult = useCallback((value: string) => {
    setResult(result + value);
  }, [result]);

  const calculate = useCallback(() => {
    const valueConverted = StringConverter.converterResult(result);

    setResult(eval(valueConverted));
  }, [result]);

  const deleteOneLastLetter = useCallback(() => {
    setResult(result.slice(0, result.length - 1))
  }, [result]);

  const deleteAll = useCallback(() => {
    setResult("")
  }, []);

  return (
    <AppContext.Provider 
      value={{
        app: {
          result,
          handleChangeResult,
          calculate,
          deleteOneLastLetter,
          deleteAll
        },
        history: {},
        config: {}
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  return useContext(AppContext);
}