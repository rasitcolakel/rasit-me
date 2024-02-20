"use client";
import React from "react";
import ThemeSwitch from "@/components/layouts/navbar/theme-switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="px-3 flex justify-between items-center h-16 border-b border-gray-200  dark:border-gray-800 w-full md:px-0">
      <div className="flex items-center space-x-4 flex-1 w-full">
        <Avatar>
          <AvatarImage src="./pp.jpg" alt="@shadcn" />
          <AvatarFallback>RC</AvatarFallback>
        </Avatar>
        <h1>Rasit Colakel</h1>
      </div>
      <ThemeSwitch />
    </div>
  );
};

export default Navbar;
