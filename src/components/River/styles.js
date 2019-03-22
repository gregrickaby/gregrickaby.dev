import styled from "styled-components"

export const River = styled.article`
  border-radius: 4px;
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  margin: 24px 0;
  padding: 24px;

  a {
    color: #000c;
    text-decoration: none;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: #bc0ce8;
    }
  }

  time {
    font-size: 14px;
    padding: 12px 0;
    display: block;
  }

  h2 {
    margin-bottom: 0;
  }

  p {
    font-size: 21px;
  }

  .read-more {
    color: #bc0ce8;
    font-size: 18px;
    text-decoration: underline;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: #000c;
    }
  }
`
