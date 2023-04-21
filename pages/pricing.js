import Head from "next/head";
import Pricing from "../components/ui/Pricing";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

export default function index() {
  return (
    <>
      <Head>
        <meta name="robots" content="index" />
        <title>Pricing - Split</title>
      </Head>
      <Navbar />
      <Pricing />
      <Footer />
    </>
  );
}
