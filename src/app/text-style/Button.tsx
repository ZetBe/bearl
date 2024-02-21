import styled from 'styled-components'

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  position: absolute;
  bottom: 2px;
  right: 2px;

  &:hover {
    background-color: white;
    color: black;
  }
`

export default Button
