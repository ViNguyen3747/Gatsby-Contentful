import * as palette from "../../styles/Variables";
export const AboutSection = {
  id: "about",
  bg: palette.DARK,
  topLine: "About Me",
  buttonScroll: "Learn More",
  buttonLink: "My Resume",
  imgStart: false,
  alt: "introduction",
  dark: false,
  primary: false,
  textColor: palette.LIGHT,
  to: "aboutInfo",
  link: "/Vi_Resume.pdf",
};

export const ProjectSection = {
  id: "projects",
  bg: palette.DARK_GREEN,
  topLine: "Self Projects",
  buttonRoute: "To My Self-Projects",
  buttonScroll: "Github Repos",
  imgStart: false,
  alt: "discover",
  dark: false,
  primary: false,
  textColor: palette.LIGHT,
  route: "projects",
  to: "github",
};

export const ContactSection = {
  id: "contact",
  bg: palette.LIGHT,
  topLine: "Contact Me",
  imgStart: false,
  alt: "email",
  dark: false,
  primary: false,
  textColor: palette.DARK,
};
