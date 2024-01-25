import Works from "../components/Works";
import Question from "../components/Question";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Banner
        first={`ajala feranmi`}
        second={`software engineer`}
        align={true}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mb-12"
      >
        <Hero
          message={`I'm not just a full-stack engineer, I'm a digital architect with a passion for bringing web development projects to life!`}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 40 }}
      >
        <Button />
      </motion.div>

      <div className="flex justify-between mt-32 mb-8">
        <h3 className="text-lg lg:text-2xl">(Selected works)</h3>
        <h3 className="text-lg lg:text-2xl">Discover↓</h3>
      </div>

      <Works
        id ={4}
        image={`https://res.cloudinary.com/djtlzuxfa/image/upload/v1704538074/Screenshot_152_qbszj0.png`}
        name={`Nerflix`}
        year={`2023`}
        data={`A Netflix look-alike, made with React and styled with Tailwind CSS.`}
      />

      <Question
        one={`As a full-stack software engineer, I specialize in creating seamless digital experiences and robust solutions for businesses worldwide, bridging the gap between clients and effective software solutions.`}
        two={`I am dedicated to crafting innovative solutions that enhance user engagement and drive business growth. `}
        button={false}
      />
      <Works
        id ={5}
        image={
          "https://res.cloudinary.com/djtlzuxfa/image/upload/v1704538074/Screenshot_152_qbszj0.png"
        }
        name={`Nerflix`}
        year={`2023`}
        data={`Ecommerce website for the first smart mailbox Custo®.`}
      />
      <Works
      id ={6}
        image={
          "https://res.cloudinary.com/djtlzuxfa/image/upload/v1704538074/Screenshot_152_qbszj0.png"
        }
        name={`Nerflix`}
        year={`2023`}
        data={`Ecommerce website for the first smart mailbox Custo®.`}
      />
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
