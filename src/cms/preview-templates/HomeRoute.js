import React from 'react'
import HomePageTemplate from '../../templates/home'

const HomeRoutePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <HomePageTemplate cms={data} />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default HomeRoutePreview
