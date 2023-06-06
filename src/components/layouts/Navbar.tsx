import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Context } from "src/context/app";

interface NavbarItem {
  name: string;
  link: string;
}

type Props = {};
function Navbar({}: Props) {
  const { state } = useContext(Context) as any;
  const router = useRouter();
  const { pathname } = router;

  const tabs: NavbarItem[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    // {
    //   name: "Projects",
    //   link: "/projects",
    // },
    {
      name: "Blog",
      link: "/blog",
    },
    // {
    //   name: "Contact",
    //   link: "/contact",
    // },
  ];
  const tabClasses = {
    active: "navbar-item-active",
    normal: "navbar-item",
  };
  return (
    <div className="navbar sticky w-full flex-col mt-2 flex items-center justify-between mb-4 md:flex-row md:mt-0">
      <Link href="/">
        <a className="text-color font-bold text-xl">RASIT COLAKEL</a>
      </Link>
      <ul className="flex flex-wrap -mb-px">
        {tabs.map((tab, index) => (
          <Link href={tab.link} key={index}>
            <a
              className={
                tab.link === pathname ? tabClasses.active : tabClasses.normal
              }
            >
              {tab.name}
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
