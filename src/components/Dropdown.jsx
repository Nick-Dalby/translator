/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import { HiArrowCircleRight } from 'react-icons/hi'
import styles from './dropdown.module.css'

function Dropdown({ options, selected, onSelectedChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return
      }
      setOpen(false)
    }
    document.body.addEventListener('click', onBodyClick, { capture: true })

    return () => {
      document.body.removeEventListener('click', onBodyClick, { capture: true })
    }
  }, [])

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null
    }

    return (
      <div
        className={styles.item}
        key={option.value}
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    )
  })

  return (
    <div ref={ref}>
      <div>
        <div
          onClick={() => setOpen(!open)}
          className={`${styles.dropdown} ${
            open ? `${styles.visible} ${styles.active}` : ''
          }`}
        >
          <div className={styles.choose}>
            <div className={styles.text}>{selected.label}</div>
            <HiArrowCircleRight className={styles.icon} />
          </div>
          <div className={`${styles.menu} ${open ? styles.visible : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
