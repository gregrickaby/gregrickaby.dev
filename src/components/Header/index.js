import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "../Menu/"
import { HeaderWrapper, HeaderContainer } from "./styles"
import { useColorMode } from "theme-ui"

const Header = ({ siteTitle, siteDescription }) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <HeaderWrapper className="site-header">
      <HeaderContainer>
        <button
          onClick={e => {
            setColorMode(colorMode === "light" ? "dark" : "light")
          }}
        >
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </button>
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
        <Menu />
      </HeaderContainer>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
