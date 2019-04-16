import styled from "styled-components"

export const ContactLayout = styled.div`
  form {
    width: 400px;
  }

  .field {
    position: relative;
    font-family: sans-serif;
    margin-bottom: 24px;
  }

  span {
    color: #f00;
  }

  label {
    display: block;
    margin-bottom: 12px;
  }

  input,
  textarea {
    border: 1px solid grey;
    border-radius: 5px;
    padding: 12px;
    transition: border 0.1s ease-in-out;
    width: 400px;

    &:valid {
      border-color: green;
      outline-color: green;
    }
  }

  input[type="file"] {
    border-color: gray;
  }

  input[type="submit"] {
    background: linear-gradient(0.38turn, #000, #250238);
    color: #fff;
    padding: 12px;
  }
`
