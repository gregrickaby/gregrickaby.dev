import React from "react"
import styled from "styled-components"

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
