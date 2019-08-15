import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import {
  Layout as ThemeLayout,
  Header as HeaderContainer,
  Main,
  Container,
  Footer as FooterContainer,
} from "theme-ui"
import Header from "./header"
import Sidebar from "./sidebar"
import Footer from "./footer"

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
      <ThemeLayout>
        <HeaderContainer>
          <Header
            siteTitle={data.site.siteMetadata.title}
            siteDescription={data.site.siteMetadata.description}
          />
        </HeaderContainer>
        <Main>
          <Container>{children}</Container>
        </Main>
        <Sidebar />
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </ThemeLayout>
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
