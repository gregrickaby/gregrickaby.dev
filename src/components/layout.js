import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui/"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

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
      <ThemeProvider theme={theme}>
        <div className="site">
          <Header
            siteTitle={data.site.siteMetadata.title}
            siteDescription={data.site.siteMetadata.description}
          />
          <main className="site-content">{children}</main>
          <Sidebar />
          <Footer />
        </div>
      </ThemeProvider>
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
