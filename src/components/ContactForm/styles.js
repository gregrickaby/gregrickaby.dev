import styled from "styled-components"

export const ContactLayout = styled.div`
  form {
    width: 400px;
  }

  .field {
    font-family: sans-serif;
    margin-bottom: 24px;
  }

  label {
    display: block;
    margin-bottom: 12px;
  }

  input,
  textarea {
    padding: 6px;
    width: 400px;
  }

  input[type="submit"] {
    background: linear-gradient(0.38turn, #000, #250238);
    color: #fff;
    padding: 12px;
  }
`
