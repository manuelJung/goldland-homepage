// @flow
import * as React from 'react'
import './style.css'

// type Props = {
//   children: React.Node
// }

export default function CutoutText({children}) {
  return (
    <div className='CutoutText'>
      {children}
    </div>
  )
}