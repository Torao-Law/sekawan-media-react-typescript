import React from 'react'

type TLabel = {
  name: string;
}

const LabelTask = ({ name }: TLabel): React.JSX.Element => {
  const colorMap: Record<string, string> = {
    NEW: "bg-green-200 text-white",
    URGENT: "bg-yellow-500 text-white",
    DEFAULT: "bg-gray-200 text-gray-400",
  };

  const displayColor = (typeName: string): string => {
    return colorMap[typeName] || colorMap.default;
  };

  return <span className={`text-xs py-1 px-2 rounded-lg ${displayColor(name)}`}>{name}</span>;
}

export default LabelTask;
