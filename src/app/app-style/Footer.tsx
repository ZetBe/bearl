import styled from 'styled-components'
import { SiVelog } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { sendGTMEvent } from '@next/third-parties/google'

const F = styled.footer`
  position: relative;
  width: 100%;
  height: 40px;
  background-color: #f0f0f0;
  padding: 10px;
  text-align: center;
  font-size: 12px;
  margin-top: 50%;
`

export default function Footer() {
  return (
    <F>
      만든 사람: 서희원(Kevin)
      <Link
        href="https://github.com/ZetBe"
        target="_blank"
        onClick={() =>
          sendGTMEvent({ event: 'buttonClicked', value: 'github' })
        }
      >
        <FaGithub />
      </Link>
      <Link
        href="https://velog.io/@zetbe/posts"
        target="_blank"
        onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'velog' })}
      >
        <SiVelog />
      </Link>
    </F>
  )
}
