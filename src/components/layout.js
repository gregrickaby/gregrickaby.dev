/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Spring } from "react-spring/renderprops"
import Header from "./header"
import Archive from "./archive"
import "./layout.css"

const MainLayout = styled.main`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 4fr 1fr;
  margin: 1rem auto;
  max-width: 90%;
`

const FooterLayout = styled.footer`
  margin: 0 auto;
  max-width: 90%;
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: { regex: "/bg/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />

        <div style={{}}>
          <Spring
            from={{ height: location.pathname === "/" ? 100 : 200 }}
            to={{ height: location.pathname === "/" ? 200 : 100 }}
          >
            {styles => (
              <div style={{ overflow: "hidden", ...styles }}>
                <Img fluid={data.file.childImageSharp.fluid} />
              </div>
            )}
          </Spring>

          <MainLayout>
            <div>{children}</div>
            <Archive />
          </MainLayout>
          <FooterLayout>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </FooterLayout>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout
