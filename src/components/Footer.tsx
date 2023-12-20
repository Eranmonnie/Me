import React from "react";
import Banner from "./Banner";
import Socials from "./Socials";

const Footer = () => {
  return (
    <>
     <Banner first={`ajala feranmi`} second={`software engineer`} align={false} />
     <Socials/>
    </>
  );
};

export default Footer;
