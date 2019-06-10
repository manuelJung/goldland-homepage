// @flow
import * as React from 'react'
import { useInView } from 'react-intersection-observer'
import BackgroundImage from 'gatsby-background-image'
import './style.css'

// type Props = {
//   fluid: mixed,
//   weight: number,
//   children?: React.Node
// }

export default function ParallaxBackground ({fluid, weight, children}) {
  weight = weight || 150
  const [ref, inView] = useInView()
  const image = React.useRef()
  const lastOffset = React.useRef(0)

  React.useEffect(() => {
    if(!inView) return
    const initialOffset = window.pageYOffset - lastOffset.current
    const screenHeight = window.innerHeight
    const speed = weight / screenHeight
    const listener = () => {
        const offset = window.pageYOffset - initialOffset
        const margin = offset * speed
        image.current.style.marginTop = margin + 'px'
        lastOffset.current = offset
    }
    window.addEventListener('scroll', listener)
    return () => window.removeEventListener('scroll', listener)
  }, [inView, weight])


  return (
    <div className='ParallaxBackground' ref={ref}>
      <div 
        className='img' 
        ref={image} 
        children={<BackgroundImage Tag="div" fluid={fluid} />}
        style={{
          position: 'absolute',
          top: -weight,
          bottom: -weight,
          height: `calc(100% + ${weight*2}px)`
      }}/>
      {children}
    </div>
  )
}