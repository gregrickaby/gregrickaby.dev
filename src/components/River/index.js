import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { River } from "./styles"

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <River key={node.fields.slug}>
          <Link to={`/posts${node.fields.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <time>{node.frontmatter.date}</time>
          <p>{node.excerpt}</p>
          <Link className="read-more" to={`/posts${node.fields.slug}`}>
            Read More
          </Link>
        </River>
      ))
    }
  />
)

export default Listing

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
