import * as React from 'react'
import { graphql } from "gatsby"
import HomeTemplate from '../templates/home'

export default function HomeRoute ({pageContext, data}) {
  return (
    <HomeTemplate cms={data.cms} />
  )
}

export const query = graphql`
  query Homepage ($lang: String){
    cms:templatesJson(templateKey: {eq: "homepage"} language: {eq:$lang}){
      title
      metaDescription
      message
      language
    }
  }
`