import React, { memo } from "react";
import { Tag } from "src/models";

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
    className: `flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-blue-700 bg-blue-100 border border-blue-300`,
  },
  {
    name: "gray",
    className: `flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-gray-700 bg-gray-100 border border-gray-300`,
  },
  {
    name: "red",
    className: `flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-red-700 bg-red-100 border border-red-300`,
  },
  {
    name: "green",
    className: `flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-green-700 bg-green-100 border border-green-300`,
  },
  {
    name: "yellow",
    className: `flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-yellow-700 bg-yellow-100 border border-yellow-300`,
  },
  {
    name: "indigo",
    className: `flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-indigo-700 bg-indigo-100 border border-indigo-300`,
  },
  {
    name: "purple",
    className: `flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-purple-700 bg-purple-100 border border-purple-300`,
  },
  {
    name: "pink",
    className: `flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-pink-700 bg-pink-100 border border-pink-300`,
  },
];
const Tag = ({ tag }: Props) => {
  let className = ClassNames.find((c) => c.name === tag.color)?.className;
  if (!className)
    className =
      ClassNames[Math.floor(Math.random() * ClassNames.length)].className;
  console.log(className);
  return (
    <div className={className}>
      <div className="text-xs font-normal leading-none max-w-full flex-initial">
        {tag.name}
      </div>
    </div>
  );
};
export default memo(Tag);
