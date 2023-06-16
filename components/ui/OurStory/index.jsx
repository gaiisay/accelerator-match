import Image from "next/image";
import SectionWrapper from "../../SectionWrapper";

const OurStory = () => (
  <SectionWrapper>
    <div className="custom-screen">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="max-w-xl">
          <h3 className="text-3xl font-extrabold sm:text-4xl">Our Story</h3>
          <p className="mt-3 text-gray-500">
            Acceleratormatch was created in response to the increasing number of
            accelerators launching across the world. While this is a fantastic
            development for the startup ecosystem, it may be daunting for
            entrepreneurs looking for the perfect accelerator program to help
            their company expand.
          </p>
          <p className="mt-3 text-gray-500">
            With so many alternatives, founders can quickly become disoriented
            while looking for the ideal accelerator. Navigating the many
            programs and application procedures while focusing on company growth
            may be difficult. This is where Acceleratormatch comes into play.
          </p>
          <p className="mt-3 text-gray-500">
            We offer a centralized platform through which startups can easily
            apply for and be approached by a variety of accelerators based on
            their specific needs and goals. By connecting startups with the
            right accelerator, we believe we can improve innovation and growth
            in the startup ecosystem.
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <video loop autoPlay muted playsInline>
            <source src="/2d3a1be6fde7479a93532e165d4e98a0.webm" />
          </video>
          {/* <Image
            className="object-cover h-full mx-auto "
            src="/rocket-unscreen_noBg.gif"
            alt="image of binoculars"
            width={500}
            height={500}
          /> */}
        </div>
      </div>
      <div className="mx-auto mt-12">
        <h3 className="text-3xl font-extrabold sm:text-4xl">Vision</h3>
        <p className="mt-3 text-gray-500">
          Our Vision: Empowering Startups to Change the World! Acceleratormatch
          envisions a future where startups transform industries and create
          global impact. We connect entrepreneurs with the accelerators that
          unlock their full potential.
        </p>
        <p className="mt-3 text-gray-500">
          No promising idea should go unsupported. We break barriers and bridge
          the gap between startups and accelerators. Our platform fuels passion
          and diversity, turning bold visions into tangible realities. Join us
          in shaping a future where startups change the world.
        </p>
        <p className="mt-3 text-gray-500">
          Together, we accelerate innovation and foster collaboration. Let's
          create a legacy of innovation that transcends boundaries. Together, we
          empower startups to leave their mark.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default OurStory;
