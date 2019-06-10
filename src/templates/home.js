import * as React from 'react'
import './style.css'
import Layout from '../components/layout'
import ParallaxBackground from '../components/ParallaxBackground'
import CutoutText from '../components/CutoutText'
import { graphql } from "gatsby"
import Helmet from "react-helmet"

export default function HomeRoute ({pageContext, data}) {
  return (
      <Layout>
        <Helmet>
          <html lang={pageContext.lang} />
          <title>{pageContext.translations['site.title']}</title>
          <meta name='description' content={pageContext.translations['site.metaDescription']}/>
        </Helmet>
        <div className='route--home'>
          {/* <div style={{height: 2000}}/> */}
          <div className='header-image'>
            <ParallaxBackground fluid={data.headerImage.childImageSharp.fluid}>
              <CutoutText>Goldland</CutoutText>
              <hr/>
              <h2>{pageContext.translations['header.pending']}</h2>
            </ParallaxBackground>
          </div>
          {/* <div style={{height: 2000}}/> */}
        </div>
      </Layout>
  )
}

export const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "cornfield3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`