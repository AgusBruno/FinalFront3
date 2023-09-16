import { createContext, useReducer } from "react";

export const Context = createContext(undefined);

const getThemeFromStorage = () => {
  const localTheme = localStorage.getItem("theme");
  return localTheme ? localTheme : [];
};

const setThemeInStorage = (theme) => {
  localStorage.setItem("theme", theme);
};

export const themeReducer = (state, action) => {
  let theme;
  switch (action.type) {
    case "CHANGE_THEME":
      if (state == "light") {
        theme = "dark";
        setThemeInStorage(theme);
        return theme;
      } else {
        theme = "light";
        setThemeInStorage(theme);
        return theme;
      }
    default:
      return state;
  }
};

export function ContextProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, [], getThemeFromStorage);

  const changeTheme = () =>
    dispatch({ type: "CHANGE_THEME", payload: getThemeFromStorage });

  return (
    <Context.Provider value={{ theme, changeTheme }}>
      {children}
    </Context.Provider>
  );
}
