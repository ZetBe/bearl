import Link from 'next/link'
import styled from 'styled-components'

const TitleLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

export default function Header() {
  return (
    <h1>
      <TitleLink href="/">bearl</TitleLink>
    </h1>
  )
}
