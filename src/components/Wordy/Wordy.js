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

  const keyDownRef = useRef(null)

  const handleRestart = () => {
    setWords(defaultWords)
    setColors(defaultColors)

    setIndex(0)
    setShowRestartButton(false)
    setShowTargetWord(false)
    setShowSuccessMessage(false)
    setTargetWord(getRandomWord(availableWords))
  }

  const handleKeyDown = ({ key, keyCode }) => {
    const isCurrentWordComplete = words[index] && !words[index].includes('')
    const isLastWord = index === Object.values(words).length - 1

    if (isLetterKey(keyCode) && !showRestartButton) {
      const currentWord = words[index]

      if (currentWord) {
        const word = insertLetter(key, [...currentWord])

        const newWords = [...words]
        newWords[index] = word

        setWords(newWords)
      }
    }

    if (isEnterKey(keyCode) && isCurrentWordComplete) {
      const currentWord = words[index]
      const colorizedWord = colorize(currentWord, targetWord)

      if (isComplete(colorizedWord)) {
        setShowSuccessMessage(true)
        setShowRestartButton(true)
      }

      if (!isComplete(colorizedWord) && isLastWord) {
        setShowTargetWord(true)
        setShowRestartButton(true)
      }

      const newColors = [...colors]
      newColors[index] = colorizedWord

      setColors(newColors)
      setIndex(v => v + 1)
    }

    if (isBackspace(keyCode)) {
      const currentWord = words[index]

      if (currentWord) {
        const word = deleteLastLetter([...currentWord])

        const newWords = [...words]
        newWords[index] = word

        setWords(newWords)
      }
    }
  }

  useEffect(() => { keyDownRef.current = handleKeyDown }) // update after each render

  useEffect(() => {
    const cb = e => keyDownRef.current(e)

    window.addEventListener('keydown', cb)

    return () => {
      window.removeEventListener('keydown', cb)
    }
  }, [])

  const restartButtonVisibility = showRestartButton ? 'visible' : 'invisible'

  const prevIndex = index - 1 < 0 ? 0 : index - 1

  return (
    <div className="row mt-1">
      <div className="col-md-12">
        <h3 className="alert alert-success">Wordy</h3>

        {showTargetWord && (<Modal title={'Target Word'} message={targetWord.toUpperCase()} />)}
        {showSuccessMessage && (<Modal title={'Correct !'} message={'You successfully guessed the word'} />)}

        <button className={`btn btn-light ${restartButtonVisibility}`} onClick={handleRestart}>
          Restart
        </button>

        <div className="mt-1">
          {
            words.map((word, i) => (
              <div key={i} className="d-flex justify-content-center">
                {
                  word.map((v, j) => (
                    <Box key={`${i}_${j}`} value={v.toUpperCase()} color={colors[i][j]} />
                  ))
                }
              </div>
            ))
          }
        </div>

        <Keyboard word={words[prevIndex]} wordColors={colors[prevIndex]} />
      </div>
    </div>
  )
}

export default Wordy