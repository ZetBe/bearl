'use client'
import { useState, useEffect } from 'react'
import styles from './notionText.module.css'

export default function NotionText() {
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
      const nowText = textareaContent[index].trim()
      const shapBr = 8
      const br = '<br>'
      if (
        nowText === '' &&
        index < textareaContent.length - 1 &&
        textareaContent[index + 1].trim() === ''
      ) {
        return '<br>\n'
      } else if (
        nowText === '' &&
        index < textareaContent.length - 1 &&
        textareaContent[index + 1] !== ''
      ) {
        return '<br>\n\n'
      } else if (
        nowText !== '' &&
        index < textareaContent.length - 1 &&
        textareaContent[index + 1].trim() === '' &&
        nowText[0] !== '#'
      ) {
        return item + '\n\n'
      } else if (
        nowText !== '' &&
        index < textareaContent.length - 1 &&
        textareaContent[index + 1].trim() !== '' &&
        nowText[0] !== '#'
      ) {
        return item + '\n'
      } else if (
        nowText !== '' &&
        index < textareaContent.length - 1 &&
        textareaContent[index + 1].trim() === '' &&
        nowText[0] === '#'
      ) {
        let i: number = 0
        while (i < nowText.length && nowText[i] === '#') {
          i += 1
        }
        if (index === 0 || i === 4) {
          return item + '\n\n'
        }
        return br.repeat(shapBr - i * 2 - 1) + '\n\n' + item + '\n\n'
      } else if (
        nowText !== '' &&
        index < textareaContent.length - 1 &&
        textareaContent[index + 1].trim() !== '' &&
        nowText[0] === '#'
      ) {
        let i: number = 0
        while (i < nowText.length && nowText[i] === '#') {
          i += 1
        }
        if (index === 0 || i === 4) {
          return item + '\n'
        }
        return br.repeat(shapBr - i * 2 - 1) + '\n\n' + item + '\n'
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
