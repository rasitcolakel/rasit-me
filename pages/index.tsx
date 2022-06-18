import Contents from "@/components/layouts/Contents";
import Tabs from "@/components/layouts/Tabs";
import SocialMedia from "@/components/SocialMedia";
import { extractProperties } from "@/utils/propertyExtractor";
import { getBlogPosts } from "@/utils/queries";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useReducer } from "react";
import { BlogPost } from "src/models/BlogPost";
import { initial, reducer } from "src/reducers/app";
interface Props {
  posts: BlogPost[];
}
const Home: NextPage<Props> = ({ posts }) => {
  const [state, dispatch] = useReducer(reducer, initial);

  const changeTab = useCallback((tab: number) => {
    dispatch({ type: "SET_TAB", tab });
  }, []);

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
      <main className="flex justify-center flex-col items-center">
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
        <Tabs tab={state.tab} changeTab={changeTab} />
        <Contents tab={state.tab} posts={posts} />
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
      posts: results.map((post) => extractProperties(post.properties)),
    },
  };
}

export default Home;
