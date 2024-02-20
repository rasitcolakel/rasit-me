import Navbar from "@/components/layouts/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Github, Twitter, Rss } from "lucide-react";

const socials = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/rasitcolakel/",
    icon: Linkedin,
  },
  {
    name: "github",
    url: "",
    icon: Github,
  },
  {
    name: "twitter",
    url: "https://twitter.com/rasitcolakel",
    icon: Twitter,
  },
  {
    name: "medium",
    url: "https://rasitcolakel.medium.com/",
    icon: Rss,
  },
];

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Navbar />
      <div className="flex items-center space-x-4 flex-1 w-auto flex-col gap-4 h-full flex-grow justify-center">
        <Avatar className="w-48 h-48 border-2 border-gray-200  dark:border-gray-800 md:w-60 md:h-60">
          <AvatarImage src="./pp.jpg" />
          <AvatarFallback>RC</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold">Rasit Colakel</h1>
        <Separator />
        <h2>Software Engineer @Odeabank</h2>
        <div className="flex space-x-4">
          {socials.map((social) => (
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
              className="text-gray-600 dark:text-gray-400"
            >
              <social.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
