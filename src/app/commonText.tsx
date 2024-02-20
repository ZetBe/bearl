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
          placeholder="입력"
        ></textarea>
        <textarea
          readOnly
          value={modifiedContent.join('')}
          className={styles.output}
          placeholder="출력"
        ></textarea>
      </div>
      <h2>Mark Down</h2>
      <p>
        여기서는 일반적인 마크다운 문서에 대해 br태그 적용 가능한 페이지입니다.
      </p>
      <p>
        여러분께서 만약 마크다운 문서를 작성하다가 개행만으로 자동 br태그를
        만들고 싶다?<br></br>그렇다면 잘 오신겁니다!
      </p>
      <p>
        일단 붙어넣기 해보시면 바로 오른쪽에 개행한 횟수 -1 만큼 br태그가
        생성되는 모습을 볼 수 있습니다.
      </p>
    </>
  )
}
