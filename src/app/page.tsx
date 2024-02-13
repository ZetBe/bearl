'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [textareaContent, setTextareaContent] = useState<string[]>([])
  const [modifiedContent, setModifiedContent] = useState<string[]>([])

  function textareaChange(event: any) {
    event.preventDefault()
    const now = event.target.value.split('\n')
    setTextareaContent(now)
  }

  useEffect(() => {
    const updatedContent = textareaContent.map((item, index) => {
      if (
        textareaContent[index] === '' &&
        index < textareaContent.length - 1 &&
        textareaContent[index + 1] === ''
      ) {
        return '<br>\n'
      } else if (
        textareaContent[index] === '' &&
        index < textareaContent.length - 1 &&
        textareaContent[index + 1] !== ''
      ) {
        return '<br>\n\n'
      }
      return item + '\n\n'
    })

    setModifiedContent(updatedContent)
  }, [textareaContent])

  return (
    <>
      <h1>brbr</h1>
      <div className={styles.body}>
        <textarea onChange={textareaChange} className={styles.input}></textarea>
        <textarea
          readOnly
          value={modifiedContent.join('')}
          className={styles.output}
        ></textarea>
      </div>
    </>
  )
}
