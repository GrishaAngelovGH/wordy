import './Keyboard.css'

const Key = ({ value }) => (
    <div style={{ minWidth: 35, minHeight: 35 }} className="d-flex justify-content-center align-items-center border boder-2 rounded m-1 text-white">
        {value}
    </div>
)

const Keyboard = () => {

    return (
        <div className="mt-md-3 keyboard">
            <div className="d-flex">
                <Key value={'Q'} />
                <Key value={'W'} />
                <Key value={'E'} />
                <Key value={'R'} />
                <Key value={'T'} />
                <Key value={'Y'} />
                <Key value={'U'} />
                <Key value={'I'} />
                <Key value={'O'} />
                <Key value={'P'} />
            </div>

            <div className="d-flex" style={{ marginLeft: 24 }}>
                <Key value={'A'} />
                <Key value={'S'} />
                <Key value={'D'} />
                <Key value={'F'} />
                <Key value={'G'} />
                <Key value={'H'} />
                <Key value={'J'} />
                <Key value={'K'} />
                <Key value={'L'} />
            </div>

            <div className="d-flex" style={{ marginLeft: 73 }}>
                <Key value={'Z'} />
                <Key value={'X'} />
                <Key value={'C'} />
                <Key value={'V'} />
                <Key value={'B'} />
                <Key value={'N'} />
                <Key value={'M'} />
            </div>
        </div>
    )
}

export default Keyboard