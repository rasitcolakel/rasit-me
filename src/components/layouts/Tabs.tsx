import React from "react";

type Props = {
  tab: number;
  changeTab: (tab: number) => void;
};
function Tabs({ tab, changeTab }: Props) {
  const TabData: string[] = ["About", "Projects", "Blog", "Contact"];
  const tabClasses = {
    active:
      "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500",
    normal:
      "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",
  };
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        {TabData.map((name, index) => (
          <li className="" key={index}>
            <a
              href="#"
              className={index === tab ? tabClasses.active : tabClasses.normal}
              onClick={() => index !== tab && changeTab(index)}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tabs;