import { Link } from "gatsby"
import React from "react"
import { MenuLayout } from "./styles"

const Menu = props => (
  <MenuLayout>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </MenuLayout>
)

export default Menu
