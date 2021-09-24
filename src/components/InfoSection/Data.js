import * as palette from "../../styles/Variables";
export const HomeObjOne = {
  id: "about",
  bg: palette.DARK,
  lightText: true,
  topLine: "About Me",
  headline: "Thi Kieu Vi Nguyen",
  description:
    "I go by Vi (pronounced as V) for short. I am a Computer Science student from Angelo State University. I love building and designing web applications. Scroll down to learn more about me.",
  buttonScroll: "Learn More",
  imgStart: false,
  alt: "introduction",
  dark: false,
  primary: false,
  darkText: false,
  to: "aboutInfo",
};

export const HomeObjTwo = {
  id: "projects",
  bg: palette.DARK_GREEN,
  lightText: true,
  topLine: "Self Projects",
  headline: "I love creating web applications from scratch",
  description:
    "Want to see all my self projects? I love clean design, not-boring design",
  buttonRoute: "Discover",
  buttonScroll: "Github Repos",
  imgStart: true,
  alt: "discover",
  dark: false,
  primary: false,
  darkText: false,
  route: "projects",
  to: "github",
};
