import React, { Component } from "react"
import Layout from "./layout"
import { graphql } from "gatsby"

class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    const { location } = this.props
    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </Layout>
    )
  }
}

export default postLayout

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date
      }
    }
  }
`
