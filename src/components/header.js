import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "./menu"
import { useColorMode } from "theme-ui"

const Header = ({ siteTitle, siteDescription }) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <>
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
      <button
        onClick={e => {
          setColorMode(colorMode === "light" ? "dark" : "light")
        }}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </button>
    </>
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
