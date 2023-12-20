import React from "react";
import Works from "../components/Works";
import Question from "../components/Question";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Button from "../components/Button";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Banner
        first={`ajala feranmi`}
        second={`software engineer`}
        align={true}
      />
      <Hero
        message={`Through strategic art direction and webdesign I help companies around the world grow their business.`}
      />
      <Button />

      <div className="flex justify-between mt-36 mb-8">
        <h3 className="text-lg lg:text-2xl">(Selected works)</h3>
        <h3 className="text-lg lg:text-2xl">Discover </h3>
      </div>

      <Works name={`Nerflix`} year={`2023`} />

      <Question
        one={`As a digital designer and art
     director I help companies and organisations around
     the world connect with their audience and grow their business.`}
        two={`Projects can be done directly with
      clients or in a supporting role for agencie and studios from around the world. `}
        button={false}
      />
      <Works name={`Nerflix`} year={`2023`} />
      <Works name={`Nerflix`} year={`2023`} />

      <Question
        one={`Looking to grow your business through the power of great digital design? `}
        two={`Reach out to get the conversation started about your digital design needs. `}
        button={true}
      />
      <Footer />
    </>
  );
}

export default Home;
