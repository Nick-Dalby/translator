/* eslint-disable react/prop-types */
function Textarea({ text, setText, placeholder }) {
  return (
    <textarea
      name="text"
      id="text"
      cols="20"
      rows="5"
      autoComplete="off"
      spellCheck="false"
      maxLength={250}
      value={text}
      placeholder={placeholder}
      onChange={(e) => setText(e.target.value)}
    />
  )
}
export default Textarea
