const path = require(`path`)
const translations = require('./translations.json')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({actions}) => {
  ['de', 'en', 'mk', 'al'].forEach(lang => {
    const homePath = lang === 'mk' ? '/' : `${lang}/`
    actions.createPage({
      path: homePath,
      component: path.resolve(`src/templates/home.js`),
      context: { 
        lang,
        translations: translations.home[lang]
      }
    })
  })
}