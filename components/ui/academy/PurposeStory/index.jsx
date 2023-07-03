import Image from "next/image";
import SectionWrapper from "../../../SectionWrapper";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Link from "next/link";
import Button from "../../Button";
import NavLink from "../../standard/NavLink";

const PurposeStory = () => (
  <SectionWrapper>
    <div className="custom-screen">
      <div className="flex flex-col gap-3">
        <h3 className="text-3xl font-extrabold sm:text-4xl">
          How to impress VCs (and anyone else) before you generate any revenue
        </h3>
        <p className="mt-2 italic text-gray-500">
          written by Manaén Yosef Stürenberg Herrera, Founder & CEO of mypurpose
          academy
        </p>
        <p className="mt-3 text-gray-500">
          Founding a startup is playing the business game on hard mode. As an
          early-stage startup you lack all things established businesses or
          businesses running a different model have. You lack time, money,
          people, a product, a clearly defined target audience you can sell to,
          appropriate channels to even address potential customers, a brand, and
          so on.
        </p>
        <p className="mt-3 text-gray-500">
          This tweet by Garry Tan, current President at YC sums it up very well:
        </p>
        <div className="self-center w-2/3">
          <TwitterTweetEmbed
            className="w-fit"
            tweetId={"1673014053160255489"}
          />
        </div>
        <p className="mt-3 text-gray-500">
          Now, how can you, a founder of an early stage startup who, by
          definition, has none of these even get a chance?{" "}
        </p>
        <p className="mt-3 text-gray-500">
          If you look at startupschool.org, YC's free programme and MOOC, you
          will get a hint at something many partners have said repeatedly: Until
          you have all things Garry mentions in his tweet, there is only one way
          to impress others – impress them with your achievements. If you are
          logged in into startupschool.org, you will notice that they offer you
          a weekly reflection tool that helps keep track of your goals and your
          key metric.
        </p>
        <p className="mt-3 text-gray-500">
          I have been using startupschool's tool more or lees frequently.
          However, I found myself being more and more demotivated since it took
          so long until I could even track the first outcome. And then it hit
          me: YC – and many other acceleration programmes and VCs – focus on
          outcomes only!{" "}
        </p>
        <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          The case for high output management
        </h3>
        <p className="mt-3 text-gray-500">
          A reason for this can be tracked down to the popularity of High Output
          Management, book by Andy Groves, founder and CEO of Intel. Andy Groves
          has had a deep impact on the Silicon Valley and startup culture
          through frameworks such as OKRs. As an engineer, he emphasised the
          importance of aligning all necessary elements in order to create
          products and services that ultimately add value. His approach lead to
          a massive increase in productivity and value creation for societies in
          general. And the founders massive successes such as Stripe, Shopify,
          and many others swear by Andy's advice. Rightly so!
        </p>
        <p className="mt-3 text-gray-500">
          The assumption of Andy's thesis, however, is that there is a clear
          path to value creation and a more or less clear understanding of what
          you customers want. In his book, he uses the example of a breakfast
          factory where the proposition is clear: The breakfast factory offers
          you a nice breakfast (general value proposition) with perfectly boiled
          eggs (USP). But it does not get too much into detail of how the
          entrepreneur even realised that there was a demand for a breakfast
          with perfectly boiled eggs.
        </p>
        <p className="mt-3 text-gray-500">
          This is no mistake of omission by Andy since, as the title clearly
          suggests, his focus was on maximising output through a conscious and
          scientific (re)alignment of already existing processes. His success
          and the success of those startups that succeeded based on his advice
          clearly proofs him right! It was, and remains to this time, a way to
          maximise good and the benefits for societies as a whole.
        </p>
        <p className="mt-3 text-gray-500">
          But what about you? What about the founder who still has to figure out
          what her general value proposition and USP should be in the first
          place? How can someone who has not gotten from zero to one impress
          anyone?I have struggled a lot with this question for a long time as
          well.
        </p>
        <p className="mt-3 text-gray-500">
          First, I needed an answer to this question out of self-interest since
          I, too, want to impress VCs, potential co-founders or early employees
          so they join and support my projects. Second, I have had many requests
          throughout the last years to either join a startup or serve them as a
          freelancer. There was, however, an information asymmetry: I could only
          know the things the founders or customers were willing to tell me and
          I had to always weigh it with a grain of salt since I could not be
          sure to a certain extent.
        </p>
        <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          The case for high input management
        </h3>
        <p className="mt-3 text-gray-500">
          This is where I came up with the Purpose Framework and the Purpose
          Index. These tools are meant to help me look beyond what others might
          want to tell me to get a clear understanding of what they want to
          achieve, how they want to achieve their goals and – most importantly –
          how I should measure their input towards said goal. Since I work with
          early stage startups and/or individuals who are considering entering
          the startup world I know I cannot expect outcome, yet. But I should be
          able to asses input. If Andy Groves proposes to measure and maximise
          outcome, I am proposing to measure and maximise input. In other words,
          the Purpose Framework and its tools point at the necessity for high
          input management.
        </p>
        <p className="mt-3 text-gray-500">
          {" "}
          This is good news for early stage founders since it means they are now
          able to impress others even before they have generated any significant
          outcome. To be clear, I am not proposing to get rid of outcome
          tracking at all. What I am suggesting, though, is to complement the
          classic KPIs with a new set of indicators that measure your input,
          i.e. your conscious effort to achieve meaningful outcome. VCs still
          should make their decisions based on their fiduciary responsibility to
          generate and maximise the economic and ideal outcome for their LPs as
          well.
        </p>
        <p className="mt-3 text-gray-500">
          But not all outcome is created equally. All paths lead to Rome. But
          not all paths are equal. The history of capitalism and startups is
          paved with unethical behaviour and harmful companies being built on
          the premise of maximising outcome at any cost. In the end, you could
          cheat your way to outcomes in order to impress investors (here is the
          latest example).
        </p>
        <p className="mt-3 text-gray-500">
          Having a clear sense of purpose is a way to discriminate between the
          available paths for you. You can pick the path where you maximise your
          outcome by optimising your input. Maximising your input means you
          align your efforts with an authentic motivation to achieve meaningful
          outcomes. It also creates transparency regarding the way you want to
          generate outcomes. Others are, then, able to evaluate your progress
          towards success and have a clear proof of your purpose. Let me brake
          down for you how the Purpose Framework helps you to impress others on
          your way to meaningful outcomes.
        </p>
        <div className="flex items-center justify-center w-full">
          <Image
            className="object-cover h-full mx-auto "
            src="/purpose_screen.png"
            alt="image of laptop with screenshot"
            width={700}
            height={700}
          />
        </div>
        <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Impress with vision{" "}
        </h3>
        <p className="mt-3 text-gray-500">
          In the early stage, investors want to bet on the founders, not
          necessarily on the product. The Purpose Framework clarifies your
          motivation to start your own company in the first place. It digs deep
          into your implicit belief system and generates a cohesive and coherent
          story of how your core belief or principle necessarily leads you to
          attempt to solve a problem. For many, this might sound like fluffy
          marketing lingo. And it is, to a certain degree. But I would argue
          that marketing, at its core, is all about conveying a compelling
          messages that leads to a desired action.
        </p>
        <p className="mt-3 text-gray-500">
          {" "}
          You could, of course, try to coerce or trick people to buy your
          products – or you could be explicit, honest and transparent about your
          motivation. It should be self-evident why the latter is better, not
          just for your external image but also for how your co-founders, team
          members and investors perceive you. From my experience, you yourself
          will need to remind yourself what lead you to start your company in
          the first place since, as you might already know, the startup journey
          is playing the business game on hard mode, indeed!
        </p>
        <p className="mt-3 text-gray-500">
          {" "}
          Having a clear sense of purpose means having a north start that guides
          you and reminds you what really matters. It is the foundation for all
          strategic considerations and the necessary condition to align all
          vectors/people working with and for you to achieve an outcome.
        </p>{" "}
        <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Impress with input{" "}
        </h3>
        <p className="mt-3 text-gray-500">
          A common trap for inexperienced founders is to succumb to what I call
          vision porn. Having a clear sense of purpose or vision for a better
          future releases endorphins and you get all the pleasure without any of
          the work. You get addicted to narrating the story and seeing the
          impact it has on people's brains. I believe this is one reason why
          founders sometimes choose the easy path, even if it means to trick
          people to buy in into their story.
        </p>
        <p className="mt-3 text-gray-500">
          {" "}
          We need a way to demonstrate that we do not only have a compelling
          story but that we also are putting in the necessary effort in
          alignment with our values in a way that maximises future outcome. The
          Purpose Index does that. The Purpose Index is a figure (%) that
          summarises what you were able to realise from your pre-defined
          purpose. If the Purpose Framework is the north start that guides you,
          then the Purpose Index is the degree to which you were able to align
          your actions with that star to achieve the desired outcome.
        </p>{" "}
        <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Impress with meaningful (monetary) outcome{" "}
        </h3>
        <p className="mt-3 text-gray-500">
          A famous German author said there is no good unless you do it. Being
          purpose-driven means that all your actions and the product or service
          you offer aim at benefitting someone else. In consequence, this means
          that if you are not generating any economic results and are not
          receiving any positive feedback from your stakeholders, you might
          still be on the way but cannot boast of achieving your goal.
        </p>
        <p className="mt-3 text-gray-500">
          {" "}
          A business is, in the end, a business, i.e. an entity meant to
          generate and maximise profits. This is essential for purpose-driven
          companies. If you are having a positive impact, consider it your
          ethical responsibility to do even more good. This is the signal that
          investors ultimately want to see. They are in the responsibility to
          maximise outcome for their stakeholders, mainly their LPs but also for
          society in general.
        </p>
        <p className="mt-3 text-gray-500">
          {" "}
          More and more investors are now looking for indicators beyond
          outcomes. They want to know that outcomes are achieved in a way they
          and their LPs can be proud of. The Purpose Framework and its tools
          offer investors, potential co-founders, employees and other
          stakeholders a way to investigate a companies purpose and have an
          assurance that your startup is worth their time, energy, talent, and
          money. We are now looking at a meagre economy for the next, at least,
          18 months. People have to make tough calls and decide who is worth
          their remaining resources. Stand out from the masses and proof that
          you are able to maintain a clear sense of purpose and are capable of
          realising it – even under odd conditions!
        </p>
        <div>
          <h3 className="mt-3 text-xl font-extrabold sm:text-2xl">
            Download Free Purpose Model Canvas
          </h3>
          <NavLink
            href="assets/purpose_canvas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-sm font-medium text-white bg-logo"
          >
            Free PDF
          </NavLink>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default PurposeStory;
