import Navbar from "@/components/layouts/Navbar";
import SocialMedia from "@/components/SocialMedia";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

interface Props {}

const Home: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>Rasit Colakel - Software Engineer - rasit.me</title>
        <meta
          name="description"
          content="I am an enthusiastic web and mobile developer. I like coding and developing new projects for startups, and I enjoy learning new technoloqies to improve my skills. I also have passion for learning different languages"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center w-full h-full">
        <Navbar />
        <div className="flex flex-col grow items-center justify-center">
          <div className="h-56 w-56 relative p-2 shadow-xl rounded-full mt-2">
            <Image
              src="/pp.jpg"
              className="rounded-full p-1 bg-gray-200"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h1 className="text-2xl py-3 font-bold text-color">Rasit Colakel</h1>
          <h3 className="py-1 font-light text-color pb-2">Software Engineer</h3>
          <SocialMedia />
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
