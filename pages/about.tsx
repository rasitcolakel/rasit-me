import About from "@/components/layouts/About";
import Navbar from "@/components/layouts/Navbar";
import { getEducationInformation } from "@/utils/queries";
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { Context } from "src/context/app";
import { Education, ExtractedEducation } from "src/models";
interface Props {
  educations: ExtractedEducation[];
  experiences: ExtractedEducation[];
}
const AboutPage: NextPage<Props> = ({ educations, experiences }) => {
  const { dispatch } = useContext(Context) as any;
  useEffect(() => {
    dispatch({ type: "SET_EDUCATIONS", educations });
    dispatch({ type: "SET_EXPERIENCES", experiences });
  }, [dispatch, educations, experiences]);

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
        <div className="flex flex-col grow items-center  px-4">
          <About educations={educations} experiences={experiences} />
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const maxAge: number = process.env.NODE_ENV === "production" ? 60 : 2;
  const { res } = ctx;
  res.setHeader(
    "Cache-Control",
    `public, s-maxage=${maxAge}, stale-while-revalidate=${maxAge * 2}`
  );
  let educationsAndExperiences =
    (await getEducationInformation()) as ExtractedEducation[];
  const educations = educationsAndExperiences.filter(
    (education: ExtractedEducation) => education.type === "education"
  );
  const experiences = educationsAndExperiences.filter(
    (education: ExtractedEducation) => education.type === "experience"
  );
  return {
    props: {
      educations,
      experiences,
      revalidate: true,
    },
  };
};

export default AboutPage;
