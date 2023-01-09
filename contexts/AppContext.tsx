// Modules
import { 
  createContext, 
  useContext, 
  useState,
  useCallback
} from "react";

// Utils
import CalculateCore from "../utils/CalculateCore";

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

  const handleChangeResult = useCallback((value: string) => {
    const valueWithSpaces = CalculateCore.addSpace(value);

    if (!result.length) {
    }
    const resultFormatted = result.split(" ").map(groupChar => {
      groupChar.split("").map(char => {
        // if (CalculateCore.isHasOnePoint(char)) {
        //   return char === "." ? "" : char;
        // }
  
        return char;
      }).join("");
    }).join(" ");

    console.log(resultFormatted)

    setResult(resultFormatted + valueWithSpaces);
  }, [result]);

  const calculate = useCallback(() => {
    if (!result.length) return

    const valueConverted = CalculateCore.converterResult(result);

    try {
      const valueFinal = eval(valueConverted);
      
      setResult(valueFinal);
    } catch(error) {
      setResult(result);
    }

  }, [result]);

  const deleteOneLastLetter = useCallback(() => {
    const newValue = String(result ?? "");
    
    if (!newValue.length) return
    
    setResult(newValue.slice(0, newValue.length - 1))
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