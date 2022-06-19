import Head from "next/head";
import Link from "next/link";
import { FaChevronLeft, FaUnlink } from "react-icons/fa";
import type { NextPage } from "next";

interface Props {}
const FourOhFour: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>Oopps! - rasit.me</title>
        <meta
          name="description"
          content="I am an enthusiastic web and mobile developer. I like coding and developing new projects for startups, and I enjoy learning new technoloqies to improve my skills. I also have passion for learning different languages"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center flex-col items-center">
        <FaUnlink className="text-[12rem] text-color my-12" />
        <h1 className="text-color">404 - Page Not Found</h1>
        <Link href="/">
          <a className="text-color pt-2 flex justify-center flex-row items-center hover:opacity-50">
            <FaChevronLeft className="mx-2" />
            <span>Go back home</span>
          </a>
        </Link>
      </main>
    </>
  );
};

export default FourOhFour;
