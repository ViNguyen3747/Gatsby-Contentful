import React from "react";
import Repos from "../components/GithubRepos/AllGithubRepos/Repos";
import Seo from "../components/seo";
const github = () => {
  return (
    <>
      <Seo
        title="Vi's Github Repositories"
        description="Thi Kieu Vi Nguyen's Github Repositories"
      />
      <Repos />
    </>
  );
};

export default github;
