import './Box.css'

const Box = ({ value, color }) => {
    const textColor = color === 'bg-white' ? 'text-dark' : 'text-white'

    return (
        <div className={`d-flex justify-content-center align-items-center border border-2 fw-bold rounded box ${color} ${textColor}`}>
            {value}
        </div>
    )
}

export default Box