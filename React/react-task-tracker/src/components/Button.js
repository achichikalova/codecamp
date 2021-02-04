import PropTypes from 'prop-types'

const Button = ({text, onClick, color}) => {
    return <button 
                style={{backgroundColor: color}}
                onClick={onClick} 
                className='btn-add'>
                    {text}
            </button> 
}

Button.propTypes = {
    color: 'steelblue',
    text: PropTypes.string,
    onClick: PropTypes.func
}
export default Button
