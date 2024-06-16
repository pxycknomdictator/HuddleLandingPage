import React from "react";
import PrimaryButton from "./PrimaryButton";
import heroImages from "/images/screen-mockups.svg";

const HeroSection = () => {
  return (
    <section className="w-[80%] mx-auto mt-40 text-center">
      <h1 className="text-5xl">Build The Community Your Fans Will Love</h1>
      <article className="text-xl w-[600px] mx-auto mt-5 mb-7">
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
