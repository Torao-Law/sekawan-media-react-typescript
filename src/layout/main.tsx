import React from "react";
import Navbar from "../components/navbar";
import { TChildrenPages } from "../types/typeChildrenPage";

const Main = ({ children }: TChildrenPages): React.JSX.Element => {
  const [theme, setTheme] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="grid grid-cols-12 gap-6  bg-slate-50 overflow-y-auto">
      <button
        className="absolute bg-green-200 p-4 rounded-3xl dark:text-white"
        onClick={handleThemeSwitch}
        style={{ top: 15, right: 1500 }}
      >
        Dark Mode
      </button>

      <div className="w-56 fixed h-screen">
        <Navbar />
      </div>

      <div className="col-start-4 col-span-9 pt-8 pe-12 ml-[-55px]">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Main;
