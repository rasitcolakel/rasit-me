import React, { memo } from "react";
import { Tag } from "src/models/BlogPost";

type Props = {
  tag: Tag;
};
interface ClassName {
  name: string;
  className: string;
}
const ClassNames: ClassName[] = [
  {
    name: "blue",
    className:
      "text-center bg-blue-100/80 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200/80 dark:text-blue-800",
  },
  {
    name: "gray",
    className:
      "text-center bg-gray-100/80 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700/80 dark:text-gray-300",
  },
  {
    name: "red",
    className:
      "text-center bg-red-100/80 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200/80 dark:text-red-900",
  },
  {
    name: "green",
    className:
      "text-center bg-green-100/80 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200/80 dark:text-green-900",
  },
  {
    name: "yellow",
    className:
      "text-center bg-yellow-100/80 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200/80 dark:text-yellow-900",
  },
  {
    name: "indigo",
    className:
      "text-center bg-indigo-100/80 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200/80 dark:text-indigo-900",
  },
  {
    name: "purple",
    className:
      "text-center bg-purple-100/80 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200/80 dark:text-purple-900",
  },
  {
    name: "pink",
    className:
      "text-center bg-pink-100/80 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200/80 dark:text-pink-900",
  },
];
const Tag = ({ tag }: Props) => {
  let className = ClassNames.find((c) => c.name === tag.color)?.className;
  if (!className)
    className =
      ClassNames[Math.floor(Math.random() * ClassNames.length)].className;

  return <div className={className}>{tag.name}</div>;
};
export default memo(Tag);
