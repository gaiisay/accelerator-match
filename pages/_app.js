import { Seo } from "../components/Seo";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Seo />
      <Component {...pageProps} />
    </main>
  );
}
