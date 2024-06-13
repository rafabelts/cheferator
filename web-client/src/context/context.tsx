"use client";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type AppContextType = {
  recipes: Array<string>;
  updateRecipes: (newRecipes: Array<string>) => void;
};

export const AppContext = createContext<AppContextType>(undefined);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [recipes, setRecipes] = useState<Array<string>>([]);

  const updateRecipes = (newRecipes: Array<string>) => {
    setRecipes(newRecipes);
  };

  return (
    <AppContext.Provider value={{ recipes, updateRecipes }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppData = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
