const data = require("./src/data/data");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    url: "https://viportfolio.gatsbyjs.io/",
    title: "Contentful with Gatsby",
    author: "@ThiKieuViNguye1",
    image: "/avatar.webp",
    description: "Building portfolio powered by Contentful and GatsbyJs",
    keywords:
      "portfolio, GatsbyJS, Contentful, Styled Component, Responsive Design",
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACEID,
      },
    },
    `gatsby-plugin-preact`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GATSBY_GITHUB_API_TOKEN,
        graphQLQuery: data.githubApiQuery,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Encode Sans Expanded"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // set the color you want for your progress bar here
        color: "#177629",
        // set the height of the scroll indicator
        height: "4px",
        // Set specific paths where you want the scroll indicator using regex
        paths: ["/"],
        // Configure the z-index of the indicator element
        zIndex: `9999`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ViPortfolio`,
        short_name: `ViPortfolio`,
        start_url: `/`,
        background_color: `#212121`,
        theme_color: `#177629`,
        display: `standalone`,
        icon: `src/images/avatar.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/projects/*`],
      },
    },
  ],
};
