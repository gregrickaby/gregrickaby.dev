import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { HeaderWrapper, HeaderContainer } from "./styles"

const Header = ({ siteTitle, siteDescription }) => (
  <HeaderWrapper className="site-header">
    <HeaderContainer>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <p>{siteDescription}</p>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
