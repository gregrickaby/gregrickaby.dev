import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"

const Contact = ({ location }) => (
  <Layout location={location}>
    <SEO title="Contact Greg" />
    <h1>Contact</h1>
    <Form />
  </Layout>
)

export default Contact
