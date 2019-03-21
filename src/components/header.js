import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  background: #000000;
  margin-bottom: 48px;

  h1 {
    margin: 0 0 0.5rem;
  }

  p {
    color: #fff;
  }
`
const HeaderContainer = styled.div`
  max-width: 90%;
  padding: 1rem;
`

const Header = ({ siteTitle, siteDescription }) => (
  <HeaderWrapper>
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
