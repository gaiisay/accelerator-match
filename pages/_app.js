import { Seo } from "../components/Seo";
import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Seo />
      <Component {...pageProps} />
    </main>
  );
}
