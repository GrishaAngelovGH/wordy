import { useState, useEffect, useRef } from 'react'

import Box from './Box'

const Wordy = () => {
    const [words, setWords] = useState([
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ])

    const [index, setIndex] = useState(0)
    const keyDownRef = useRef(null)

    const isLetterKey = keyCode => keyCode > 64 && keyCode < 91
    const isEnterKey = keyCode => keyCode === 13

    const insertLetter = (letter, word) => {
        const availablePosition = word.indexOf('')

        word[availablePosition] = letter.toUpperCase()

        return word
    }

    const handleKeyDown = ({ key, keyCode }) => {
        const isCurrentWordComplete = words[index] && !words[index].includes('')

        if (isLetterKey(keyCode)) {
            const currentWord = words[index]

            if (currentWord) {
                const word = insertLetter(key, [...currentWord])

                const newWords = [...words]
                newWords[index] = word

                setWords(newWords)
            }
        }

        if (isEnterKey(keyCode) && isCurrentWordComplete) {
            setIndex(v => v + 1)
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

    return (
        <div className="row mt-3">
            <div className="col-md-12">
                <h3 className="alert-success rounded">Wordy</h3>

                <div className="mt-3">
                    {
                        words.map((word, i) => (
                            <div key={i} className="d-flex justify-content-center">
                                {
                                    word.map((v, j) => (
                                        <Box key={`${i}_${j}`} value={v} />
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Wordy