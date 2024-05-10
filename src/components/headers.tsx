  import React from "react";
  import { TPath } from "../types/typeChildrenPage";

  const Headers = ({ path }: TPath): React.JSX.Element => {
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
      <div className="flex justify-between items-center dark:text-orange-600">
        <div>
          <p className="font-semibold">{path}</p>
        </div>

        <div className="flex items-center">
          <button className=" me-6 dark:text-white" onClick={handleThemeSwitch}>
            {theme === "dark" ? (
              <i className="fa-solid fa-moon text-gray-400 dark:text-orange-400"></i>
            ) : (
              <i className="fa-solid fa-sun text-gray-400 dark:text-orange-400"></i>
            )}
          </button>

          <button className="me-6 text-gray-400 dark:text-orange-400">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="me-8 text-gray-400 dark:text-orange-400">
            <i className="fa-solid fa-bell"></i>
          </button>

          <hr className="border-l border-gray-400 h-6 me-8 dark:border-orange-400" />

          <p className="me-4">Jhon Doe</p>

          <div className="h-12 w-12 rounded-full p-1 border border-gray-600 dark:border-orange-300">
            <img
              className="w-full h-full object-cover rounded-full"
              src="https://www.daya.id/01%20Tips%20-%20Info%20Terkini/Kesehatan/2022/2022-03/10%20Penyebab%20Seseorang%20Mudah%20Marah%20dan%20Tersinggung/shutterstock_746397118.jpg"
              alt="img-user"
            />
          </div>
        </div>
      </div>
    );
  };

  export default Headers;
