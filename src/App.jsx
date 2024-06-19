import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import community from "/images/icon-communities.svg";
import message from "/images/icon-messages.svg";
import CommunityStatus from "./components/CommunityStatus";
import IllustrationSection from "./components/IllustrationSection";
import conversation from "/images/illustration-grow-together.svg";
import users from "/images/illustration-your-users.svg";

import bg_Desktop_Top from "/images/bg-top-desktop-1.svg";
import bg_Desktop_Bottom from "/images/bg-bottom-desktop-1.svg";
import bg_Mobile_Top from "/images/bg-top-mobile-1.svg";
import bg_Mobile_Bottom from "/images/bg-bottom-mobile-1.svg";

import bg_Desktop_Top2 from "/images/bg-top-desktop-2.svg";
import bg_Desktop_Bottom2 from "/images/bg-bottom-desktop-2.svg";
import bg_Mobile_Top2 from "/images/bg-top-mobile-2.svg";
import bg_Mobile_Bottom2 from "/images/bg-bottom-mobile-2.svg";

import FlowingSection from "./components/FlowingSection";
import Build from "./components/Build";
import Footer from "./components/Footer";

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
        bg_Desktop_Top={bg_Desktop_Top}
        bg_Desktop_Bottom={bg_Desktop_Bottom}
        bg_Mobile_Top={bg_Mobile_Top}
        bg_Mobile_Bottom={bg_Mobile_Bottom}
        illustration={conversation}
        heading="Grow Together"
        description="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
      />
      <FlowingSection />
      <IllustrationSection
        bg_Desktop_Top={bg_Desktop_Top2}
        bg_Desktop_Bottom={bg_Desktop_Bottom2}
        bg_Mobile_Top={bg_Mobile_Top2}
        bg_Mobile_Bottom={bg_Mobile_Bottom2}
        illustration={users}
        heading="Your Users"
        description="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
      />
      <Build />
      <Footer />
    </>
  );
};

export default App;
