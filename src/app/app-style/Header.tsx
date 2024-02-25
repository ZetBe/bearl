import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

export default function Header() {
  return (
    <h1>
      <Link href="/">bearl</Link>
    </h1>
  )
}
