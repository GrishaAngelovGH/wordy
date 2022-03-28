import { useState, useEffect, useRef } from 'react'

import Box from './Box'
import Keyboard from './Keyboard'
import availableWords from './words'

const getRandomWord = words => words[Math.floor(Math.random() * words.length)]

const Wordy = () => {
    const [words, setWords] = useState([
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ])

    const [colors, setColors] = useState([
        ['bg-white', 'bg-white', 'bg-white', 'bg-white', 'bg-white'],
        ['bg-white', 'bg-white', 'bg-white', 'bg-white', 'bg-white'],
        ['bg-white', 'bg-white', 'bg-white', 'bg-white', 'bg-white'],
        ['bg-white', 'bg-white', 'bg-white', 'bg-white', 'bg-white'],
        ['bg-white', 'bg-white', 'bg-white', 'bg-white', 'bg-white'],
        ['bg-white', 'bg-white', 'bg-white', 'bg-white', 'bg-white']
    ])

    const [targetWord, setTargetWord] = useState(getRandomWord(availableWords))
    const [showRestartButton, setShowRestartButton] = useState(false)
    const [showTargetWord, setShowTargetWord] = useState(false)
    const [index, setIndex] = useState(0)

    const keyDownRef = useRef(null)

    const isLetterKey = keyCode => keyCode > 64 && keyCode < 91
    const isEnterKey = keyCode => keyCode === 13
    const isBackspace = keyCode => keyCode === 8

    const insertLetter = (letter, word) => {
        const availablePosition = word.indexOf('')
        word[availablePosition] = letter
        return word
    }

    const deleteLastLetter = word => {
        if (!word.includes('')) {
            word[word.length - 1] = ''
            return word
        }

        const availablePosition = word.indexOf('')
        word[availablePosition - 1] = ''
        return word
    }

    const colorize = word => word.map((v, i) => {
        if (v === targetWord[i]) return 'bg-success'
        if (v !== targetWord[i] && targetWord.includes(v)) return 'bg-warning'
        return 'bg-secondary'
    })

    const isComplete = colors => colors.every(v => v === 'bg-success')

    const handleRestart = () => {
        setWords([
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', '']
        ])

        setColors([
            ['bg-white', 'bg-white', 'bg-white', 'bg-white', 'bg-white'],
            ['bg-white', 'bg-white', 'bg-white', 'bg-white', 'bg-white'],
            ['bg-white', 'bg-white', 'bg-white', 'bg-white', 'bg-white'],
            ['bg-white', 'bg-white', 'bg-white', 'bg-white', 'bg-white'],
            ['bg-white', 'bg-white', 'bg-white', 'bg-white', 'bg-white'],
            ['bg-white', 'bg-white', 'bg-white', 'bg-white', 'bg-white']
        ])

        setIndex(0)
        setShowRestartButton(false)
        setShowTargetWord(false)
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
            const colorizedWord = colorize(currentWord)

            isComplete(colorizedWord) && setShowRestartButton(true)

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
    const targetWordVisibility = showTargetWord ? 'visible' : 'invisible'

    return (
        <div className="row mt-1">
            <div className="col-md-12">
                <h3 className="alert-success rounded">Wordy</h3>

                <h3 className={`alert-info rounded ${targetWordVisibility}`}>Target word: {targetWord}</h3>

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

                <Keyboard />
            </div>
        </div>
    )
}

export default Wordy