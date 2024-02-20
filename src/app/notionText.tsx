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
          placeholder="입력"
          onInput={textareaInput}
          value={text}
          className={styles.input}
        ></textarea>
        <textarea
          readOnly
          placeholder="출력"
          value={modifiedContent.join('')}
          className={styles.output}
        ></textarea>
      </div>
      <h2>Notion text</h2>
      <p>
        여기서는 Notion(노션)에서 글을 복사해서 다른 마크다운 파일에 붙여넣기 할
        경우, 사용하는 공간입니다.
      </p>
      <p>
        여러분께서 만약 Notion을 통해 brbr사이트를 거쳐 일반 마크다운 페이지로
        텍스트 붙이기할 경우, 생기는 문제를 어느정도 해결하기 위해 만들었습니다.
      </p>
      <p>
        그 문제는 Notion의 블록이란 개념을 통해 알 수 있습니다. <br></br>{' '}
        Notion에서는 블록을 기준으로 텍스트, 이미지 등 컨텐츠를 구분합니다.
      </p>
      <p>
        그래서 Notion의 페이지를 하나 전체 선택(Ctrl+A)해서 복사(Ctrl+C) 후 다른
        페이지에 붙여넣기(Ctrl+V) 할 경우, <br></br>블록을 기준으로 얼마나
        개행되었는지 상관없이 블록과 블록 사이에 개행 두 번 만 일어납니다.
      </p>
      <p>
        이 문제를 어느정도 해결하기 위해서 일단 제목을 기준으로 윗 방향에
        br태그를 붙이는 방향으로 설정했습니다.
      </p>
      <p>
        그리고 제목은 보통 크기에 따라 #으로 구분되므로 #의 개수에 따라
        반비례하여 br태그가 나타납니다.
      </p>
    </>
  )
}
