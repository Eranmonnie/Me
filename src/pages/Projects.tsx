import Works from "../components/Works";
import { works } from "../works";
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
        {
          works.map(work=>{
            return(
              <Works
              id = {work.id}
              image={work.image}
              name = {work.name}
              year = {work.year}
              data = {work.data}
              />
            )
          })
        }
     
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
