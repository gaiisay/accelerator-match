import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <title>AcceleratorMatch</title>
        <meta
          name="description"
          content="What is Acceleratormatch ? Acceleratormatch is accelerator applications, on auto-pilot. One sign up, all accelerators. We aim to be the next large scouting tool for accelerators. Here is where you get on their radar. Sign up for free and increase your application chances now!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
