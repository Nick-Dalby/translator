// eslint-disable-next-line react/prop-types
function Button({ title, handleClick }) {
  return (
    <button type="button" onClick={() => handleClick()}>
      {title}
    </button>
  )
}
export default Button
