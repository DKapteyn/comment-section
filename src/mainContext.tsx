import { initT, mainObjT } from "./types";
import { useState, createContext, useEffect } from "react";

const MainContext = createContext({} as mainObjT);

function MainContextProvider({ children }: any) {
  const [init, setInit] = useState<initT>({} as initT);

  useEffect(() => {
    async function initialStateFetch() {
      let response = await fetch("data.json");
      let data = await response.json();
      setInit(data);
    }
    initialStateFetch();
  }, []);

  return (
    <MainContext.Provider value={{ init, setInit }}>
      {children}
    </MainContext.Provider>
  );
}

export { MainContext, MainContextProvider };
