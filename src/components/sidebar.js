/**
 * Archive component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const AsideLayout = styled.aside`
  color: #000c;
  font-size: 15px;
  line-height: 1rem;

  a {
    color: #bc0ce8;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: #250238;
    }
  }
`

const Widget = styled.div`
  margin-bottom: 48px;
`

const Avatar = {
  borderRadius: "50%",
  height: "auto",
  maxWidth: "60%",
}

const Bio = styled.div``

const ArchiveList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    color: #000c;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: #111;
    }
  }
`

export default () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <AsideLayout>
          <Widget>
            <h3>About</h3>
            <img
              style={Avatar}
              src="https://avatars3.githubusercontent.com/u/200280?s=460&v=4"
              alt="Greg"
            />
            <Bio>
              <p>
                Director of Engineering at WebDevStudios. Author/Tech Editor
                "For Dummies" brand under John Wiley & Sons, Inc.
              </p>
              <a href="https://twitter.com/gregrickaby">Twitter</a> |{" "}
              <a href="https://github.com/gregrickaby">Github</a> |{" "}
              <a href="https://www.linkedin.com/in/gregrickaby">LinkedIn</a>
            </Bio>
          </Widget>

          <Widget>
            <h3>Archive</h3>
            <ArchiveList>
              {allMarkdownRemark.edges.map(edge => (
                <li key={edge.node.fields.slug}>
                  <Link to={`/posts${edge.node.fields.slug}`}>
                    {edge.node.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ArchiveList>
          </Widget>
        </AsideLayout>
      </>
    )}
  />
)

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
