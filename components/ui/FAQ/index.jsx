import { useRef, useState } from "react";
import SectionWrapper from "../../SectionWrapper";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="mt-5 space-y-3 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="flex items-center justify-between pb-5 text-lg font-medium cursor-pointer">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 text-lightMode dark:text-darkMode"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 text-lightMode dark:text-darkMode"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p>{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default () => {
  const faqsList = [
    {
      q: "I am a start up how does that work?",
      a: "By clicking on „Free Sign Up“ you will proceed to our typeform where we will ask you some basic information about your startup/idea. Once you have completed the form you will recieve a confirmation mail. Our in house analyst will then review your application and you will be listed in our exclusive data base. Accelerators can now see your profile and reach out to you once they see a fit.",
    },
    {
      q: "I am an accelerator how does that work?",
      a: "If you are an accelerator how is interested in using our data base for your scouting, please reach out to joav@acceleratormatch.com to schedule a short intro call.",
    },
    {
      q: "How come it's free, what's the catch?",
      a: "Yes Acceleratormatch is free, no subscription and no hidden fees. How does that work? We believe that early stage founder should not be the ones paying which would create inequality of opportunity. This is why we are asking accelerators for a monthly fee while using Acceleratormatch.",
    },
    {
      q: "Why should I sign up for this?",
      a: "Maybe you have tried to research some accelerators and applied to a few. Todays‘ accelerator landscape is broader and more complicated than ever before. As a founder you sign up with us once and recieve exposure to all our partner accelerators at once, thus increasing your application chances dramatically. All while you continue working on your empire.",
    },
    {
      q: "Who is behind Acceleratormatch?",
      a: "Hey there, my name is Joav and I am the maker of Acceleratormatch. I really hope that you like it and would love to get to know you. Feel free to drop me a message via joav@acceleratormatch.com or connect with me via LinkedIn.",
    },
  ];

  return (
    <SectionWrapper>
      <div className="space-y-3 text-center" id="faqs">
        <h1 className="text-3xl font-extrabold sm:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="max-w-lg mx-auto text-lg ">
          Everything you need to know. Can’t find the answer you’re looking for?
          Feel free to{" "}
          <a
            className="font-semibold duration-150 text-logo hover:text-blue-400 whitespace-nowrap"
            href="mailto:joav@acceleratormatch.com"
          >
            contact us
          </a>
          .
        </p>
      </div>
      <div className="mx-4 mt-14">
        {faqsList.map((item, idx) => (
          <div key={idx}>
            <FaqsCard idx={idx} faqsList={item} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
