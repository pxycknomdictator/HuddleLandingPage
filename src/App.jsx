import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import community from "/images/icon-communities.svg";
import message from "/images/icon-messages.svg";
import CommunityStatus from "./components/CommunityStatus";

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
    </>
  );
};

export default App;
