import SocialMedia from "@/components/SocialMedia";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="dark:bg-slate-900 h-screen w-full flex items-center justify-center">
      <Head>
        <title>Raşit Çolakel - Software Engineer</title>
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
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
