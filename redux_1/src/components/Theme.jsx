import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { THEME_CHANGE } from "../redux/theme_redux/action";

function Theme() {
  const [theme, setTheme] = useState(useSelector((state) => state.theme.theme));
  const dispatch = useDispatch();

  const handleTheme = () => {
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
          backgroundColor: theme === "light_theme" ? "black" : "white",
          borderRadius: "100%",
          padding: "3px",
        }}
        onClick={handleTheme}
      >
        {theme === "light_theme" ? "🌞" : "🌙"}
      </button>
    </div>
  );
}

export default Theme;
