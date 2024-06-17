import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import community from "/images/icon-communities.svg";
import message from "/images/icon-messages.svg";
import CommunityStatus from "./components/CommunityStatus";
import IllustrationSection from "./components/IllustrationSection";
import conversation from "/images/illustration-grow-together.svg";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <section className="grid grid-cols-2 mx-auto w-[80%] place-items-center mt-20">
        <CommunityStatus
          community="1.4k+"
          title="Communities Formed"
          image={community}
        />
        <CommunityStatus
          community="2.7m+"
          title="Messages Sent"
          image={message}
        />
      </section>
      <IllustrationSection
        illustration={conversation}
        heading="Grow Together"
        description="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
      />
    </>
  );
};

export default App;
