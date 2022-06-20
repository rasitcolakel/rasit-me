import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "src/context/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="page-container">
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
