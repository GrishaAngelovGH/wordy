import { useState, useEffect, useRef } from 'react'

import Box from './Box'
import Modal from './Modal'
import Keyboard from './Keyboard'

import {
  availableWords,
  defaultWords,
  defaultColors,
  getRandomWord,
  insertLetter,
  deleteLastLetter,
  colorize
} from './words'

const isLetterKey = keyCode => keyCode > 64 && keyCode < 91
const isEnterKey = keyCode => keyCode === 13
const isBackspace = keyCode => keyCode === 8
const isComplete = colors => colors.every(v => v === 'bg-success')

const Wordy = () => {
  const [words, setWords] = useState(defaultWords)
  const [colors, setColors] = useState(defaultColors)

  const [targetWord, setTargetWord] = useState(getRandomWord(availableWords))
  const [showRestartButton, setShowRestartButton] = useState(false)
  const [showTargetWord, setShowTargetWord] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [index, setIndex] = useState(0)

  const keydownRef = useRef(null)

  const processLetterKey = (key, currentWord) => {
    setWords(oldWords => {
      const newWords = [...oldWords]
      newWords[index] = insertLetter(key, [...currentWord])
      return newWords
    })
  }

  const processEnterKey = (colorizedWord, isLastWord) => {
    const isCompleteWord = isComplete(colorizedWord)

    isCompleteWord && setShowSuccessMessage(true)
    isCompleteWord && setShowRestartButton(true)

    !isCompleteWord && isLastWord && setShowTargetWord(true)
    !isCompleteWord && isLastWord && setShowRestartButton(true)

    setColors(oldColors => {
      const newColors = [...oldColors]
      newColors[index] = colorizedWord
      return newColors
    })

    setIndex(index + 1)
  }

  const processBackspace = currentWord => {
    currentWord && setWords(oldWords => {
      const newWords = [...oldWords]
      newWords[index] = deleteLastLetter([...currentWord])
      return newWords
    })
  }

  const handleKeydown = ({ key, keyCode }) => {
    const currentWord = words[index]
    const isCurrentWordComplete = currentWord && !currentWord.includes('')
    const colorizedWord = colorize(currentWord, targetWord)
    const isLastWord = index === words.length - 1

    isLetterKey(keyCode) && !showRestartButton && processLetterKey(key, currentWord)

    isEnterKey(keyCode) && isCurrentWordComplete && processEnterKey(colorizedWord, isLastWord)

    isBackspace(keyCode) && processBackspace(currentWord)
  }

  const handleRestart = () => {
    setIndex(0)
    setShowRestartButton(false)
    setShowTargetWord(false)
    setShowSuccessMessage(false)

    setWords(defaultWords)
    setColors(defaultColors)
    setTargetWord(getRandomWord(availableWords))
  }

  useEffect(() => { keydownRef.current = handleKeydown })

  useEffect(() => {
    const cb = e => keydownRef.current(e)

    window.addEventListener('keydown', cb)

    return () => {
      window.removeEventListener('keydown', cb)
    }
  }, [])

  const prevIndex = index - 1 < 0 ? 0 : index - 1

  return (
    <div className='row mt-1'>
      <div className='col-md-12'>
        <h3 className='alert alert-success p-0'>Wordy</h3>

        <button
          onClick={handleRestart}
          className={`btn btn-light ${showRestartButton ? 'visible' : 'invisible'}`}
        >
          Restart
        </button>

        <div className='mt-1'>
          {
            words.map((word, i) => (
              <div key={i} className='d-flex justify-content-center'>
                {
                  word.map((v, j) => (
                    <Box
                      key={`${i}_${j}`}
                      value={v.toUpperCase()}
                      color={colors[i][j]}
                    />
                  ))
                }
              </div>
            ))
          }
        </div>

        <Keyboard word={words[prevIndex]} wordColors={colors[prevIndex]} />

        {showTargetWord && (<Modal title={'Target Word'} message={targetWord.toUpperCase()} />)}
        {showSuccessMessage && (<Modal title={'Correct !'} message={'You successfully guessed the word'} />)}
      </div>
    </div>
  )
}

export default Wordy