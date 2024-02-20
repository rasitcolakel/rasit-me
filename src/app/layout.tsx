import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layouts/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Rasit Colakel - Software Engineer",
  description:
    "I am an enthusiastic web and mobile developer. I like coding and developing new projects for startups, and I enjoy learning new technologies to improve my skills. I also have passion for learning different languages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans bg-body", fontSans.variable)}>
        {/* container for the whole app */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
