// @flow
import * as React from 'react'
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax'
import CutoutText from '../../components/CutoutText'
import './style.css'

// type Props = {
//   fluid: mixed
// }

export default function ParallaxImage ({fluid}) {
  const speed = 1

  return (
    <div className='ParallaxImage'>
      <Parallax y={[-40, 40]}>
        <Img fluid={fluid}/>
      </Parallax>
      <div className='content'>
        <CutoutText>Goldland</CutoutText>
      </div>
    </div>
  )
}