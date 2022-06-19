import React, { memo, useContext } from "react";
import { Context } from "src/context/app";
import { BlogPost } from "src/models/BlogPost";
import Blog from "./Blog";

type Props = {};

function Contents({}: Props) {
  const { state } = useContext(Context) as any;
  const { activeTab } = state;
  const tabContents = [
    {
      title: "About",
      content: <></>,
    },
    {
      title: "Projects",
      content: <></>,
    },
    {
      title: "Blog",
      content: <Blog />,
    },
    {
      title: "Contact",
      content: <></>,
    },
  ];

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 pt-4">
      {tabContents[activeTab].content}
    </div>
  );
}

export default memo(Contents);
