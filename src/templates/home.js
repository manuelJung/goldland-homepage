import * as React from 'react'
import Layout from '../components/layout'

export default function HomeRoute ({pageContext}) {
  return (
    <Layout>
      <h1>HOME ({pageContext.lang})</h1>
    </Layout>
  )
}