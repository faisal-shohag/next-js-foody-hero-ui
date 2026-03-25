"use client";
import { Switch } from "@heroui/react";
import {
  Moon,
  Sun,
} from "@gravity-ui/icons";
import { useEffect, useState } from "react";
const ThemeSwitch = () => {
  const [theme, setTheme] = useState();
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
        document.querySelector("html").setAttribute("data-theme", localTheme);
        setTheme(localTheme);
    } else {
        document.querySelector("html").setAttribute("data-theme", "light");
        setTheme("light");
    }
  }, [])

  const handleThemeChange = () => {
    if (theme === "light") {
      document.querySelector("html").setAttribute("data-theme", "dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <Switch size="lg" isSelected={theme == "dark"} onChange={handleThemeChange}>
      <Switch.Control className="bg-[#ff8933] dark:bg-zinc-800">
        <Switch.Thumb className="dark:bg-zinc-700">
        <Switch.Icon>
            {
            theme ==="light"? <Sun className="size-3 text-inherit opacity-100"/> : <Moon className="size-3 dark:text-white text-inherit opacity-70"/>
          }
        </Switch.Icon>
        </Switch.Thumb>
      </Switch.Control>
      <Switch.Content></Switch.Content>
    </Switch>
  );
};

export default ThemeSwitch;
