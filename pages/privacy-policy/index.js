import Navbar from "../../components/ui/standard/Navbar";
import Footer from "../../components/ui/standard/Footer";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";

export default function Privacy() {

const [content, setContent] = useState("");

  useEffect(() => {
    fetch("privacyPolicy.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <>
      <Navbar />
      <div className="ml-20 mr-48 text-gray-700 dark:text-gray-200 flex flex-col gap-4 [&>ol]:list-decimal [&>ol]:ml-10 [&>h2]:text-4xl [&>p>strong]:text-lg">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </>
  );
}
