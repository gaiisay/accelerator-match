import { ThemeProvider } from "next-themes";
import { Seo } from "../components/Seo";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="dark:bg-bgDarkMode text-lightMode dark:text-darkMode">
      <Seo />
      <ThemeProvider attribute="class" enableSystem={true}>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
