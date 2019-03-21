import React, { Component } from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const ImageLayout = styled.div`
  margin-bottom: 48px;
`

const postContent = ({ className, content }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  />
)

const StyledContent = styled(postContent)`
  max-width: 730px;
  margin: 0 auto;

  p,
  ul,
  ol {
    -moz-osx-font-smoothing: grayscale;
    color: #000c;
    font-feature-settings: "liga";
    font-size: 21px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    letter-spacing: -0.0666667px;
    line-height: 33.1833px;
    overflow-wrap: break-word;
    text-rendering: optimizelegibility;
  }

  a {
    color: #000299cc;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: #000c;
    }
  }
`

class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    const { location } = this.props
    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
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
