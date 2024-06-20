import React from "react";
import PrimaryButton from "./PrimaryButton";
import heroImages from "/images/screen-mockups.svg";

const HeroSection = () => {
  return (
    <section className="w-[80%] mx-auto mt-20 md:mt-40 text-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        Build The Community Your Fans Will Love
      </h1>
      <article className="text-[1rem] sm:text-[1.1rem] w-full md:w-[70vw] lg:w-[50vw] mx-auto mt-5 mb-7">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </article>
      <PrimaryButton />
      <div className="w-[80%] mx-auto mt-20">
        <img className="w-full" src={heroImages} alt="heroImage" />
      </div>
    </section>
  );
};

export default HeroSection;
