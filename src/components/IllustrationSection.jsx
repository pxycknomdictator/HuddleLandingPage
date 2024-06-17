import React from "react";
import bg_Desktop_Top from "/images/bg-top-desktop-1.svg";
import bg_Desktop_Bottom from "/images/bg-bottom-desktop-1.svg";
import bg_Mobile_Top from "/images/bg-top-mobile-1.svg";
import bg_Mobile_Bottom from "/images/bg-bottom-mobile-1.svg";

const IllustrationSection = ({ illustration, heading, description }) => {
  return (
    <div className="mt-24">
      <img src={bg_Desktop_Top} width={"100%"} alt={bg_Desktop_Top} />
      <section className="bg-VeryPaleBlue">
        <div className="grid grid-cols-2 place-items-center gap-14 w-[85%] mx-auto bg-VeryPaleBlue">
          <div>
            <h3 className="text-4xl">{heading}</h3>
            <article className="mt-8 font-normal">{description}</article>
          </div>
          <div>
            <img src={illustration} alt={illustration} />
          </div>
        </div>
      </section>
      <img src={bg_Desktop_Bottom} width={"100%"} alt={bg_Desktop_Bottom} />
    </div>
  );
};

export default IllustrationSection;
