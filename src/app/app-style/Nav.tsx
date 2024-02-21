import styled from 'styled-components'
import Link from 'next/link'

const StyledNav = styled.nav`
  background-color: #333;
  padding: 10px;
  height: auto,
  minHeight: 100%,
  paddingBottom: 300px,
`

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`

const StyledLi = styled.li`
  margin-right: 30px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

const Nav = () => {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <StyledLink href="/">홈</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink href="/notion">Notion</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink href="/markdown">md</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  )
}

export default Nav
