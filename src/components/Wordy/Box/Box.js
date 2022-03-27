import './Box.css'

const Box = ({ value, color }) => (
    <div className={`d-flex justify-content-center align-items-center border border-2 fw-bold rounded box ${color}`}>
        {value}
    </div>
)

export default Box