import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Repos from "../components/Repos/Repos";
import GithubRepos from "../components/GithubRepos/GithubRepos";
import {
  HomeObjOne,
  HomeObjTwo,
  HomeObjThree,
  HomeObjFour,
} from "../components/InfoSection/Data";
import Posts from "../components/Posts";
const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjTwo} />
      <Posts />
      {/* <InfoSection {...HomeObjThree} /> */}
      <GithubRepos />
    </>
  );
};

export default IndexPage;
