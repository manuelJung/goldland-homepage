// @flow
import * as React from 'react'
import './style.sass'
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/layout'
import ParallaxBackground from '../components/ParallaxBackground'
import CutoutText from '../components/CutoutText'
import Helmet from "react-helmet"
import * as t from '../types'

type Props = {
  cms: t.HomepageCMS
}

export default function HomeTemplate ({cms}:Props) {
  const {headerImage} = useStaticQuery(graphql`
    query HeaderImage {
      headerImage: file(relativePath: { eq: "cornfield6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
      <Layout>
        <Helmet>
          <html lang={cms.language} />
          <title>{cms.title}</title>
          <meta name='description' content={cms.metaDescription}/>
        </Helmet>
        <div className='route--home'>
          {/* <div style={{height: 2000}}/> */}
          <div className='header-image'>
            <ParallaxBackground fluid={headerImage.childImageSharp.fluid}>
              <CutoutText>Goldland</CutoutText>
              <hr/>
              <h2>{cms.message}</h2>
            </ParallaxBackground>
          </div>
          <div style={{height: 2000}}/>
        </div>
      </Layout>
  )
}