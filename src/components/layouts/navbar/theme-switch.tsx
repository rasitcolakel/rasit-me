"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import React from "react";
import { Moon, Sun } from "lucide-react";

type Props = {};

const ThemeSwitch = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Tabs defaultValue={"light"} value={theme}>
      <TabsList className="ml-auto">
        <TabsTrigger
          value="light"
          onClick={() => {
            setTheme("light");
          }}
        >
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
        <TabsTrigger
          value="dark"
          onClick={() => {
            setTheme("dark");
          }}
        >
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ThemeSwitch;
