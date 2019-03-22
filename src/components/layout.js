/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import Sidebar from "./sidebar"
import "./layout.css"

const MainLayout = styled.main`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 4fr 1fr;
  margin: 1rem auto;
  max-width: 90%;
`

const FooterLayout = styled.footer`
  background: linear-gradient(0.38turn, #000, #250238);
  padding: 56px;
  margin: 0 auto;

  p,
  a {
    color: #fff;
    font-size: 16px;
    font-family: sans-serif;
    transition: color 0.1s ease-in-out;
  }

  a:hover {
    color: #ccc;
  }
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteDescription={data.site.siteMetadata.description}
        />

        <div style={{}}>
          <MainLayout>
            <div>{children}</div>
            <Sidebar />
          </MainLayout>
          <FooterLayout>
            <p>
              © {new Date().getFullYear()}{" "}
              <a href="https://gregrickaby.com">Greg Rickaby</a> | Powered by{" "}
              <a href="https://gatsbyjs.org">GatsbyJS</a>,{" "}
              <a href="https://www.netlifycms.org/">NetlifyCMS</a>,{" "}
              <a href="https://github.com/gregrickaby/gregrickaby.dev">
                Github
              </a>{" "}
              and <a href="https://netlify.com">Netlify</a>.
            </p>
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
