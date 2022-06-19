import Link from "next/link";
import React, { memo, useContext } from "react";
import { FaEye } from "react-icons/fa";
import { Context } from "src/context/app";
import { ExtractedPost } from "src/models/BlogPost";
import Tag from "../Tag";

type Props = {};

function Blog({}: Props) {
  const { state } = useContext(Context) as any;
  const { posts } = state;
  return (
    <div className="grid grid-cols-1 divide-y w-full">
      {posts.map((post: ExtractedPost) => (
        <BlogItem key={post.id} post={post} />
      ))}
    </div>
  );
}

type BlogItemProps = {
  post: ExtractedPost;
};

const BlogItem = memo(function BlogItem({ post }: BlogItemProps) {
  return (
    <div className="w-full pb-2">
      <Link href={post.link}>
        <a
          className="text-color flex flex-col  justify-between cursor-pointer hover:opacity-90"
          target="_blank"
        >
          <div className="flex items-center">
            <span className="opacity-80 flex-1 my-4">{post.title}</span>
            <FaEye className="mx-2 text-xl " />
          </div>
        </a>
      </Link>{" "}
      <div className="grid grid-cols-4 gap-4 py-2">
        {post.tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
    </div>
  );
});

export default memo(Blog);
