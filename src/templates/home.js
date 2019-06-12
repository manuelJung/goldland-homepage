import * as React from 'react'
import './style.css'
import Layout from '../components/layout'
import ParallaxBackground from '../components/ParallaxBackground'
import CutoutText from '../components/CutoutText'
import Helmet from "react-helmet"

export default function HomeTemplate ({headerImageFluid, cms, lang}) {
  return (
      <Layout>
        <Helmet>
          <html lang={lang} />
          <title>{cms.title}</title>
          <meta name='description' content={cms.metaDescription}/>
        </Helmet>
        <div className='route--home'>
          {/* <div style={{height: 2000}}/> */}
          <div className='header-image'>
            <ParallaxBackground fluid={headerImageFluid}>
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