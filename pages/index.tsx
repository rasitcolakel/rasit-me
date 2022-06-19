import Contents from "@/components/layouts/Contents";
import Tabs from "@/components/layouts/Tabs";
import SocialMedia from "@/components/SocialMedia";
import { extractProperties } from "@/utils/propertyExtractor";
import { getBlogPosts } from "@/utils/queries";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { Context } from "src/context/app";
import { BlogPost } from "src/models/BlogPost";
interface Props {
  posts: BlogPost[];
}
const Home: NextPage<Props> = ({ posts }) => {
  const { dispatch } = useContext(Context) as any;

  useEffect(() => {
    dispatch({ type: "SET_POSTS", posts });
  }, [dispatch, posts]);
  return (
    <>
      <Head>
        <title>Raşit Çolakel - Software Engineer - rasit.me</title>
        <meta
          name="description"
          content="I am an enthusiastic web and mobile developer. I like coding and developing new projects for startups, and I enjoy learning new technoloqies to improve my skills. I also have passion for learning different languages"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center flex-col items-center w-full">
        <div className="h-56 w-56 relative p-2 shadow-xl rounded-full mt-2">
          <Image
            src="/pp.jpeg"
            className="rounded-full p-1 bg-gray-200"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-2xl py-3 font-bold text-color">Raşit Çolakel</h1>
        <h3 className="py-1 font-light text-color">Software Engineer</h3>
        <SocialMedia />
        <Tabs />
        <Contents />
      </main>
      <footer></footer>
    </>
  );
};

export async function getServerSideProps() {
  // Get the posts
  let results = (await getBlogPosts()) as BlogPost[];
  // Return the result
  return {
    props: {
      posts: results.map((post) => {
        return { ...extractProperties(post.properties), id: post.id };
      }),
    },
  };
}

export default Home;
