import { useState } from 'react'

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