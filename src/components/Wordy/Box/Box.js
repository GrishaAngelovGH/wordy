import './Box.css'

const Box = ({ value }) => (
    <div className="d-flex justify-content-center align-items-center border border-2 fw-bold rounded box">
        {value}
    </div>
)

export default Box