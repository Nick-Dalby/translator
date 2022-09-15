import { useEffect, useState } from 'react'
import Button from './components/Button'
import Dropdown from './components/Dropdown'
import Textarea from './components/Textarea'
import Translate from './components/Translate'

const languages = [
  {
    label: 'German',
    value: 'DE',
  },
  {
    label: 'Spanish',
    value: 'ES',
  },
  {
    label: 'Japanese',
    value: 'JA',
  },
  {
    label: 'Ukrainian',
    value: 'UK',
  },
  {
    label: 'Italian',
    value: 'IT',
  },
  {
    label: 'French',
    value: 'FR',
  },
  {
    label: 'Dutch',
    value: 'NL',
  },
  {
    label: 'English',
    value: 'EN-GB',
  },
  {
    label: 'Chinese',
    value: 'ZH',
  },
]

function App() {
  const [selected, setSelected] = useState(languages[0])
  const [text, setText] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [debouncedText, setDebouncedText] = useState(text)
  const [translatedText, setTranslatedText] = useState('')

  const [textToTranslate, setTextToTranslate] = useState('')
  const [languageToTranslate, setLanguageToTranslate] = useState('')

  // reduce increase time to query while typing
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text)
    }, 500)

    return () => {
      clearTimeout(timerId)
    }
  }, [text])

  // or just use the button to make translation requests
  const handleClick = () => {
    setTextToTranslate(text)
    setLanguageToTranslate(selected.value)
  }

  return (
    <div className="container">
      <Dropdown
        options={languages}
        selected={selected}
        onSelectedChange={setSelected}
      />
      <div className="wrapper">
        <div className="input">
          <Textarea text={text} setText={setText} placeholder="hello world!" />
        </div>
        <Button title="translate" text={text} handleClick={handleClick} />
        <div className="output">
          <Translate
            // language={selected.value}
            // text={debouncedText}
            language={languageToTranslate}
            text={textToTranslate || 'hello world!'}
            setTranslatedText={setTranslatedText}
          />
          <Textarea text={translatedText || 'translating...'} />
        </div>
      </div>
    </div>
  )
}

export default App
