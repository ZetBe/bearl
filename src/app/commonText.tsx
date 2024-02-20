'use client'
import { useState, useEffect } from 'react'
import styles from './commonText.module.css'

export default function CommonText() {
  const [textareaContent, setTextareaContent] = useState<string[]>([])
  const [modifiedContent, setModifiedContent] = useState<string[]>([])
  const [text, setText] = useState<string>('')

  function textareaInput(event: any) {
    const now = event.target.value.split('\n')
    setTextareaContent(now)
    setText(event.target.value)
  }

  useEffect(() => {
    const updatedContent = textareaContent.map((item, index) => {
      if (
        textareaContent[index].trim() === '' &&
        index < textareaContent.length - 1 &&
        textareaContent[index + 1].trim() === ''
      ) {
        return '<br>\n'
      } else if (
        textareaContent[index].trim() === '' &&
        index < textareaContent.length - 1 &&
        textareaContent[index + 1] !== ''
      ) {
        return '<br>\n\n'
      } else if (
        textareaContent[index].trim() !== '' &&
        index < textareaContent.length - 1 &&
        textareaContent[index + 1].trim() === ''
      ) {
        return item + '\n\n'
      } else if (
        textareaContent[index].trim() !== '' &&
        index < textareaContent.length - 1 &&
        textareaContent[index + 1].trim() !== ''
      ) {
        return item + '\n'
      }
      return item
    })
    setModifiedContent(updatedContent)
  }, [textareaContent])

  return (
    <>
      <div className={styles.body}>
        <textarea
          onInput={textareaInput}
          value={text}
          className={styles.input}
        ></textarea>
        <textarea
          readOnly
          value={modifiedContent.join('')}
          className={styles.output}
        ></textarea>
      </div>
    </>
  )
}
