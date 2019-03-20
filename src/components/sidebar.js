/**
 * Archive component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const ArchiveList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    color: #000000;
    font-family: sans-serif;
  }
`

const Avatar = {
  borderRadius: "50%",
  height: "50%",
  width: "100%",
}

const Bio = styled.p`
  font-family: sans-serif;
`

export default () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <div>
            <h3>About</h3>
            <img
              style={Avatar}
              src="https://avatars3.githubusercontent.com/u/200280?s=460&v=4"
              alt="Greg"
            />
            <Bio>
              Husband, father, the Director of Engineering at WebDevStudios, and
              Author & Tech Editor for For Dummies.
            </Bio>
          </div>
          <div>
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
          </div>
        </aside>
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
