'use client'

import React, { useState } from 'react'
import Select from 'react-select'
import CommonText from './commonText'
import NotionText from './notionText'

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
    </>
  )
}
