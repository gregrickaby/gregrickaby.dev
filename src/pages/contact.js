import React from "react"

import Layout from "../components/layout"
import SEO from "../components/Seo"
import ContactForm from "../components/ContactForm"

const Contact = ({ location }) => (
  <Layout location={location}>
    <SEO title="Contact Greg" />
    <h1>Contact</h1>
    <ContactForm />
  </Layout>
)

export default Contact
