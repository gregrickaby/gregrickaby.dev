import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  background: linear-gradient(0.38turn, #000, #250238);
  margin-bottom: 56px;

  h1 {
    margin: 0 0 10px;
  }

  p {
    color: #fff;
  }
`
const HeaderContainer = styled.div`
  padding: 48px;
`

const Header = ({ siteTitle, siteDescription }) => (
  <HeaderWrapper className="site-footer">
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
