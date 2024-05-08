import React from 'react'

type TLabel = {
  name: string;
}

const LabelPriority = ({ name }: TLabel): React.JSX.Element => {
  const colorMap: Record<string, string> = {
    HIGH: "bg-red-500 text-white",
    NORMAL: "bg-green-500 text-white",
    LOW: "bg-yellow-500 text-white",
  };

  const displayColor = (typeName: string): string => {
    return colorMap[typeName];
  };

  return <span className={`text-xs py-1 px-4 rounded-xl ${displayColor(name)}`}>{name}</span>;
}

export default LabelPriority;
