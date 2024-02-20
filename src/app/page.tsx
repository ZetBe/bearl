'use client'

import React, { useState } from 'react'
import Select from 'react-select'
import CommonText from './commonText'
import NotionText from './notionText'
import { SiVelog } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export default function Home() {
  const [select, setSelect] = useState('')
  const options = [
    { value: 'notion', label: '노션/Notion' },
    { value: 'md', label: '.md 파일' },
  ]
  return (
    <>
      <h1>brbr</h1>
      <Select
        options={options}
        defaultValue={options[0]}
        onChange={(e: any) => setSelect(e.value)}
        value={options.filter(function (option) {
          return option.value === select
        })}
      />
      {select === 'md' && <CommonText></CommonText>}
      {select === 'notion' && <NotionText></NotionText>}
      <hr></hr>
      <h3>
        만든 사람: 서희원(ZetBe || Kevin)
        <Link href="https://github.com/ZetBe" target="_blank">
          <FaGithub />
        </Link>
        <Link href="https://velog.io/@zetbe/posts" target="_blank">
          <SiVelog />
        </Link>
      </h3>
    </>
  )
}
