'use client'

import React, { useState, useId } from 'react'
import Select from 'react-select'
import CommonText from './commonText'
import NotionText from './notionText'
import Footer from './Footer'

const body = {
  height: 'auto',
  minHeight: '100%',
  paddingBottom: '300px',
}

export default function Home() {
  const [select, setSelect] = useState('')
  const options = [
    { value: 'notion', label: '노션/Notion' },
    { value: 'md', label: '.md 파일' },
  ]
  return (
    <>
      <h1>brbr</h1>
      <div style={body}>
        <Select
          options={options}
          instanceId={useId()}
          defaultValue={options[0]}
          onChange={(e: any) => setSelect(e.value)}
          value={options.filter(function (option) {
            return option.value === select
          })}
        />
        {select === 'md' && <CommonText></CommonText>}
        {select === 'notion' && <NotionText></NotionText>}
        <hr></hr>
      </div>
      <Footer></Footer>
    </>
  )
}
