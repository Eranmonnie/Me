import Works from "../components/Works";
import Question from "../components/Question";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <>
      <Banner first={`selected works`} second={`(2020-2023)`} align={true} />
      <div className="mb-48">
        <Hero
          message={`Have a look at some of the projects I’ve worked on. They vary from presonal to academic front-end applications and full fledged fulstack ones.`}
        />
      </div>
      <Works
        name={`Nerflix`}
        year={`2023`}
        data={`Netflix clone created with react and tailwind css.`}
      />
      <Works
        name={`Laracast`}
        year={`2023`}
        data={`Fullstack blogging website created with Laravel and tailwind css.`}
      />
      <Works
        name={`Worddle clone`}
        year={`2023`}
        data={`wordle game clone created with HTML, CSS, and Javascript.`}
      />
      <Works
        name={`Ray Valley`}
        year={`2023`}
        data={`Simple farm website for my opensource project powered by Couchcms and php.`}
      />
      <Question
        one={`Looking to grow your business through the power of great digital design?`}
        two={`Reach out to get the conversation started about your digital design needs.`}
        button={true}
      />
      <Footer />
    </>
  );
};

export default Projects;
