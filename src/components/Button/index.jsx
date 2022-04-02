import './styles.css';

const Button = ({callback, text, className}) => {
  return (
    <button className={className} onClick={callback}>{text}</button>
  )
}

export default Button;