import React from "react";
import { TTask } from "../types/typeTask";
import LabelTask from "./labelTask";

const ListTask = ({ title, label }: TTask): React.JSX.Element => {
  return (
    <div className="flex justify-between items-center h-full border-t px-6 py-4 text-md">
      <p className=" text-gray-600">{title}</p>

      <LabelTask name={label} />
    </div>
  );
};

export default ListTask;
