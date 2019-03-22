import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../layout"
import { PostTitle, ImageLayout, StyledContent } from "./styles"

class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    const { location } = this.props
    return (
      <Layout location={location}>
        <PostTitle>{markdownRemark.frontmatter.title}</PostTitle>
        <ImageLayout>
          <Img
            fluid={markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}
          />
        </ImageLayout>
        <StyledContent content={markdownRemark.html} />
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
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 630) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
