import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { AsideLayout, Widget, Bio, Avatar, ArchiveList } from "./styles"

export default () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <AsideLayout className="site-sidebar">
          <Widget>
            <h3>About</h3>
            <img
              style={Avatar}
              src="https://avatars3.githubusercontent.com/u/200280?s=195&v=4"
              alt="Greg"
            />
            <Bio>
              <p>
                Director of Engineering @WebDevStudios / Author & Tech Editor
                for @fordummies / @gatsbyjs Maintainer
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
