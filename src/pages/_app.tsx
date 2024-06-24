import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/fontAwesome.css";
import "../styles/style.css";
import "../scripts/layout.js";
import "@component/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
