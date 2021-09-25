import * as palette from "../../styles/Variables";
export const HomeObjOne = {
  id: "about",
  bg: palette.DARK,
  lightText: true,
  topLine: "About Me",
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
  buttonRoute: "To My Self-Projects",
  buttonScroll: "Github Repos",
  imgStart: true,
  alt: "discover",
  dark: false,
  primary: false,
  darkText: false,
  route: "projects",
  to: "github",
};
