import styled from 'styled-components'

interface TextAreaProps {
  $isHovered?: boolean
  $isFocus?: boolean
}

const TextArea = styled.textarea<TextAreaProps>`
  resize: none;
  width: 48%;
  height: 500px;
  border: 2px solid #ccc;
  margin-top: 30px;
  transition: border-color 0.3s;

  ${(props) => props.$isHovered && `border-color: black;`}
  ${(props) => props.$isFocus && `border-color: black`}
`
export default TextArea
