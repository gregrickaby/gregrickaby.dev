import React from "react"
import { FooterLayout } from "./styles"

const Footer = () => {
  return (
    <FooterLayout className="site-footer">
      <p>
        © {new Date().getFullYear()}{" "}
        <a href="https://gregrickaby.com">Greg Rickaby</a> | Powered by{" "}
        <a href="https://gatsbyjs.org">GatsbyJS</a>,{" "}
        <a href="https://www.netlifycms.org/">NetlifyCMS</a>,{" "}
        <a href="https://github.com/gregrickaby/gregrickaby.dev">Github</a> and{" "}
        <a href="https://netlify.com">Netlify</a>.
      </p>
    </FooterLayout>
  )
}

export default Footer
