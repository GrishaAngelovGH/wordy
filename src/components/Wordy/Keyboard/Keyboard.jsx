import { useMemo } from 'react'

import { keys } from './keys'
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

const Keyboard = ({ keyColors }) => {
  const keyRows = useMemo(() => {
    return keys.map(row => row.map(({ key, keyCode, icon }) => {
      const isSpecialButton = ['Enter', 'Backspace'].includes(key)

      return ({
        value: isSpecialButton ? icon : key.toUpperCase(),
        color: isSpecialButton ? 'bg-transparent' : keyColors[key],
        event: new KeyboardEvent('keydown', { key, keyCode })
      })
    }))
  }, [keyColors])

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