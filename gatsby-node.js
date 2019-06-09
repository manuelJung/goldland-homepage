const path = require(`path`)
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({actions}) => {
  ['de', 'en', 'mk', 'al'].forEach(lang => {
    actions.createPage({
      path: `${lang}/`,
      component: path.resolve(`src/templates/home.js`),
      context: { lang }
    })
  })
}