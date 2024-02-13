'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [textareaContent, setTextareaContent] = useState([])
  const [modifiedContent, setModifiedContent] = useState([])

  function textareaChange(event: any) {
    event.preventDefault()
    const now = event.target.value.split('\n')
    setTextareaContent(now)
  }

  useEffect(() => {
    // This code will run after the component has rendered and the state has been updated
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

    // Update the state with the modified content
    setModifiedContent(updatedContent)
  }, [textareaContent]) // Add textareaContent as a dependency to useEffect

  return (
    <>
      <h1>brbr</h1>
      <textarea onChange={textareaChange} className={styles.input}></textarea>
      <textarea
        readOnly
        value={modifiedContent.join('')}
        className={styles.output}
      ></textarea>
    </>
  )
}
