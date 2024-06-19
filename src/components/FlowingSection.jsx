import React from "react";
import flowing from "/images/illustration-flowing-conversation.svg";

const FlowingSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-36 place-items-center gap-[10rem] w-[85%] mx-auto">
      <div>
        <img width={"100%"} src={flowing} alt={flowing} />
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-4xl">Flowing Conversations</h3>
        <article className="mt-8 font-normal">
          You wouldn't paginate a conversation in real life, so why do it
          online? Our thread have just-in-time loading for a more natural flow.
        </article>
      </div>
    </section>
  );
};

export default FlowingSection;
