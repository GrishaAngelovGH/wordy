import { useState, useEffect } from 'react'
import './Keyboard.css'

const BackspaceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-backspace" viewBox="0 0 16 16">
        <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
        <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
    </svg>
)

const EnterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
    </svg>
)

const Key = ({ value, color, event }) => {
    const handleClick = () => {
        window.dispatchEvent(event)
    }

    return (
        <div onClick={handleClick} role="button" className={`d-flex justify-content-center align-items-center border boder-2 rounded m-1 text-white key ${color}`}>
            {value}
        </div>
    )
}

const Keyboard = ({ word, wordColors }) => {
    const [colors, setColors] = useState({
        q: '', w: '', e: '', r: '', t: '', y: '', u: '', i: '', o: '', p: '',
        a: '', s: '', d: '', f: '', g: '', h: '', j: '', k: '', l: '',
        z: '', x: '', c: '', v: '', b: '', n: '', m: ''
    })

    const [keyRows, setKeyRows] = useState([])

    useEffect(() => {
        setColors(values => {
            const newColors = { ...values }
            const isEmptyWord = word.every(v => v === '')

            isEmptyWord && setColors(values => ({
                ...Object.keys(values).map(v => ({ [v]: 'bg-transparent' }))
            }))

            word.forEach((v, i) => {
                if (wordColors[i] !== 'bg-white' && values[v] !== 'bg-success') {
                    newColors[v] = wordColors[i]
                }
            })

            return newColors
        })
    }, [wordColors, word])

    useEffect(() => {
        setKeyRows([
            [
                { value: 'Q', color: colors['q'], event: new KeyboardEvent('keydown', { key: 'q', keyCode: 81 }) },
                { value: 'W', color: colors['w'], event: new KeyboardEvent('keydown', { key: 'w', keyCode: 87 }) },
                { value: 'E', color: colors['e'], event: new KeyboardEvent('keydown', { key: 'e', keyCode: 69 }) },
                { value: 'R', color: colors['r'], event: new KeyboardEvent('keydown', { key: 'r', keyCode: 82 }) },
                { value: 'T', color: colors['t'], event: new KeyboardEvent('keydown', { key: 't', keyCode: 84 }) },
                { value: 'Y', color: colors['y'], event: new KeyboardEvent('keydown', { key: 'y', keyCode: 89 }) },
                { value: 'U', color: colors['u'], event: new KeyboardEvent('keydown', { key: 'u', keyCode: 85 }) },
                { value: 'I', color: colors['i'], event: new KeyboardEvent('keydown', { key: 'i', keyCode: 73 }) },
                { value: 'O', color: colors['o'], event: new KeyboardEvent('keydown', { key: 'o', keyCode: 79 }) },
                { value: 'P', color: colors['p'], event: new KeyboardEvent('keydown', { key: 'p', keyCode: 80 }) }
            ],
            [
                { value: 'A', color: colors['a'], event: new KeyboardEvent('keydown', { key: 'a', keyCode: 65 }) },
                { value: 'S', color: colors['s'], event: new KeyboardEvent('keydown', { key: 's', keyCode: 83 }) },
                { value: 'D', color: colors['d'], event: new KeyboardEvent('keydown', { key: 'd', keyCode: 68 }) },
                { value: 'F', color: colors['f'], event: new KeyboardEvent('keydown', { key: 'f', keyCode: 70 }) },
                { value: 'G', color: colors['g'], event: new KeyboardEvent('keydown', { key: 'g', keyCode: 71 }) },
                { value: 'H', color: colors['h'], event: new KeyboardEvent('keydown', { key: 'h', keyCode: 72 }) },
                { value: 'J', color: colors['j'], event: new KeyboardEvent('keydown', { key: 'j', keyCode: 74 }) },
                { value: 'K', color: colors['k'], event: new KeyboardEvent('keydown', { key: 'k', keyCode: 75 }) },
                { value: 'L', color: colors['l'], event: new KeyboardEvent('keydown', { key: 'l', keyCode: 76 }) }
            ],
            [
                { value: <EnterIcon />, color: '', event: new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13 }) },
                { value: 'Z', color: colors['z'], event: new KeyboardEvent('keydown', { key: 'z', keyCode: 90 }) },
                { value: 'X', color: colors['x'], event: new KeyboardEvent('keydown', { key: 'x', keyCode: 88 }) },
                { value: 'C', color: colors['c'], event: new KeyboardEvent('keydown', { key: 'c', keyCode: 67 }) },
                { value: 'V', color: colors['v'], event: new KeyboardEvent('keydown', { key: 'v', keyCode: 86 }) },
                { value: 'B', color: colors['b'], event: new KeyboardEvent('keydown', { key: 'b', keyCode: 66 }) },
                { value: 'N', color: colors['n'], event: new KeyboardEvent('keydown', { key: 'n', keyCode: 78 }) },
                { value: 'M', color: colors['m'], event: new KeyboardEvent('keydown', { key: 'm', keyCode: 77 }) },
                { value: <BackspaceIcon />, color: '', event: new KeyboardEvent('keydown', { key: 'Backspace', keyCode: 8 }) }
            ]
        ])
    }, [colors])

    return (
        <div className="mt-md-3 keyboard">
            {
                keyRows.map((keyRow, i) => (
                    <div key={i} className="d-flex">
                        {
                            keyRow.map((v, j) => (
                                <Key key={`${i}_${j}`} value={v.value} color={v.color} event={v.event} />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Keyboard