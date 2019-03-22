import React from "react"
import styled from "styled-components"

export const PostTitle = styled.h1`
  color: #000c;
  font-size: 46px;
  letter-spacing: 0;
  line-height: 1.25em;
  margin: 0 0 48px;
`

export const ImageLayout = styled.div`
  margin-bottom: 48px;
`

const postContent = ({ className, content }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  />
)

export const StyledContent = styled(postContent)`
  margin: 0 auto;
  max-width: 700px;

  p,
  ul,
  ol {
    -moz-osx-font-smoothing: grayscale;
    color: #000c;
    font-feature-settings: "liga";
    font-size: 21px;
    font-family: Georgia, "Times New Roman", Times, serif;
    letter-spacing: -0.0666667px;
    line-height: 33.1833px;
    overflow-wrap: break-word;
    text-rendering: optimizelegibility;
  }

  a {
    color: #bc0ce8;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: #250238;
    }
  }

  blockquote {
    background: linear-gradient(0.38turn, #bc0ce8, #250238);
    padding: 24px 24px 24px 60px;
    margin-left: -95px;
    width: calc(100% + 190px);

    p {
      color: #fff;
      font-size: 26px;
      letter-spacing: -0.012em;
      line-height: 1.48;
    }
  }
`