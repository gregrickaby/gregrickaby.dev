import styled from "styled-components"

export const AsideLayout = styled.aside`
  margin-top: 36px;
  color: #000c;
  font-size: 15px;
  line-height: 1.3;

  a {
    color: #bc0ce8;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: #250238;
    }
  }
`

export const Widget = styled.div`
  margin-bottom: 48px;
`

export const Bio = styled.div``

export const Avatar = {
  borderRadius: "50%",
  height: "auto",
  maxWidth: "60%",
}

export const ArchiveList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    color: #000c;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: #111;
    }
  }
`
