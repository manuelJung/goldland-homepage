import * as React from 'react'
import './style.css'
import Layout from '../components/layout'
import ParallaxBackground from '../components/ParallaxBackground'
import CutoutText from '../components/CutoutText'

export default function HomeRoute ({pageContext}) {
  return (
      <Layout>
        <div className='route--home'>
          <div className='header-image'>
            <ParallaxBackground>
              <CutoutText>Goldland</CutoutText>
              <hr/>
              <h2>{pageContext.translations['header.pending']}</h2>
            </ParallaxBackground>
          </div>
        </div>
      </Layout>
  )
}