import Banner from "./Banner";
import Socials from "./Socials";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <>
    
      <Banner
        first={`ajala feranmi`}
        second={`software engineer`}
      />
      <Socials />
    </>
  );
};

export default Footer;
