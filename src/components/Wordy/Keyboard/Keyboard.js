import { useState, useEffect } from 'react'

import { defaultKeyColors, keys } from './keys'
import './Keyboard.css'

const Key = ({ value, color, event }) => {
  const handleClick = () => {
    window.dispatchEvent(event)
  }

  const alignmentClass = 'd-flex justify-content-center align-items-center'
  const borderClass = 'border boder-2'

  return (
    <div
      role='button'
      onClick={handleClick}
      className={`${alignmentClass} ${borderClass} ${color} rounded m-1 text-white key`}
    >
      {value}
    </div>
  )
}

const Keyboard = ({ word, wordColors }) => {
  const [colors, setColors] = useState(defaultKeyColors)
  const [keyRows, setKeyRows] = useState([])

  useEffect(() => {
    setColors(values => {
      const newColors = { ...values }
      const isEmptyWord = word.every(v => v === '')

      if (isEmptyWord) {
        return defaultKeyColors
      }

      word.forEach((v, i) => {
        if (wordColors[i] !== 'bg-white' && values[v] !== 'bg-success') {
          newColors[v] = wordColors[i]
        }
      })

      return newColors
    })
  }, [wordColors, word])

  useEffect(() => {
    setKeyRows(
      keys.map(row => row.map(({ key, keyCode, icon }) => {
        const isSpecialButton = ['Enter', 'Backspace'].includes(key)

        return ({
          value: isSpecialButton ? icon : key.toUpperCase(),
          color: isSpecialButton ? 'bg-transparent' : colors[key],
          event: new KeyboardEvent('keydown', { key, keyCode })
        })
      }))
    )
  }, [colors])

  return (
    <div className='mt-md-3 keyboard'>
      {
        keyRows.map((keyRow, i) => (
          <div key={i} className='d-flex'>
            {
              keyRow.map((v, j) => (
                <Key
                  key={`${i}_${j}`}
                  value={v.value}
                  color={v.color}
                  event={v.event}
                />
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

export default Keyboard