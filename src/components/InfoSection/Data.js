import * as palette from "../../styles/Variables";

export const HomeObjOne = {
  id: "about",
  bg: palette.DARK,
  lightText: true,
  lightTextDesc: true,
  topLine: "About Me",
  headline: "Ornare arcu odio ut sem",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi proin sed libero enim. Feugiat sed lectus vestibulum mattis. Pellentesque sit amet porttitor eget dolor morbi. Egestas purus viverra accumsan in nisl nisi scelerisque.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: require("../../images/avatar.svg").default,
  alt: "introduction",
  dark: false,
  primary: true,
  darkText: false,
  to: "projects",
};

export const HomeObjTwo = {
  id: "projects",
  bg: palette.LIGHT,
  lightText: false,
  lightTextDesc: false,
  topLine: "Discover",
  headline: "Ornare arcu odio ut sem",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi proin sed libero enim. Feugiat sed lectus vestibulum mattis. Pellentesque sit amet porttitor eget dolor morbi. Egestas purus viverra accumsan in nisl nisi scelerisque.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: require("../../images/myCharacter.svg").default,
  alt: "discover",
  dark: true,
  primary: false,
  darkText: true,
  to: "posts",
};

export const HomeObjThree = {
  id: "services",
  bg: palette.LIGHT,
  lightText: false,
  lightTextDesc: false,
  topLine: "Github Repository",
  headline: "Ornare arcu odio ut sem",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi proin sed libero enim. Feugiat sed lectus vestibulum mattis. Pellentesque sit amet porttitor eget dolor morbi. Egestas purus viverra accumsan in nisl nisi scelerisque.",
  buttonLabel: "Discover",
  imgStart: true,
  img: require("../../images/signin.svg").default,
  alt: "repos",
  dark: true,
  primary: false,
  darkText: true,
  to: "github",
};

export const HomeObjFour = {
  id: "bakery",
  bg: palette.LIGHT_GREEN,
  lightText: false,
  lightTextDesc: true,
  topLine: "Hobby",
  headline: "Ornare arcu odio ut sem",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi proin sed libero enim. Feugiat sed lectus vestibulum mattis. Pellentesque sit amet porttitor eget dolor morbi. Egestas purus viverra accumsan in nisl nisi scelerisque.",
  buttonLabel: "Learn More",
  imgStart: false,
  img: require("../../images/food.svg").default,
  alt: "discover",
  dark: true,
  primary: false,
  darkText: false,
  route: "/hobby",
};
