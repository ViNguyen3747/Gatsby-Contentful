/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);
const slash = require(`slash`);

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      allContentfulGithubRepo {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  if (result.errors) {
    console.log("Error retrieving contentful data", result.errors);
  }
  const projectsTemplate = path.resolve(`./src/template/Projects/Projects.js`);

  result.data.allContentfulGithubRepo.edges.forEach(({ node }) => {
    createPage({
      path: `/projects/${node.slug}`,
      component: slash(projectsTemplate),
      context: {
        slug: node.slug,
      },
    });
  });
};
