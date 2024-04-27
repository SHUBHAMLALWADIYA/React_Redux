import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { THEME_CHANGE } from "../Redux/theme_redux/actionsItem";

function Theme() {
  const currentTheme = useSelector((state) => state.theme.theme);
  const [theme, setTheme] = useState(currentTheme);
  const dispatch = useDispatch();
  const toggleTheme = () => {
    const newTheme = theme === "light_theme" ? "dark_theme" : "light_theme";
    setTheme(newTheme);
    dispatch({ type: THEME_CHANGE, theme: newTheme });
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <button
        style={{
          borderRadius: "100%",
          padding: "3px",
          backgroundColor: theme === "light_theme" ? "black" : "white",
        }}
        onClick={toggleTheme}
      >
        {theme === "light_theme" ? "🌞" : "🌙"}
      </button>
    </div>
  );
}

export default Theme;
