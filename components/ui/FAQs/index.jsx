import SectionWrapper from "../../SectionWrapper";

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

const FAQs = () => (
  <SectionWrapper id="faqs">
    <div className="custom-screen text-gray-600">
      <div className="max-w-xl xl:mx-auto xl:text-center">
        <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-3">
          Everything you need to know. Can’t find the answer you’re looking for?
          Feel free to{" "}
          <a
            className="text-logo hover:text-blue-400 duration-150 font-semibold whitespace-nowrap"
            href="mailto:joav@acceleratormatch.com"
          >
            contact us
          </a>
          .
        </p>
      </div>
      <div className="mt-12">
        <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">
          {faqsList.map((item, idx) => (
            <li key={idx} className="space-y-3">
              <summary className="flex items-center justify-between font-semibold text-gray-700">
                {item.q}
              </summary>
              <p
                dangerouslySetInnerHTML={{ __html: item.a }}
                className="leading-relaxed"
              ></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default FAQs;
