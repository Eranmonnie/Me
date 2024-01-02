import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Question from "../components/Question";
import Solution from "../components/Solution";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Services from "../components/Services";
import Pictures from "../components/Pictures";

const About = () => {
  return (
    <>
      <Banner first={`software `} second={`and piano`} align={true} />
      <Hero
        message={`Get to know more about my approach, process, services and way of working. Get to see what i do when i'm not on my laptop while you're at it.`}
      />
      <div className="mt-28">
        <Profile />
      </div>

      <div className="mb-20">
        <Question
          one={`The best results come from websites that are easy to use, show the user what they want to see and delight them. By analysing your current situation and defining your business goals we’ll design a website that is not only beautiful but also converts. `}
          button={false}
        />
      </div>

      <Solution
        heading={`Defining the business goal and `}
        data={`Everything starts by getting clarity around what we are trying to achieve. What should the website’s main goal be? What does project succes mean for your business? Where will the business be in 3 years? These are just some questions which we’ll work together on to define the best path forward when it comes to your digital needs.`}
      />
      <div className="mt-10 mb-40 lg:mb-60">
        <Solution
          heading={`Strategic visual design and art direction.`}
          data={`The visual language of the website will define how the visitor connects with the product or service. Knowing who the target audience is and what everybody else is doing in the field is crucial to get the best result from the website we’ll create together.`}
        />
      </div>

      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
        <h2 className="font-inter-tight-bold uppercase text-7xl lg:text-9xl">
          services
        </h2>
        <Button />
      </div>

      <hr className="mt-20" />

      <Services
        data={`We’ll have a look at what content should be on the site, which shouldn’t and what goes on which page. By thinking about the structure in user funnels we’ll define a path for the user towards conversion.`}
      />

      <Services
        data={`We’ll have a look at what content should be on the site, which shouldn’t and what goes on which page. By thinking about the structure in user funnels we’ll define a path for the user towards conversion.`}
      />

      <Services
        data={`We’ll have a look at what content should be on the site, which shouldn’t and what goes on which page. By thinking about the structure in user funnels we’ll define a path for the user towards conversion.`}
      />

      <Question
        one={`When I’m not at the computer you can find me riding my skateboard, watching anything star wars related or walking our dogs. `}
        button={false}
      />
      <div className="mt-20 mb-20">
        <Pictures />
      </div>

      <Question
        one={`Looking to grow your business through the power of great digital design? `}
        two={`Reach out to get the conversation started about your digital design needs. `}
        button={true}
      />

      <Footer />
    </>
  );
};

export default About;
