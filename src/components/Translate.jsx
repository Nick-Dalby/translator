/* eslint-disable react/prop-types */
import axios from 'axios'
import { useEffect } from 'react'

function Translate({ language, text, setTranslatedText }) {
  const url = 'https://api-proxy-oz9bv7yj2-nick-dalby.vercel.app/translate'

  useEffect(() => {
    const fetchTranslation = async (text, lang) => {
      const result = await axios(`${url}/${text}/${lang}`)
      setTranslatedText(result.data.translations[0].text)
    }
    fetchTranslation(text, language)
  }, [language, text, setTranslatedText])
}
export default Translate
