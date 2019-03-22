import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Post = styled.article`
  border-radius: 4px;
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  margin: 24px 0;
  padding: 24px;

  a {
    color: #000c;
    text-decoration: none;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: #bc0ce8;
    }
  }

  time {
    font-size: 14px;
    padding: 12px 0;
    display: block;
  }

  h2 {
    margin-bottom: 0;
  }

  p {
    font-size: 21px;
  }

  .read-more {
    color: #bc0ce8;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 18px;
    text-decoration: underline;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: #000c;
    }
  }
`

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <Post key={node.fields.slug}>
          <Link to={`/posts${node.fields.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <time>{node.frontmatter.date}</time>
          <p>{node.excerpt}</p>
          <Link className="read-more" to={`/posts${node.fields.slug}`}>
            Read More
          </Link>
        </Post>
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
