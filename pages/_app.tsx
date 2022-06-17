import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="dark:bg-slate-900 h-screen w-full flex items-center justify-center">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
