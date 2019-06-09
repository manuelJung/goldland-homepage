import * as React from 'react'
import Layout from '../components/layout'
import Image from "../components/image"
import { ParallaxProvider } from 'react-scroll-parallax'

export default function HomeRoute ({pageContext}) {
  return (
    <ParallaxProvider>
      <Layout>
        <div style={{height: '100vh'}}>
          <Image />
        </div>
        <h1>HOME ({pageContext.lang})</h1>
      </Layout>
    </ParallaxProvider>
  )
}