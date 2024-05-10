import React from "react";
import Navbar from "../components/navbar";
import { TChildrenPages } from "../types/typeChildrenPage";

const Main = ({ children }: TChildrenPages): React.JSX.Element => {
  return (
    <div className="grid grid-cols-12 gap-6  bg-slate-50 overflow-y-auto dark:bg-black">
      <div className="w-56 fixed h-screen">
        <Navbar />
      </div>

      <div className="col-start-4 col-span-9 pt-8 pe-12 ml-[-55px] ">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Main;
