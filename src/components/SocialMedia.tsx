import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTwitter,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";
type Props = {};
interface SocialMedia {
  url: string;
  icon: JSX.Element;
}
export default function SocialMedia({}: Props) {
  const socialMedia = [
    {
      url: "https://github.com/rasitcolakel",
      icon: <FaGithub />,
    },
    {
      url: "https://twitter.com/rasitcolakel",
      icon: <FaTwitter />,
    },
    {
      url: "https://linkedin.com/in/rasitcolakel/",
      icon: <FaLinkedin />,
    },

    {
      url: "https://rasitcolakel.medium.com/",
      icon: <FaMedium />,
    },
    {
      url: "mailto:rasitcolakel@hotmail.com",
      icon: <FaEnvelope />,
    },
  ] as SocialMedia[];

  return (
    <div className="flex justify-center flex-row items-center">
      {socialMedia.map((item: SocialMedia, key) => (
        <a
          key={key}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="text-2xl cursor-pointer p-2 text-color"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
