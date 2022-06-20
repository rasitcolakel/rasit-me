import React, { memo } from "react";
import { Education } from "src/models";

type Props = {
  educations: Education[];
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
      <h2 className="text-2xl text-color font-bold">Education </h2>
      <ul className="my-4">
        {props.educations.map((e) => (
          <li key={e.id} className="text-color">
            {e.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default memo(About);
