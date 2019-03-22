import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import River from "../components/River"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <River />
  </Layout>
)

export default IndexPage
