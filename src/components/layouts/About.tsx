import React, { memo } from "react";
import { ExtractedEducation } from "src/models";
import { MdWork, MdSchool } from "react-icons/md";
type Props = {
  educations: ExtractedEducation[];
  experiences: ExtractedEducation[];
};

function About(props: Props) {
  return (
    <div>
      <h1 className="text-3xl text-color font-bold">About Me</h1>
      <p className="text-color  my-4">
        I am an enthusiastic web and mobile developer. I like coding and
        developing new projects for startups, and I enjoy learning new
        technoloqies to improve my skills. I also have passion for learning
        different languages.
      </p>
      <hr className="my-4 opacity-30" />
      <h2 className="text-2xl text-color font-bold flex items-center">
        <MdSchool className="text-color text-4xl mr-2" />
        <span>Education</span>
      </h2>

      <div className="my-4">
        {props.educations.map((e) => (
          <div key={e.id} className="text-color mb-2">
            <h1 className="text-xl text-color font-bold mb-2">{e.title}</h1>
            <span className="text-color ml-2">{e.description}</span>
          </div>
        ))}
      </div>
      <hr className="my-4 opacity-30" />
      <h2 className="text-2xl text-color font-bold flex items-center">
        <MdWork className="text-color text-4xl mr-2" />
        <span>Work Experience</span>
      </h2>
      <div className="my-4">
        {props.experiences.map((e) => (
          <div key={e.id} className="text-color mb-2">
            <h1 className="text-xl text-color font-bold mb-2">{e.title}</h1>
            <span className="text-color ml-2">{e.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default memo(About);
