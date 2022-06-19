import Blog from "@/components/layouts/Blog";
import Navbar from "@/components/layouts/Navbar";
import SocialMedia from "@/components/SocialMedia";
import { getBlogPosts, getEducationInformation } from "@/utils/queries";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { Context } from "src/context/app";
import { Education, Post } from "src/models";
interface Props {
  posts: Post[];
}
const Home: NextPage<Props> = ({ posts }) => {
  const { dispatch } = useContext(Context) as any;
  useEffect(() => {
    dispatch({ type: "SET_POSTS", posts });
  }, [dispatch, posts]);

  return (
    <>
      <Head>
        <title>
          {`Rasit Colakel's latest posts - Software Engineer - rasit.me`}
        </title>
        <meta
          name="description"
          content="I am an enthusiastic web and mobile developer. I like coding and developing new projects for startups, and I enjoy learning new technoloqies to improve my skills. I also have passion for learning different languages"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center flex-col items-center w-full">
        <Navbar />
        <div className="w-full md:w-3/4 lg:w-1/3 pt-4 px-2">
          <h1 className="align-left text-color text-2xl py-2 self-start font-bold">
            Latest Posts
          </h1>
          <Blog />
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export async function getServerSideProps(req: any, res: any) {
  let posts = (await getBlogPosts()) as Post[];

  return {
    props: {
      posts,
    },
  };
}

export default Home;
