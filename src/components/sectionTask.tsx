import React from "react";
import ListTask from "../elements/listTask";
import { TTask } from "../types/typeTask";

const SectionTask = ({ task }: any): React.JSX.Element => {
  return (
    <div className=" bg-white rounded border border-gray-300 dark:border-orange-300 dark:bg-gray-950">
      <div className="flex justify-between items-center p-6">
        <div>
          <p className="font-bold text-gray-600 dark:text-orange-600">Task</p>
          <p className="text-sm text-gray-400 dark:text-orange-400">Today</p>
        </div>

        <div>
          <p className="text-sm text-blue-600 dark:text-gray-600">View details</p>
        </div>
      </div>

      <div>
        <form className="flex justify-between items-center h-full px-6 pt-2 text-md">
          <input type="text" placeholder="Create new task" className="w-full p-2 mb-2 ps-0 me-4 outline-none dark:bg-gray-950 dark:text-orange-600 dark:placeholder:text-orange-400" />
          <button className="bg-gray-200 text-gray-400 px-2 rounded text-lg font-semibold dark:bg-orange-600 dark:text-gray-950">+</button>
        </form>
        <div>
          {task?.map((data: TTask, index: number) => (
            <ListTask title={data.title} label={data.label} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTask;
