import * as React from 'react'
import { graphql } from "gatsby"
import HomeTemplate from '../templates/home'

export default function HomeRoute ({pageContext, data}) {
  return (
    <HomeTemplate
      headerImageFluid={data.headerImage.childImageSharp.fluid}
      lang={pageContext.lang}
      cms={data.cms}
    />
  )
}

export const query = graphql`
  query Homepage ($lang: String){
    headerImage: file(relativePath: { eq: "cornfield3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cms:templatesJson(templateKey: {eq: "homepage"} language: {eq:$lang}){
      title
      metaDescription
      message
    }
  }
`