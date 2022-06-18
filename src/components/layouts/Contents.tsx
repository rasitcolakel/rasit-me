import React, { memo } from "react";
import { BlogPost } from "src/models/BlogPost";

type Props = {
  tab: number;
  posts: BlogPost[];
};

function Contents({}: Props) {
  return <div>Contents</div>;
}

export default memo(Contents);
